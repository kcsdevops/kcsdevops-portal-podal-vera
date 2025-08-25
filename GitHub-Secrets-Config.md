# GitHub Secrets Configuration

Para que o deploy de produção funcione, você precisa configurar este secret no GitHub:

## Secret para Produção:

**Nome:** AZURE_STATIC_WEB_APPS_API_TOKEN_PROD
**Valor:** a411da0466ca8af24243ad856de94281d7a5520852c674af33bf45a69f9368ba01-0f511017-51b6-4019-984d-92712d2e835900f1231030d8240f

## Como configurar:

1. Vá para: https://github.com/kcsdevops/portal-podal-vera/settings/secrets/actions
2. Clique em "New repository secret" 
3. Nome: AZURE_STATIC_WEB_APPS_API_TOKEN_PROD
4. Value: Cole o token acima
5. Clique em "Add secret"

## URLs dos ambientes:

- DEV: https://brave-pebble-0a0b5420f.1.azurestaticapps.net
- PROD: https://white-sand-030d8240f.1.azurestaticapps.net

Após configurar o secret, o GitHub Actions fará o deploy automático para produção quando você fizer push para a branch `main`.
