variable "environment_name" {
  description = "Name of the environment (e.g., dev, prod)"
  type        = string
}

variable "location" {
  description = "Azure region for resource deployment"
  type        = string
  default     = "Brazil South"
}

variable "static_web_app_location" {
  description = "Azure region for Static Web App (limited availability)"
  type        = string
  default     = "East US 2"
}

variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}
