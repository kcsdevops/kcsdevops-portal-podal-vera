targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param environmentName string

@minLength(1)
@description('Primary location for all resources')
param location string

@description('Name of the resource group to create')
param resourceGroupName string

@description('Application environment variables for backend service')
param backendEnvironmentVariables object = {}

var resourceToken = uniqueString(subscription().id, location, environmentName)
var resourcePrefix = 'pv'
var tags = { 'azd-env-name': environmentName }

// Create resource group
resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: resourceGroupName
  location: location
  tags: tags
}

// Main resources module
module resources 'resources.bicep' = {
  name: 'resources'
  scope: rg
  params: {
    location: location
    environmentName: environmentName
    resourceToken: resourceToken
    resourcePrefix: resourcePrefix
    tags: tags
    backendEnvironmentVariables: backendEnvironmentVariables
  }
}

// Outputs
output RESOURCE_GROUP_ID string = rg.id
output AZURE_CONTAINER_REGISTRY_ENDPOINT string = resources.outputs.AZURE_CONTAINER_REGISTRY_ENDPOINT
output AZURE_CONTAINER_REGISTRY_NAME string = resources.outputs.AZURE_CONTAINER_REGISTRY_NAME
output BACKEND_IDENTITY_PRINCIPAL_ID string = resources.outputs.BACKEND_IDENTITY_PRINCIPAL_ID
output BACKEND_NAME string = resources.outputs.BACKEND_NAME
output BACKEND_URI string = resources.outputs.BACKEND_URI
output DATABASE_CONNECTION_STRING string = resources.outputs.DATABASE_CONNECTION_STRING

// Log Analytics Workspace
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: logAnalyticsWorkspaceName
  location: location
  tags: {
    'azd-env-name': environmentName
  }
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      searchVersion: 1
      legacy: 0
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// User Assigned Managed Identity
resource userAssignedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: userAssignedIdentityName
  location: location
  tags: {
    'azd-env-name': environmentName
  }
}

// Application Insights
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location
  kind: 'web'
  tags: {
    'azd-env-name': environmentName
  }
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: staticWebAppName
  location: 'East US 2' // Static Web Apps têm regiões limitadas
  tags: {
    'azd-env-name': environmentName
    'azd-service-name': 'webapp'
  }
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    // Repository configuration will be set up by azd
    buildProperties: {
      skipGithubActionWorkflowGeneration: false
      appLocation: '/src'
      outputLocation: 'out'
      appBuildCommand: 'npm run build'
    }
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    publicNetworkAccess: 'Enabled'
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

// Configure Application Insights for Static Web App
resource staticWebAppAppSettings 'Microsoft.Web/staticSites/config@2024-04-01' = {
  parent: staticWebApp
  name: 'appsettings'
  properties: {
    APPLICATIONINSIGHTS_CONNECTION_STRING: applicationInsights.properties.ConnectionString
  }
}

// Outputs for azd
output RESOURCE_GROUP_ID string = resourceGroup().id
output STATIC_WEB_APP_NAME string = staticWebApp.name
output STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'
output APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString
output LOG_ANALYTICS_WORKSPACE_ID string = logAnalyticsWorkspace.id
output USER_ASSIGNED_IDENTITY_ID string = userAssignedIdentity.id
output USER_ASSIGNED_IDENTITY_CLIENT_ID string = userAssignedIdentity.properties.clientId
