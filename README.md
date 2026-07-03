# Portfólio Juliana Marques

Portfólio pessoal de Juliana Marques, Desenvolvedora Front-End com experiência em Vue.js, Angular e React. O projeto foi feito com Vue.js e Vite.

O visual usa uma estética pixel art moderna e sutil, com fundo escuro roxo/azul-marinho, tons de lilás/lavanda e foco em apresentação profissional.

## Rodar o projeto

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

## Formulário de contato

Por padrão, o formulário usa FormSubmit com o e-mail de contato do portfólio. No primeiro envio, o FormSubmit pode pedir confirmação por e-mail para ativar o recebimento.

Para usar Formspree, FormSubmit com outro endpoint ou um backend próprio, crie um arquivo `.env` local:

```bash
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/SEU_ENDPOINT
```

O formulário envia nome, e-mail, mensagem e data/hora para o endpoint. Não coloque senhas, tokens privados ou chaves secretas no front-end.

## Estrutura

- `src/components`: seções componentizadas do portfólio.
- `src/data`: dados editáveis de tecnologias, projetos, experiência, formação e certificações.
- `src/styles/global.css`: identidade visual, responsividade e animações.
