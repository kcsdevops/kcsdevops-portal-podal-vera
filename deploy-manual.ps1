param(
    [Parameter(Mandatory=$true)]
    [string]$DeploymentToken,
    [Parameter(Mandatory=$true)]
    [string]$AppLocation
)

# Configurações
$apiUrl = "https://deploy.azure.com/api/deploy"
$headers = @{
    "Authorization" = "Bearer $DeploymentToken"
    "Content-Type" = "application/zip"
}

# Criar arquivo ZIP dos arquivos de saída
$zipPath = ".\deployment.zip"
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($AppLocation, $zipPath)

Write-Host "Arquivo ZIP criado: $zipPath"
Write-Host "Tamanho: $((Get-Item $zipPath).Length / 1MB) MB"

# Fazer upload
try {
    $fileBytes = [System.IO.File]::ReadAllBytes($zipPath)
    $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Headers $headers -Body $fileBytes
    Write-Host "Deploy realizado com sucesso!"
    Write-Host $response
} catch {
    Write-Error "Erro no deploy: $($_.Exception.Message)"
}

# Limpar arquivo temporário
Remove-Item $zipPath -Force
