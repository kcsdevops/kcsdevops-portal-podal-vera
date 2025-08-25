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

@description('Node.js environment (production, development)')
param nodeEnv string = 'production'

@description('Application port')
param port string = '3001'

@description('Twilio Account SID')
@secure()
param twilioAccountSid string

@description('Twilio Auth Token')
@secure()
param twilioAuthToken string

@description('Twilio WhatsApp From Number')
param twilioWhatsappFrom string

@description('Clinic WhatsApp Number')
param clinicWhatsapp string

@description('CORS Origins')
param corsOrigins string = 'https://brave-pebble-0a0b5420f.1.azurestaticapps.net'

@description('Timezone')
param timezone string = 'America/Sao_Paulo'

@description('PostgreSQL Admin Password')
@secure()
param postgresAdminPassword string

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
    nodeEnv: nodeEnv
    port: port
    twilioAccountSid: twilioAccountSid
    twilioAuthToken: twilioAuthToken
    twilioWhatsappFrom: twilioWhatsappFrom
    clinicWhatsapp: clinicWhatsapp
    corsOrigins: corsOrigins
    timezone: timezone
    postgresAdminPassword: postgresAdminPassword
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
