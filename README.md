# Agropecuária Mazzola — demonstração de catálogo

Site estático e responsivo feito com HTML, CSS e JavaScript puro.

## Como abrir

Abra o arquivo `index.html` em qualquer navegador. Não é necessário instalar dependências.

## Configurar o WhatsApp

No início do arquivo `script.js`, altere:

```js
whatsappNumber: "5515999999999"
```

Use somente números, incluindo o DDI 55 e o DDD.

## Editar produtos

Os produtos estão no array `PRODUCTS`, dentro do arquivo `script.js`. Cada item aceita:

- `name`: nome do produto;
- `category`: `racoes`, `pet`, `pesca`, `aves` ou `campo`;
- `categoryLabel`: texto exibido no card;
- `description`: descrição curta;
- `tag`: selo superior;
- `image`: caminho da fotografia;
- `imageAlt`: descrição acessível da imagem.

## Logo

A logo enviada foi tratada apenas para remover o fundo branco e gerar versões transparentes:

- `assets/logo-original.png`
- `assets/logo-white.png`
- `assets/favicon.png`

## Fotografias demonstrativas

As fotografias usadas nesta versão são imagens gratuitas do Pexels e servem somente como demonstração visual. Na versão final, substitua por fotos autorizadas da loja, produtos reais e fachada da Agropecuária Mazzola.

Créditos das imagens: Pexels — Maurício Mascaro, cottonbro studio, Thirdman, Thilina Alagiyawanna, Wanas Rosa, Nam Quân Nguyễn, Uğur Armağan, Christina e Barking Royalty.
