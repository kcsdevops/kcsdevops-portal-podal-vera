# 🔧 Guia de Resolução - Problemas Git/GitHub

## ❌ Erro: `failed to push some refs to GitHub`

### **Causa Principal**
O repositório `portal-podal-vera` não existe no GitHub ou há problemas de configuração.

---

## ✅ **Soluções Passo-a-Passo**

### **1. Criar Repositório no GitHub**

**Acesse:** https://github.com/new

**Configurações:**
- **Repository name:** `portal-podal-vera`
- **Public** ou **Private** (sua escolha)
- ❌ **NÃO** marque "Add a README file"
- ❌ **NÃO** marque "Add .gitignore"
- ❌ **NÃO** marque "Choose a license"

### **2. Configurar Remote Localmente**

```powershell
# Substitua 'SEU-USUARIO' pelo seu username real do GitHub
.\scripts\setup-github.ps1 -GitHubUsername 'SEU-USUARIO'
```

**OU manualmente:**

```powershell
# Remove remote atual
git remote remove origin

# Adiciona novo remote (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/portal-podal-vera.git

# Push inicial
git push -u origin master
```

### **3. Se Repository Já Existe com Conteúdo**

```powershell
# Pull primeiro para sincronizar
git pull origin master --allow-unrelated-histories

# Resolve conflitos se necessário
# Depois faz push
git push -u origin master
```

---

## 🔐 **Problemas de Autenticação**

### **GitHub Token (Recomendado)**

1. **Gere um Personal Access Token:**
   - Acesse: https://github.com/settings/tokens
   - Generate new token (classic)
   - Selecione: `repo` permissions
   - Copie o token

2. **Configure localmente:**
   ```powershell
   # Use token como senha no push
   git push -u origin master
   # Username: seu-usuario
   # Password: ghp_token_aqui
   ```

### **SSH (Alternativa)**

```powershell
# Configure SSH key (se ainda não tiver)
ssh-keygen -t ed25519 -C "seu-email@example.com"

# Adicione a chave ao GitHub
cat ~/.ssh/id_ed25519.pub

# Use URL SSH
git remote set-url origin git@github.com:SEU-USUARIO/portal-podal-vera.git
```

---

## 🎯 **Comandos de Verificação**

```powershell
# Verificar remote configurado
git remote -v

# Verificar status
git status

# Verificar commits
git log --oneline

# Verificar conexão com GitHub
git ls-remote origin
```

---

## 🚀 **Deploy após GitHub**

Após o push para GitHub bem-sucedido:

1. **Configure Static Web App no Azure para usar o repositório**
2. **Configure GitHub Actions automaticamente**
3. **Monitor deploys no Azure Portal**

---

## 📞 **Precisa de Ajuda?**

Execute este comando para diagnóstico completo:

```powershell
Write-Host "=== Diagnóstico Git ===" -ForegroundColor Cyan
Write-Host "Remote:" -ForegroundColor Yellow
git remote -v
Write-Host "`nStatus:" -ForegroundColor Yellow  
git status
Write-Host "`nÚltimos commits:" -ForegroundColor Yellow
git log --oneline -5
Write-Host "`nTeste de conectividade:" -ForegroundColor Yellow
git ls-remote origin 2>&1
```
