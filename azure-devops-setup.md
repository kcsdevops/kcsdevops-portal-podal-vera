# Configuração da Pipeline Azure DevOps

Este documento contém as instruções para configurar a pipeline CI/CD do Portal Podal Vera no Azure DevOps.

## 📋 Pré-requisitos

1. **Azure DevOps Organization** com projeto criado
2. **Azure Subscription** ativa
3. **Azure Static Web Apps** criado
4. **Repositório GitHub** conectado ao Azure DevOps

## 🚀 Configuração Passo a Passo

### 1. Configurar Service Connection

1. No Azure DevOps, vá para **Project Settings** > **Service connections**
2. Clique em **New service connection**
3. Selecione **Azure Resource Manager**
4. Escolha **Service principal (automatic)**
5. Configure:
   - **Subscription**: Sua subscription Azure
   - **Resource group**: `rg-portal-podal-vera`
   - **Service connection name**: `Azure-Subscription`

### 2. Configurar Variable Groups

1. Vá para **Pipelines** > **Library**
2. Clique em **+ Variable group**
3. Nome: `portal-podal-vera-vars`
4. Adicione as variáveis:

```
AZURE_STATIC_WEB_APPS_API_TOKEN: [token-do-swa-production]
AZURE_STATIC_WEB_APPS_API_TOKEN_STAGING: [token-do-swa-staging]
NEXT_PUBLIC_API_URL: https://your-backend-url.azurecontainerapps.io
NEXT_PUBLIC_WHATSAPP_NUMBER: 5511967381029
```

### 3. Configurar Environments

1. Vá para **Pipelines** > **Environments**
2. Crie os environments:
   - **production** (com approval se necessário)
   - **staging**

### 4. Obter Token do Azure Static Web Apps

1. No Azure Portal, vá para o seu Static Web App
2. Vá para **Settings** > **Configuration**
3. Copie o **Deployment token**
4. Adicione como variável `AZURE_STATIC_WEB_APPS_API_TOKEN`

### 5. Configurar a Pipeline

1. No Azure DevOps, vá para **Pipelines**
2. Clique em **New pipeline**
3. Selecione **GitHub** ou **Azure Repos Git**
4. Selecione o repositório `portal-podal-vera`
5. Escolha **Existing Azure Pipelines YAML file**
6. Selecione `/azure-pipelines.yml`

## 🔧 Configurações Avançadas

### Branch Policies

Configure no repositório:
1. **Require pull request reviews** antes do merge
2. **Require status checks** da pipeline
3. **Require up-to-date branches**

### Notificações

Configure em **Project Settings** > **Notifications**:
- Build failed
- Release deployment completed
- Release deployment failed

### Monitoramento

Configure Application Insights:
1. Crie um recurso Application Insights
2. Adicione a connection string como variável
3. Configure custom telemetry no código

## 📊 Stages da Pipeline

1. **BuildAndTest**: Compilação e testes
2. **SecurityAndQuality**: Verificações de segurança
3. **DeployProduction**: Deploy para produção (branch master)
4. **PostDeploymentTests**: Testes pós-deploy
5. **DeployStaging**: Deploy para staging (branch develop)

## 🔍 Troubleshooting

### Problemas Comuns

1. **Token inválido**: Verifique se o token do SWA está correto
2. **Build falha**: Verifique as dependências no package.json
3. **Deploy falha**: Verifique permissões do service principal

### Logs Úteis

- Build logs: **Pipelines** > **Runs** > [pipeline-run]
- Deploy logs: Azure Portal > Static Web App > **Deployment History**

## 🛡️ Segurança

- Todos os tokens são armazenados como variáveis secretas
- Service principal com permissões mínimas necessárias
- Scans de segurança automatizados com npm audit

## 📈 Métricas

A pipeline coleta métricas de:
- Tempo de build
- Taxa de sucesso de deploys
- Cobertura de testes
- Vulnerabilidades de segurança
