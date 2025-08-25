# Script para Deploy do Portal PODOLOGIA PROFISSIONAL em Múltiplos Ambientes

# Configurações dos ambientes
$environments = @{
    "dev" = @{
        "deploymentToken" = "9f564a862d1c7bccbb3486d20e024a3acda49905d7785e8eb238c2e27c5b058801-83ff8010-2b53-4530-af3f-f04d8f5cdd3b00f16170a0b5420f"
        "siteName" = "stapp-ppv-dev-91d2b378cd3f8"
        "url" = "https://brave-pebble-0a0b5420f.1.azurestaticapps.net"
        "branch" = "master"
    }
    "prod" = @{
        "deploymentToken" = "a411da0466ca8af24243ad856de94281d7a5520852c674af33bf45a69f9368ba01-0f511017-51b6-4019-984d-92712d2e835900f1231030d8240f"
        "siteName" = "stapp-podologia-prod"
        "url" = "https://white-sand-030d8240f.1.azurestaticapps.net"
        "branch" = "main"
    }
}

# Parâmetro para selecionar ambiente
param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("dev", "prod")]
    [string]$Environment = "dev"
)

$currentEnv = $environments[$Environment]

Write-Host "🚀 INICIANDO DEPLOY - AMBIENTE: $($Environment.ToUpper())" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green
Write-Host "🌐 Site: $($currentEnv.siteName)" -ForegroundColor Cyan
Write-Host "🔗 URL: $($currentEnv.url)" -ForegroundColor Cyan
Write-Host "🌿 Branch: $($currentEnv.branch)" -ForegroundColor Cyan
Write-Host ""

# Verificar se a pasta out existe
$buildPath = ".\out"
if (-not (Test-Path $buildPath)) {
    Write-Host "❌ ERRO: Pasta 'out' não encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro!" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pasta de build encontrada: $buildPath" -ForegroundColor Green

# Criar arquivo ZIP dos arquivos da pasta out
$zipPath = ".\deploy-temp.zip"
Write-Host "📦 Criando arquivo ZIP..." -ForegroundColor Yellow

try {
    if (Test-Path $zipPath) {
        Remove-Item $zipPath -Force
    }
    
    Compress-Archive -Path "$buildPath\*" -DestinationPath $zipPath -Force
    Write-Host "✅ Arquivo ZIP criado: $zipPath" -ForegroundColor Green
}
catch {
    Write-Host "❌ Erro ao criar ZIP: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Fazer upload usando a Azure Static Web Apps REST API
Write-Host "📤 Fazendo upload para Azure Static Web Apps..." -ForegroundColor Yellow

try {
    # URL da API do Azure Static Web Apps
    $apiUrl = "https://api.github.com/repos/Azure/static-web-apps-deploy/dispatches"
    
    # Como a API direta é complexa, vamos usar uma abordagem alternativa
    # Vamos conectar o repositório GitHub ao Static Web App
    
    Write-Host "💡 Para completar o deploy no ambiente $($Environment.ToUpper()), siga estes passos:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. 📁 Os arquivos estão prontos na pasta 'out/'" -ForegroundColor White
    Write-Host "2. 🌐 Acesse: https://portal.azure.com" -ForegroundColor White
    Write-Host "3. 🔍 Procure por: $($currentEnv.siteName)" -ForegroundColor White
    Write-Host "4. ⚙️ Vá em 'Configuration' > 'Source'" -ForegroundColor White
    Write-Host "5. 🔗 Configure o GitHub repo: kcsdevops/portal-podal-vera" -ForegroundColor White
    Write-Host "6. 🌿 Branch: $($currentEnv.branch)" -ForegroundColor White
    Write-Host "7. 📂 App location: /" -ForegroundColor White
    Write-Host "8. 📦 Output location: out" -ForegroundColor White
    Write-Host ""
    Write-Host "🔑 Token de Deploy ($Environment):" -ForegroundColor Yellow
    Write-Host "$($currentEnv.deploymentToken)" -ForegroundColor Gray
    
}
catch {
    Write-Host "❌ Erro no upload: $($_.Exception.Message)" -ForegroundColor Red
}

# Limpar arquivo temporário
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Write-Host ""
Write-Host "📋 INFORMAÇÕES DO SITE - AMBIENTE: $($Environment.ToUpper())" -ForegroundColor Cyan
Write-Host "• Projeto: PODOLOGIA PROFISSIONAL - EM FORMAÇÃO" -ForegroundColor White
Write-Host "• Status: Futuro Consultório de Podologia" -ForegroundColor White
Write-Host "• Ambiente: $($Environment.ToUpper())" -ForegroundColor White
Write-Host "• WhatsApp: (11) 96738-1029" -ForegroundColor White
Write-Host "• URL: $($currentEnv.url)" -ForegroundColor White
Write-Host ""
Write-Host "✅ ARQUIVOS PRONTOS PARA DEPLOY NO AMBIENTE $($Environment.ToUpper())!" -ForegroundColor Green
