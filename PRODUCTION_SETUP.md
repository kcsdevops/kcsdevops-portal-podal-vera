# 🔐 Secrets do GitHub para Deploy Automático

## ✅ Ambiente de Produção Criado com Sucesso!

### 📋 Informações do Ambiente de Produção:
- **Nome:** stapp-podologia-prod
- **Resource Group:** rg-podologia-prod
- **URL:** https://white-sand-030d8240f.1.azurestaticapps.net
- **Região:** East US 2

### 🔑 Secrets para Configurar no GitHub:

1. **AZURE_STATIC_WEB_APPS_API_TOKEN_DEV** (já existe)
   ```
   9f564a862d1c7bccbb3486d20e024a3acda49905d7785e8eb238c2e27c5b058801-83ff8010-2b53-4530-af3f-f04d8f5cdd3b00f16170a0b5420f
   ```

2. **AZURE_STATIC_WEB_APPS_API_TOKEN_PROD** (NOVO)
   ```
   a411da0466ca8af24243ad856de94281d7a5520852c674af33bf45a69f9368ba01-0f511017-51b6-4019-984d-92712d2e835900f1231030d8240f
   ```

### 📝 Como Configurar no GitHub:

1. Vá para: https://github.com/kcsdevops/portal-podal-vera/settings/secrets/actions
2. Clique em "New repository secret"
3. Nome: `AZURE_STATIC_WEB_APPS_API_TOKEN_PROD`
4. Value: Cole o token acima
5. Clique em "Add secret"

### 🚀 URLs dos Ambientes:

| Ambiente | Branch | URL |
|----------|--------|-----|
| **DEV** | `master` | https://brave-pebble-0a0b5420f.1.azurestaticapps.net |
| **PROD** | `main` | https://white-sand-030d8240f.1.azurestaticapps.net |

### 🔄 Próximos Passos:

1. ✅ Ambiente de produção criado
2. ⏳ Configurar secret no GitHub (AZURE_STATIC_WEB_APPS_API_TOKEN_PROD)
3. ⏳ Testar deploy para produção
4. ⏳ Configurar proteção da branch main

### 📝 Comando para Testar Deploy:

```bash
# DEV (automático ao push para master)
git push origin master

# PROD (via merge para main)
git checkout main
git merge master
git push origin main
```
