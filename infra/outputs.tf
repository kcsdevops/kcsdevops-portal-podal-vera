output "RESOURCE_GROUP_ID" {
  description = "Resource group ID"
  value       = data.azurerm_resource_group.main.id
}

output "STATIC_WEB_APP_NAME" {
  description = "Static Web App name"
  value       = azurerm_static_web_app.main.name
}

output "STATIC_WEB_APP_URL" {
  description = "Static Web App URL"
  value       = "https://${azurerm_static_web_app.main.default_host_name}"
}

output "APPLICATION_INSIGHTS_CONNECTION_STRING" {
  description = "Application Insights connection string"
  value       = azurerm_application_insights.main.connection_string
  sensitive   = true
}

output "LOG_ANALYTICS_WORKSPACE_ID" {
  description = "Log Analytics Workspace ID"
  value       = azurerm_log_analytics_workspace.main.id
}

output "AZURE_REGION" {
  description = "Azure region"
  value       = var.location
}

output "MANAGED_IDENTITY_CLIENT_ID" {
  description = "Managed Identity client ID"
  value       = azurerm_user_assigned_identity.main.client_id
}

output "MANAGED_IDENTITY_PRINCIPAL_ID" {
  description = "Managed Identity principal ID"
  value       = azurerm_user_assigned_identity.main.principal_id
}
