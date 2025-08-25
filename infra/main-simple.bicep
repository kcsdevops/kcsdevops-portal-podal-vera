targetScope = 'resourceGroup'

// Parameters
@description('Name of the environment (e.g., dev, prod)')
param environmentName string

@description('Azure region for resource deployment')
param location string

// Variables
var resourceToken = uniqueString(subscription().id, resourceGroup().id, location, environmentName)
var resourcePrefix = 'ppv' // Portal Podal Vera

// Resource names using recommended naming convention
var staticWebAppName = 'az-${resourcePrefix}-${resourceToken}'

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: staticWebAppName
  location: location
  tags: {
    'azd-env-name': environmentName
    'azd-service-name': 'webapp'
  }
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
      appLocation: '/'
      outputLocation: 'out'
    }
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    publicNetworkAccess: 'Enabled'
  }
}

// Outputs for azd
output RESOURCE_GROUP_ID string = resourceGroup().id
output STATIC_WEB_APP_NAME string = staticWebApp.name
output STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'
