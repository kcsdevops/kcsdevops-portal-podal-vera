targetScope = 'resourceGroup'

// Parameters
@description('Name of the environment (e.g., dev, prod)')
param environmentName string

@description('Azure region for resource deployment')
param location string = 'brazilsouth' // Região do Brasil por padrão

// Variables
var resourceToken = uniqueString(subscription().id, resourceGroup().id, location, environmentName)
var resourcePrefix = 'ppv' // Portal Podal Vera

// Resource names using recommended naming convention
var staticWebAppName = 'az-${resourcePrefix}-${resourceToken}'
var logAnalyticsWorkspaceName = 'az-law-${resourcePrefix}-${resourceToken}'
var applicationInsightsName = 'az-ai-${resourcePrefix}-${resourceToken}'
var managedIdentityName = 'az-mi-${resourcePrefix}-${resourceToken}'

// Log Analytics Workspace - Brasil Sul
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: logAnalyticsWorkspaceName
  location: location // Brazil South
  tags: {
    'azd-env-name': environmentName
    projeto: 'portal-podal-vera'
    regiao: 'brasil'
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

// Application Insights - Brasil Sul
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location // Brazil South
  kind: 'web'
  tags: {
    'azd-env-name': environmentName
    projeto: 'portal-podal-vera'
    regiao: 'brasil'
  }
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

// User-assigned Managed Identity - Brasil Sul
resource managedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: managedIdentityName
  location: location // Brazil South
  tags: {
    'azd-env-name': environmentName
    projeto: 'portal-podal-vera'
    regiao: 'brasil'
  }
}

// Static Web App - East US 2 (região mais próxima disponível)
resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: staticWebAppName
  location: 'East US 2' // Static Web Apps - região limitada mais próxima
  tags: {
    'azd-env-name': environmentName
    'azd-service-name': 'webapp'
    projeto: 'portal-podal-vera'
    regiao: 'brasil'
  }
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
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
    AZURE_REGION: location
    PROJETO: 'Portal Podal Vera - Podologia Profissional'
  }
}

// Outputs for azd
output RESOURCE_GROUP_ID string = resourceGroup().id
output STATIC_WEB_APP_NAME string = staticWebApp.name
output STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'
output APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString
output LOG_ANALYTICS_WORKSPACE_ID string = logAnalyticsWorkspace.id
output AZURE_REGION string = location
output MANAGED_IDENTITY_CLIENT_ID string = managedIdentity.properties.clientId
output MANAGED_IDENTITY_PRINCIPAL_ID string = managedIdentity.properties.principalId
