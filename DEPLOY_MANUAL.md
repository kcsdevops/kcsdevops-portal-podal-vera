# 🚀 GUIA DE DEPLOY MANUAL - PORTAL VERACARE PODÓLOGA

## 📋 INFORMAÇÕES DO PROJETO

**Site:** Portal Profissional de Podologia  
**Nome:** VERACARE PODÓLOGA  
**Proprietária:** Veralucia Trindade Santos  
**CNPJ:** 28.315.288/0001-02  
**Endereço:** Rua Montuori, 102 - Vila Barbosa, São Paulo  

## 📁 ARQUIVOS PARA DEPLOY

Todos os arquivos estão prontos na pasta: `out/`

### Estrutura dos arquivos:
```
out/
├── index.html          (Página principal)
├── 404.html           (Página de erro 404)
├── index.txt          (Sitemap)
└── _next/             (Assets - CSS, JS, imagens)
    ├── static/
    └── ...
```

## 🔧 OPÇÕES DE DEPLOY

### 1. 📤 DEPLOY VIA FTP

#### Usando FileZilla (Recomendado):
1. **Baixe o FileZilla:** https://filezilla-project.org/
2. **Configure a conexão:**
   - Host: `seu-dominio.com` ou IP do servidor
   - Usuário: seu usuário FTP
   - Senha: sua senha FTP
   - Porta: 21 (FTP) ou 22 (SFTP)

3. **Upload dos arquivos:**
   - Conecte ao servidor
   - Navegue até a pasta `public_html` ou `www`
   - Selecione TODOS os arquivos da pasta `out/`
   - Arraste para o servidor
   - Aguarde o upload concluir

#### Usando WinSCP (Alternativa):
1. **Baixe o WinSCP:** https://winscp.net/
2. Configure com as mesmas credenciais
3. Copie todos os arquivos da pasta `out/`

### 2. 🔐 DEPLOY VIA SSH

#### Usando PuTTY + WinSCP:
1. **Conecte via SSH:**
   ```bash
   ssh usuario@seu-servidor.com
   ```

2. **Navegue para a pasta web:**
   ```bash
   cd /var/www/html
   # ou
   cd /public_html
   ```

3. **Limpe arquivos antigos:**
   ```bash
   rm -rf *
   ```

4. **Use WinSCP para upload dos arquivos da pasta `out/`**

#### Usando rsync (se disponível):
```bash
rsync -avz ./out/ usuario@servidor:/var/www/html/
```

### 3. 🎯 DEPLOY VIA PAINEL DE CONTROLE

#### cPanel/Plesk:
1. Acesse o painel do seu provedor
2. Vá em "Gerenciador de Arquivos"
3. Navegue até `public_html`
4. Selecione todos os arquivos da pasta `out/`
5. Faça upload via interface web

## ✅ VERIFICAÇÃO PÓS-DEPLOY

Após o upload, acesse seu domínio e verifique:

- [x] **Página inicial carrega corretamente**
- [x] **Design responsivo funcionando**
- [x] **Links do WhatsApp funcionando:** `(11) 96738-1029`
- [x] **Email de contato:** `contato@veracare.com.br`
- [x] **Instagram:** `@veracare_podologa`
- [x] **Todas as seções visíveis:**
  - Hero com informações da empresa
  - Serviços de podologia
  - Produtos nano cosméticos
  - Tecnologia avançada
  - Sobre a empresa
  - Galeria de trabalhos
  - Contato completo

## 🔍 DETALHES IMPORTANTES

### Informações da Empresa no Site:
- **Razão Social:** Veralucia Trindade Santos
- **CNPJ:** 28.315.288/0001-02
- **Endereço:** Rua Montuori, 102 - Vila Barbosa, São Paulo - SP
- **CEP:** 02557-011
- **Situação:** Ativa desde 01/08/2017
- **Atividade:** Cabeleireiros, manicure e pedicure

### Funcionalidades Implementadas:
- ✅ Design moderno e profissional
- ✅ Totalmente responsivo (mobile/desktop)
- ✅ Integração WhatsApp para agendamentos
- ✅ Seção de produtos nano cosméticos
- ✅ Galeria de trabalhos realizados
- ✅ Informações completas da empresa
- ✅ Formulário de contato
- ✅ Links para redes sociais

## 🆘 SUPORTE

Se precisar de ajuda com o deploy:

1. **Verifique as credenciais do servidor**
2. **Confirme permissões de escrita na pasta web**
3. **Teste um arquivo HTML simples primeiro**
4. **Verifique se todos os arquivos foram transferidos**

## 📞 CONTATOS DO SITE

Após o deploy, os visitantes poderão:
- **Agendar via WhatsApp:** https://wa.me/5511967381029
- **Enviar email:** contato@veracare.com.br
- **Seguir no Instagram:** https://www.instagram.com/veracare_podologa/
- **Ver galeria:** https://drive.google.com/drive/folders/1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV

---

**✅ SITE PRONTO PARA PRODUÇÃO**  
**Todos os arquivos estão na pasta `out/` - Basta fazer upload!**
