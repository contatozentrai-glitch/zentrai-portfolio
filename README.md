# Zentrai — portfólio

Site estático em HTML, CSS e JavaScript puro. Não precisa instalar dependências.

## Executar localmente

Abra o arquivo `index.html` no navegador. O site não precisa de instalação ou comando de build.

## Identidade e projetos

A publicação usa os arquivos na raiz: `style.css`, `main.js`, `zentrai-logo.png` e as cinco capturas `.jpg` dos projetos. Cópias organizadas nas pastas `css/`, `js/` e `assets/` continuam no workspace, mas a página usa os arquivos da raiz para corresponder à configuração da Vercel.

## Configurar o WhatsApp

Edite a constante `WHATSAPP_NUMBER` no começo de `main.js`, com código do país, DDD e número, usando apenas dígitos. Exemplo brasileiro: `5511999999999`.

## Publicar gratuitamente na Vercel

Importe a pasta/repositório na Vercel e mantenha as configurações padrão para site estático: sem comando de build e com a raiz do projeto como diretório de saída. Também é possível instalar a CLI da Vercel e executar `vercel` nesta pasta.
