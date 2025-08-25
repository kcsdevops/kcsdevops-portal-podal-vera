# Script de Deploy - Portal Podal Vera
# Este script faz o deploy usando as credenciais do Service Principal

param(
    [Parameter(Mandatory=$false)]
    [string]$EnvironmentName = "portal-podal-vera-dev",
    
    [Parameter(Mandatory=$false)]
    [string]$Location = "eastus"
)

Write-Host "=== Deploy Portal Podal Vera ===" -ForegroundColor Cyan
Write-Host "Environment: $EnvironmentName" -ForegroundColor Yellow
Write-Host "Location: $Location" -ForegroundColor Yellow
Write-Host ""

# Verificar se está logado no Azure
Write-Host "Verificando autenticação Azure..." -ForegroundColor Green
$account = az account show 2>$null | ConvertFrom-Json
if (-not $account) {
    Write-Host "Erro: Não está logado no Azure. Execute primeiro o script setup-auth.ps1" -ForegroundColor Red
    exit 1
}

Write-Host "Logado como: $($account.user.name)" -ForegroundColor Green
Write-Host "Subscription: $($account.name)" -ForegroundColor Green
Write-Host ""

# Configurar variáveis de ambiente para azd
$env:AZURE_ENV_NAME = $EnvironmentName
$env:AZURE_LOCATION = $Location

# Verificar se azd está disponível
Write-Host "Verificando Azure Developer CLI..." -ForegroundColor Green
$azdPath = Get-Command azd -ErrorAction SilentlyContinue
if (-not $azdPath) {
    $azdPath = "C:\Users\renov\AppData\Local\Programs\Azure Dev CLI\azd.exe"
    if (-not (Test-Path $azdPath)) {
        Write-Host "Erro: Azure Developer CLI não encontrado" -ForegroundColor Red
        exit 1
    }
}

Write-Host "Azure Developer CLI encontrado: $($azdPath.Source)" -ForegroundColor Green
Write-Host ""

try {
    # Fazer o deploy
    Write-Host "Iniciando deploy..." -ForegroundColor Green
    & $azdPath up --environment $EnvironmentName --location $Location
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=== Deploy Concluído com Sucesso! ===" -ForegroundColor Green
        Write-Host "Você pode acessar sua aplicação através do Azure Portal" -ForegroundColor Yellow
    } else {
        Write-Host "Erro durante o deploy. Código de saída: $LASTEXITCODE" -ForegroundColor Red
    }
} catch {
    Write-Host "Erro durante o deploy: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "Para verificar o status do deploy:" -ForegroundColor Cyan
Write-Host "az deployment group list --resource-group rg-$EnvironmentName" -ForegroundColor White
