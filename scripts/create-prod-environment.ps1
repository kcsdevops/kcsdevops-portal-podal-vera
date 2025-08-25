# Script para Criar Ambiente de Produção no Azure

param(
    [Parameter(Mandatory=$true)]
    [string]$SubscriptionId,
    
    [Parameter(Mandatory=$false)]
    [string]$ResourceGroupName = "rg-podologia-prod",
    
    [Parameter(Mandatory=$false)]
    [string]$StaticWebAppName = "stapp-podologia-prod",
    
    [Parameter(Mandatory=$false)]
    [string]$Location = "East US 2"
)

Write-Host "🏗️ CRIANDO AMBIENTE DE PRODUÇÃO" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Login no Azure (se necessário)
try {
    $context = Get-AzContext
    if (-not $context) {
        Write-Host "🔐 Fazendo login no Azure..." -ForegroundColor Yellow
        Connect-AzAccount
    }
    
    # Selecionar subscription
    Set-AzContext -SubscriptionId $SubscriptionId
    Write-Host "✅ Conectado à subscription: $SubscriptionId" -ForegroundColor Green
}
catch {
    Write-Host "❌ Erro ao conectar no Azure: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Criar Resource Group se não existir
Write-Host "📁 Verificando Resource Group..." -ForegroundColor Yellow
$rg = Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue

if (-not $rg) {
    Write-Host "📁 Criando Resource Group: $ResourceGroupName" -ForegroundColor Yellow
    try {
        New-AzResourceGroup -Name $ResourceGroupName -Location $Location
        Write-Host "✅ Resource Group criado com sucesso!" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Erro ao criar Resource Group: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
}
else {
    Write-Host "✅ Resource Group já existe: $ResourceGroupName" -ForegroundColor Green
}

# Criar Static Web App
Write-Host "🌐 Criando Static Web App..." -ForegroundColor Yellow
try {
    $staticWebApp = az staticwebapp create `
        --name $StaticWebAppName `
        --resource-group $ResourceGroupName `
        --location $Location `
        --source "https://github.com/kcsdevops/portal-podal-vera" `
        --branch "main" `
        --app-location "/" `
        --output-location "out" `
        --login-with-github | ConvertFrom-Json
    
    Write-Host "✅ Static Web App criado com sucesso!" -ForegroundColor Green
    
    # Obter token de deploy
    $deployToken = az staticwebapp secrets list --name $StaticWebAppName --resource-group $ResourceGroupName --query "properties.apiKey" -o tsv
    
    Write-Host ""
    Write-Host "📋 INFORMAÇÕES DO AMBIENTE DE PRODUÇÃO:" -ForegroundColor Cyan
    Write-Host "• Nome: $StaticWebAppName" -ForegroundColor White
    Write-Host "• Resource Group: $ResourceGroupName" -ForegroundColor White
    Write-Host "• URL: https://$($staticWebApp.properties.defaultHostname)" -ForegroundColor White
    Write-Host "• Repository: https://github.com/kcsdevops/portal-podal-vera" -ForegroundColor White
    Write-Host "• Branch: main" -ForegroundColor White
    Write-Host ""
    Write-Host "🔑 TOKEN DE DEPLOY (adicione como secret AZURE_STATIC_WEB_APPS_API_TOKEN_PROD):" -ForegroundColor Yellow
    Write-Host "$deployToken" -ForegroundColor Gray
    Write-Host ""
    
    # Atualizar script de deploy com o novo token
    Write-Host "📝 Atualizando script de deploy..." -ForegroundColor Yellow
    $deployScript = Get-Content ".\deploy-azure.ps1" -Raw
    $deployScript = $deployScript -replace 'NOVO_TOKEN_PRODUCAO_AQUI', $deployToken
    $deployScript = $deployScript -replace 'https://proud-ocean-0a0b5420f.1.azurestaticapps.net', "https://$($staticWebApp.properties.defaultHostname)"
    Set-Content ".\deploy-azure.ps1" -Value $deployScript
    
    Write-Host "✅ Script atualizado com sucesso!" -ForegroundColor Green
}
catch {
    Write-Host "❌ Erro ao criar Static Web App: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 AMBIENTE DE PRODUÇÃO CRIADO COM SUCESSO!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PRÓXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "1. 🔐 Adicione o token como secret no GitHub:" -ForegroundColor White
Write-Host "   Vá em Settings > Secrets > AZURE_STATIC_WEB_APPS_API_TOKEN_PROD" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 🌿 Crie a branch main:" -ForegroundColor White
Write-Host "   git checkout -b main && git push origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. 🔒 Configure proteção da branch main no GitHub" -ForegroundColor White
Write-Host ""
Write-Host "4. 🚀 Teste o deploy fazendo push para main" -ForegroundColor White
