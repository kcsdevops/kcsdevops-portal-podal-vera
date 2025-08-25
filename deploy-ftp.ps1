# 🚀 SCRIPT DE DEPLOY FTP - PORTAL VERACARE PODÓLOGA
# Execute este script após configurar suas credenciais FTP

param(
    [Parameter(Mandatory=$true)]
    [string]$FtpServer,
    
    [Parameter(Mandatory=$true)]
    [string]$FtpUser,
    
    [Parameter(Mandatory=$true)]
    [string]$FtpPassword,
    
    [string]$RemotePath = "/public_html"
)

Write-Host "🚀 INICIANDO DEPLOY DO PORTAL VERACARE PODÓLOGA" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green

# Verificar se a pasta out existe
$buildPath = Join-Path $PSScriptRoot "out"
if (-not (Test-Path $buildPath)) {
    Write-Host "❌ ERRO: Pasta 'out' não encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro!" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pasta de build encontrada: $buildPath" -ForegroundColor Green

# Função para upload via FTP
function Upload-FilesFtp {
    param(
        [string]$LocalPath,
        [string]$Server,
        [string]$Username,
        [string]$Password,
        [string]$RemotePath
    )
    
    try {
        # Criar sessão FTP
        Write-Host "📡 Conectando ao servidor FTP: $Server" -ForegroundColor Yellow
        
        # Listar todos os arquivos recursivamente
        $files = Get-ChildItem -Path $LocalPath -Recurse -File
        $totalFiles = $files.Count
        $currentFile = 0
        
        Write-Host "📁 Encontrados $totalFiles arquivos para upload" -ForegroundColor Cyan
        
        foreach ($file in $files) {
            $currentFile++
            $relativePath = $file.FullName.Substring($LocalPath.Length + 1)
            $remotePath = "$RemotePath/$($relativePath.Replace('\', '/'))"
            
            Write-Progress -Activity "Uploading files" -Status "Arquivo $currentFile de $totalFiles" -PercentComplete (($currentFile / $totalFiles) * 100)
            Write-Host "📤 Uploading: $relativePath" -ForegroundColor Cyan
            
            # Aqui você pode usar WinSCP, FileZilla CLI ou outra ferramenta FTP
            # Este é um exemplo usando System.Net.WebClient
            try {
                $webclient = New-Object System.Net.WebClient
                $webclient.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
                $uri = "ftp://$Server$remotePath"
                $webclient.UploadFile($uri, $file.FullName)
                $webclient.Dispose()
            }
            catch {
                Write-Host "❌ Erro no upload de $relativePath : $($_.Exception.Message)" -ForegroundColor Red
            }
        }
        
        Write-Progress -Activity "Uploading files" -Completed
        Write-Host "✅ Upload concluído!" -ForegroundColor Green
        
    }
    catch {
        Write-Host "❌ ERRO no FTP: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
    
    return $true
}

# Executar upload
Write-Host "🔄 Iniciando upload dos arquivos..." -ForegroundColor Yellow
$success = Upload-FilesFtp -LocalPath $buildPath -Server $FtpServer -Username $FtpUser -Password $FtpPassword -RemotePath $RemotePath

if ($success) {
    Write-Host ""
    Write-Host "🎉 DEPLOY CONCLUÍDO COM SUCESSO!" -ForegroundColor Green
    Write-Host "=================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 INFORMAÇÕES DO SITE DEPLOYADO:" -ForegroundColor Cyan
    Write-Host "• Empresa: VERACARE PODÓLOGA" -ForegroundColor White
    Write-Host "• Proprietária: Veralucia Trindade Santos" -ForegroundColor White
    Write-Host "• CNPJ: 28.315.288/0001-02" -ForegroundColor White
    Write-Host "• Endereço: Rua Montuori, 102 - Vila Barbosa, São Paulo" -ForegroundColor White
    Write-Host "• WhatsApp: (11) 96738-1029" -ForegroundColor White
    Write-Host "• Email: contato@veracare.com.br" -ForegroundColor White
    Write-Host "• Instagram: @veracare_podologa" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Acesse seu site e verifique se tudo está funcionando!" -ForegroundColor Yellow
    Write-Host "📱 Teste especialmente os links do WhatsApp e Instagram!" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ FALHA NO DEPLOY!" -ForegroundColor Red
    Write-Host "Verifique suas credenciais FTP e tente novamente." -ForegroundColor Yellow
}

# Exemplo de uso:
Write-Host ""
Write-Host "💡 EXEMPLO DE USO:" -ForegroundColor Magenta
Write-Host ".\deploy-ftp.ps1 -FtpServer 'ftp.seudominio.com' -FtpUser 'seuusuario' -FtpPassword 'suasenha'" -ForegroundColor White
Write-Host ""
Write-Host "🔧 ALTERNATIVAS DE DEPLOY:" -ForegroundColor Magenta
Write-Host "1. Use FileZilla (GUI): https://filezilla-project.org/" -ForegroundColor White
Write-Host "2. Use WinSCP (GUI): https://winscp.net/" -ForegroundColor White
Write-Host "3. Use o painel de controle do seu provedor (cPanel/Plesk)" -ForegroundColor White
