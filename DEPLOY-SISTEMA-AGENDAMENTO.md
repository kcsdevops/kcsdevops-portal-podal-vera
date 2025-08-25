# 🚀 Sistema de Agendamento Podal Vera - Deploy Completo

## ✅ Status Atual

✅ **Frontend criado**: Componente React integrado ao site  
✅ **Backend criado**: API Node.js completa com notificações  
✅ **Infraestrutura criada**: Bicep files para Azure  
✅ **Build testado**: Next.js compilando sem erros  

## 🎯 **O que foi implementado:**

### 📱 **Frontend (Já funcionando)**
- Formulário de agendamento integrado ao site principal
- Conexão automática com API para carregar horários disponíveis
- Validação em tempo real e feedback visual
- Interface responsiva e acessível

### 🔧 **Backend (Pronto para deploy)**
- **API REST completa** com endpoints:
  - `GET /api/available-slots` - Horários disponíveis
  - `POST /api/appointments` - Criar agendamento
- **Notificações automáticas** via WhatsApp (Twilio)
- **Banco PostgreSQL** com schema otimizado
- **Segurança completa** (rate limiting, validação, CORS)
- **Slots de 30 minutos** (06:00-22:00, seg-sex)

### 🏗️ **Infraestrutura Azure (Bicep)**
- **Container Apps** para o backend Node.js
- **PostgreSQL Flexible Server** para banco de dados
- **Key Vault** para secrets (Twilio, DB)
- **Container Registry** para imagens Docker
- **Application Insights** para monitoramento
- **Managed Identity** para segurança

## 🚀 **Como fazer o deploy:**

### 1️⃣ **Configurar Twilio (5 minutos)**

1. Acesse https://www.twilio.com/
2. Crie conta gratuita
3. Vá em **Console > Messaging > Try it out > Send a WhatsApp message**
4. Configure o WhatsApp Sandbox
5. Anote as credenciais:
   - Account SID
   - Auth Token
   - WhatsApp From Number (formato: +14155238886)

### 2️⃣ **Deploy no Azure com AZD**

```bash
# 1. Instalar Azure Developer CLI
winget install microsoft.azd

# 2. Fazer login
azd auth login

# 3. Configurar variáveis de ambiente
azd env set TWILIO_ACCOUNT_SID "seu_account_sid_aqui"
azd env set TWILIO_AUTH_TOKEN "seu_auth_token_aqui"
azd env set TWILIO_WHATSAPP_FROM "+14155238886"
azd env set CLINIC_WHATSAPP "+5511999999999"
azd env set POSTGRES_ADMIN_PASSWORD "PodalVera2024!"

# 4. Deploy completo (cria toda infraestrutura)
azd up
```

### 3️⃣ **Configurar URL da API no Frontend**

Após o deploy, você receberá a URL do backend. Adicione no seu site:

1. Criar arquivo `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://sua-api-url.azurecontainerapps.io
```

2. Rebuild e deploy do frontend:
```bash
npm run build
git add .
git commit -m "feat: Conecta frontend com API backend"
git push
```

## 📋 **Configurações necessárias:**

### 🔐 **Variáveis de Ambiente**
- `TWILIO_ACCOUNT_SID` - Seu Twilio Account SID
- `TWILIO_AUTH_TOKEN` - Seu Twilio Auth Token  
- `TWILIO_WHATSAPP_FROM` - Número WhatsApp do Twilio
- `CLINIC_WHATSAPP` - Seu WhatsApp da clínica
- `POSTGRES_ADMIN_PASSWORD` - Senha do banco PostgreSQL

### 📱 **WhatsApp da Clínica**
- Substitua `+5511999999999` pelo seu número real
- Use formato internacional: `+55` + DDD + número
- Exemplo: `+5511987654321`

### 🕐 **Horários de Funcionamento**
Atualmente configurado:
- **Dias:** Segunda a Sexta-feira
- **Horário:** 06:00 às 22:00
- **Slots:** A cada 30 minutos
- **Duração:** 20-30 minutos por consulta

## 🔄 **Fluxo de Agendamento:**

1. **Cliente acessa o site** → https://brave-pebble-0a0b5420f.1.azurestaticapps.net/
2. **Seleciona data** → Sistema carrega horários disponíveis da API
3. **Escolhe horário** → Preenche formulário completo
4. **Confirma agendamento** → API valida e salva no banco
5. **WhatsApp automático** → Clínica recebe notificação instant Ânea
6. **Cliente recebe confirmação** → WhatsApp com detalhes do agendamento

## 📱 **Exemplos de WhatsApp:**

### Para a clínica:
```
🩺 NOVO AGENDAMENTO PODAL VERA

👤 Paciente: Maria Silva
📱 Telefone: +5511987654321
📧 E-mail: maria@email.com
📅 Data: Segunda-feira, 20/08/2025
🕐 Horário: 09:00
🔹 Serviço: Consulta Podológica
📝 Observações: Primeira consulta

🆔 ID: 12345678

⚠️ Confirmar agendamento o mais rápido possível!
```

### Para o paciente:
```
✅ Agendamento Solicitado - Podal Vera

Olá Maria! Seu agendamento foi solicitado:

📅 Data: Segunda-feira, 20/08/2025
🕐 Horário: 09:00
🔹 Serviço: Consulta Podológica

⏳ Aguarde a confirmação da clínica.
```

## 🎉 **Resultado Final:**

Após o deploy completo, você terá:

✅ **Site funcionando** com sistema de agendamento integrado  
✅ **API backend** rodando no Azure Container Apps  
✅ **Banco PostgreSQL** configurado e funcionando  
✅ **Notificações WhatsApp** automáticas via Twilio  
✅ **Monitoramento** via Application Insights  
✅ **Segurança** com Key Vault e Managed Identity  

## 🆘 **Suporte**

Se tiver problemas:
1. Verifique logs do Container App no portal Azure
2. Teste endpoints da API diretamente
3. Confirme credenciais do Twilio
4. Valide configuração do WhatsApp Sandbox

---

**🩺 Sistema completo pronto para uso profissional na Podal Vera!**
