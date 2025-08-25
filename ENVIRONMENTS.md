# Configuração de Ambientes - Portal Podologia Profissional

## 🌍 Ambientes Configurados

### 🔧 Desenvolvimento (DEV)
- **Branch:** `master`
- **URL:** https://brave-pebble-0a0b5420f.1.azurestaticapps.net
- **Auto-deploy:** ✅ Ativo
- **Proteção:** ❌ Nenhuma

### 🌟 Produção (PROD)
- **Branch:** `main` 
- **URL:** https://white-sand-030d8240f.1.azurestaticapps.net
- **Auto-deploy:** ✅ Configurado
- **Proteção:** ✅ Environments + Approval

## 🚀 Como Usar

### Deploy para Desenvolvimento
```bash
# Commit e push para master
git add .
git commit -m "feat: nova funcionalidade"
git push origin master
```

### Deploy para Produção
```bash
# 1. Criar branch main
git checkout -b main
git push origin main

# 2. Ou fazer merge via Pull Request
# master -> main (com aprovação)
```

### Preview de Produção
```bash
# Criar PR para main
gh pr create --base main --head feature-branch
```

## 🔧 Scripts de Deploy

### Desenvolvimento
```powershell
.\deploy-azure.ps1 -Environment dev
```

### Produção
```powershell
.\deploy-azure.ps1 -Environment prod
```

## 🔐 Secrets Necessários

Configure estes secrets no GitHub:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_DEV`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_PROD`

## 📋 Checklist de Setup

- [ ] Criar segundo Static Web App no Azure
- [ ] Configurar secrets no GitHub
- [ ] Criar branch `main`
- [ ] Configurar proteção da branch `main`
- [ ] Testar deploy automático
