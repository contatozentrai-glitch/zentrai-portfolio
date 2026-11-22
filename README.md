# Zentrai

Site institucional e portfólio da Zentrai, criado com React, Vite, Tailwind CSS e Motion.

## Executar localmente

Use Node.js 20.19 ou mais recente da série 20, ou Node.js 22.12 ou superior.

```sh
npm ci
npm run dev
```

## Gerar a versão de produção

```sh
npm run build
npm run preview
```

O build pré-renderiza a página em `dist/index.html`. A pasta `dist/` pode ser publicada em qualquer hospedagem de sites estáticos.

## Atualizar conteúdo

- **Projetos.** Adicione uma entrada em `src/data/projects.js` com nome, categoria, descrição, URL e o caminho e texto alternativo da captura. Os filtros acompanham as categorias.
- **Capturas.** Salve uma imagem WebP do site correspondente em `public/images/projects/`. A proporção recomendada é 16:9.
- **Tipo de projeto.** Use `type: 'demo'` para demonstrações e `type: 'client'` para entregas confirmadas.
- **Contatos e serviços.** Edite `src/data/site.js` para alterar o número do WhatsApp, sua mensagem, o perfil do Instagram ou os textos de serviços.
- **Identidade visual.** O logo da Zentrai e seu símbolo ficam em `public/images/branding/`.
