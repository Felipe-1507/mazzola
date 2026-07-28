<div align="center">
  <img src="assets/logo-original.png" alt="Logo da Agropecuária Mazzola" width="110">

  # Agropecuária Mazzola

  **Catálogo digital responsivo para rações, produtos pet, pesca, aves e itens para o campo.**

  [![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-estilização-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?logo=javascript&logoColor=111)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  [![Responsivo](https://img.shields.io/badge/Layout-responsivo-153B2F)](#recursos)
</div>

---

## Sobre o projeto

Este projeto apresenta a **Agropecuária Mazzola** em uma vitrine digital moderna, rápida e fácil de navegar. O visitante pode conhecer as principais categorias, pesquisar produtos e iniciar o atendimento diretamente pelo WhatsApp.

O site foi desenvolvido como um **catálogo institucional**, sem carrinho ou pagamento online. A proposta é aproximar o cliente da loja e facilitar a consulta de produtos e disponibilidade.

## Prévia

![Prévia completa do site da Agropecuária Mazzola](assets/preview-site.webp)

## Recursos

- Layout moderno, comercial e responsivo.
- Navegação otimizada para computador, tablet e celular.
- Catálogo com pesquisa e filtros por categoria.
- Modal com detalhes de cada produto.
- Consulta de produtos diretamente pelo WhatsApp.
- Menu mobile e cabeçalho fixo.
- Animações suaves durante a navegação.
- Identidade visual baseada na logo original.
- SEO básico, Open Graph e favicon.
- Projeto estático, sem dependências ou processo de instalação.

## Tecnologias

- **HTML5** para a estrutura e semântica.
- **CSS3** para layout, responsividade e animações.
- **JavaScript puro** para catálogo, filtros, pesquisa, modal e integração com WhatsApp.

## Estrutura do projeto

```text
agropecuaria-mazzola/
├── assets/
│   ├── logo-original.png
│   ├── logo-white.png
│   ├── favicon.png
│   ├── preview-site.webp
│   └── imagens do catálogo
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Como executar

Não é necessário instalar Node.js, bibliotecas ou dependências.

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

Também é possível usar a extensão **Live Server** no VS Code para visualizar alterações automaticamente.

## Personalização

### WhatsApp e Instagram

Os dados principais ficam no início do arquivo `script.js`:

```js
const CONFIG = {
  whatsappNumber: "5515998465787",
  instagramUrl: "https://www.instagram.com/agropecuaria.mazzola/",
};
```

O número deve conter apenas dígitos, incluindo o código do país e o DDD.

### Produtos

Os itens do catálogo ficam no array `PRODUCTS`, também em `script.js`:

```js
{
  id: 1,
  name: "Nome do produto",
  category: "racoes",
  categoryLabel: "Rações",
  description: "Descrição curta do produto.",
  tag: "Destaque",
  image: "assets/imagem.webp",
  imageAlt: "Descrição acessível da imagem",
}
```

Categorias disponíveis:

```text
racoes | pet | pesca | aves | campo
```

### Textos e informações da loja

Os textos institucionais, endereço, horário e informações de contato podem ser alterados diretamente no arquivo `index.html`.

## Publicação no GitHub Pages

1. Abra **Settings** no repositório.
2. Acesse **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/root`.
5. Salve e aguarde a publicação.

Como o projeto é totalmente estático, não é necessário configurar servidor ou banco de dados.

## Observações

As fotografias desta demonstração são imagens ilustrativas provenientes do Pexels. Antes da publicação comercial definitiva, recomenda-se substituí-las por fotos autorizadas da fachada, do interior da loja e dos produtos realmente disponíveis.

A logo utilizada foi fornecida pela Agropecuária Mazzola.

---

<div align="center">
  Desenvolvido por <a href="https://felipeferreira.dev"><strong>Felipe Ferreira</strong></a>
</div>
