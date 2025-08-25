# Configure the Azure Provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
    azurecaf = {
      source  = "aztfmod/azurecaf"
      version = "~>1.2.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# Data source to get current subscription information
data "azurerm_client_config" "current" {}

# Data source to get current resource group
data "azurerm_resource_group" "main" {
  name = var.resource_group_name
}

# Generate resource token for unique naming
locals {
  resource_token = substr(
    sha256("${data.azurerm_client_config.current.subscription_id}-${data.azurerm_resource_group.main.id}-${var.location}-${var.environment_name}"),
    0, 13
  )
  resource_prefix = "ppv"
  
  # Common tags
  common_tags = {
    "azd-env-name" = var.environment_name
    projeto        = "portal-podal-vera"
    regiao         = "brasil"
  }
}

# Log Analytics Workspace
resource "azurecaf_name" "log_analytics_workspace" {
  name          = local.resource_prefix
  resource_type = "azurerm_log_analytics_workspace"
  suffixes      = [local.resource_token]
}

resource "azurerm_log_analytics_workspace" "main" {
  name                = azurecaf_name.log_analytics_workspace.result
  location            = var.location
  resource_group_name = data.azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = 30

  tags = local.common_tags
}

# User-assigned Managed Identity
resource "azurecaf_name" "managed_identity" {
  name          = local.resource_prefix
  resource_type = "azurerm_user_assigned_identity"
  suffixes      = [local.resource_token]
}

resource "azurerm_user_assigned_identity" "main" {
  name                = azurecaf_name.managed_identity.result
  location            = var.location
  resource_group_name = data.azurerm_resource_group.main.name

  tags = local.common_tags
}

# Application Insights
resource "azurecaf_name" "application_insights" {
  name          = local.resource_prefix
  resource_type = "azurerm_application_insights"
  suffixes      = [local.resource_token]
}

resource "azurerm_application_insights" "main" {
  name                = azurecaf_name.application_insights.result
  location            = var.location
  resource_group_name = data.azurerm_resource_group.main.name
  workspace_id        = azurerm_log_analytics_workspace.main.id
  application_type    = "web"

  tags = local.common_tags
}

# Static Web App
resource "azurecaf_name" "static_web_app" {
  name          = local.resource_prefix
  resource_type = "azurerm_static_site"
  suffixes      = [local.resource_token]
}

resource "azurerm_static_web_app" "main" {
  name                = azurecaf_name.static_web_app.result
  resource_group_name = data.azurerm_resource_group.main.name
  location            = var.static_web_app_location # East US 2 por limitação do serviço
  sku_tier            = "Free"
  sku_size            = "Free"

  tags = merge(local.common_tags, {
    "azd-service-name" = "webapp"
    observacao         = "eastus2-por-limitacao-do-servico"
  })
}
