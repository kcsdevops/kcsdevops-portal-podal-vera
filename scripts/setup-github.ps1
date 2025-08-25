# Script para configurar repositório GitHub
# Execute este script após criar o repositório no GitHub

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$RepositoryName = "portal-podal-vera"
)

Write-Host "=== Configuração do Repositório GitHub ===" -ForegroundColor Cyan
Write-Host "Username: $GitHubUsername" -ForegroundColor Yellow
Write-Host "Repository: $RepositoryName" -ForegroundColor Yellow
Write-Host ""

# Remove origin atual se existir
Write-Host "Removendo remote origin anterior..." -ForegroundColor Green
git remote remove origin 2>$null

# Adiciona novo origin
$repoUrl = "https://github.com/$GitHubUsername/$RepositoryName.git"
Write-Host "Adicionando remote origin: $repoUrl" -ForegroundColor Green
git remote add origin $repoUrl

# Verifica se há mudanças para commit
$status = git status --porcelain
if ($status) {
    Write-Host "Adicionando arquivos modificados..." -ForegroundColor Green
    git add .
    git commit -m "Update project configuration"
}

# Tenta fazer push
Write-Host "Fazendo push para o repositório..." -ForegroundColor Green
$pushResult = git push -u origin master 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== Push realizado com sucesso! ===" -ForegroundColor Green
    Write-Host "Repositório: $repoUrl" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "=== Erro no push ===" -ForegroundColor Red
    Write-Host "Erro: $pushResult" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possíveis soluções:" -ForegroundColor Yellow
    Write-Host "1. Verifique se o repositório '$RepositoryName' existe no GitHub" -ForegroundColor White
    Write-Host "2. Verifique suas credenciais do GitHub" -ForegroundColor White
    Write-Host "3. Configure autenticação via token ou SSH" -ForegroundColor White
    Write-Host ""
    Write-Host "Para criar o repositório no GitHub:" -ForegroundColor Cyan
    Write-Host "- Acesse: https://github.com/new" -ForegroundColor White
    Write-Host "- Nome: $RepositoryName" -ForegroundColor White
    Write-Host "- NÃO inicialize com README" -ForegroundColor White
}

Write-Host ""
Write-Host "Exemplo de uso:" -ForegroundColor Cyan
Write-Host ".\scripts\setup-github.ps1 -GitHubUsername 'seu-usuario-github'" -ForegroundColor White
