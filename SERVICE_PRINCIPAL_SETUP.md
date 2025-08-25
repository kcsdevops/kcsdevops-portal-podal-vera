# Configuração de Service Principal - Portal Podal Vera

## 📋 Pré-requisitos

Você já tem um Service Principal configurado no arquivo `.tfvars`. Vamos usar essas credenciais para fazer o deploy.

## 🔧 Configuração

### 1. Configure as Credenciais

Edite o arquivo `scripts/setup-auth.ps1` e substitua os valores pelos do seu arquivo `.tfvars`:

```powershell
$env:AZURE_CLIENT_ID = "seu-client-id-do-tfvars"
$env:AZURE_CLIENT_SECRET = "seu-client-secret-do-tfvars" 
$env:AZURE_TENANT_ID = "seu-tenant-id-do-tfvars"
$env:AZURE_SUBSCRIPTION_ID = "seu-subscription-id-do-tfvars"
```

### 2. Execute a Autenticação

```powershell
# Execute o script de configuração
.\scripts\setup-auth.ps1
```

### 3. Faça o Deploy

```powershell
# Execute o script de deploy
.\scripts\deploy.ps1
```

## 🚀 Deploy Alternativo

Se preferir fazer o deploy manualmente:

### Opção 1: Com Azure Developer CLI

```powershell
# Configure as variáveis
$env:AZURE_ENV_NAME = "portal-podal-vera-dev"
$env:AZURE_LOCATION = "eastus"

# Execute o deploy
azd up
```

### Opção 2: Com Azure CLI + Bicep

```powershell
# Crie o resource group
az group create --name "rg-portal-podal-vera-dev" --location "eastus"

# Deploy da infraestrutura
az deployment group create \
  --resource-group "rg-portal-podal-vera-dev" \
  --template-file "infra/main.bicep" \
  --parameters "infra/main.parameters.json" \
  --parameters environmentName="portal-podal-vera-dev" location="eastus"
```

## 📝 Verificação

Após o deploy, verifique se tudo funcionou:

```powershell
# Verificar recursos criados
az resource list --resource-group "rg-portal-podal-vera-dev" --output table

# Verificar Static Web App
az staticwebapp list --output table
```

## 🔐 Segurança

- ✅ Nunca commite arquivos `.tfvars` ou `.env` no Git
- ✅ Use o `.gitignore` já configurado
- ✅ Mantenha as credenciais do Service Principal seguras
- ✅ Considere usar Azure Key Vault para produção

## 🐛 Troubleshooting

### Erro de Autenticação
```powershell
# Verificar se está logado
az account show

# Re-executar login
az login --service-principal --username $CLIENT_ID --password $CLIENT_SECRET --tenant $TENANT_ID
```

### Erro de Permissões
Verifique se o Service Principal tem as permissões necessárias:
- Contributor no Subscription ou Resource Group
- Permissões para criar Static Web Apps

### Erro no azd
```powershell
# Verificar se azd está configurado
azd version

# Reinicializar se necessário
azd init
```
