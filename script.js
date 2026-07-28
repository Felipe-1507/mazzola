const CONFIG = {
  // Insira somente números, com DDI e DDD. Exemplo: 5515999999999
  whatsappNumber: "5515998465787",
  instagramUrl: "https://www.instagram.com/agropecuaria.mazzola/",
};

const PRODUCTS = [
  {
    id: 1,
    name: "Ração seca para cães",
    category: "racoes",
    categoryLabel: "Rações",
    description: "Opções para diferentes portes, fases e necessidades nutricionais.",
    tag: "Cães",
    image: "assets/dog-food-pour.webp",
    imageAlt: "Ração seca sendo colocada em um comedouro para cães",
  },
  {
    id: 2,
    name: "Ração para gatos",
    category: "racoes",
    categoryLabel: "Rações",
    description: "Consulte sabores, tamanhos de embalagem e linhas disponíveis.",
    tag: "Gatos",
    image: "assets/cat-food.webp",
    imageAlt: "Gato se alimentando em um comedouro",
  },
  {
    id: 3,
    name: "Ração e sementes para aves",
    category: "aves",
    categoryLabel: "Aves",
    description: "Misturas e opções de alimentação para aves e pequenos animais.",
    tag: "Aves",
    image: "assets/chicken-feed.webp",
    imageAlt: "Aves se alimentando em um comedouro com grãos",
  },
  {
    id: 4,
    name: "Comedouros e bebedouros",
    category: "pet",
    categoryLabel: "Linha pet",
    description: "Modelos para alimentação e hidratação no dia a dia dos animais.",
    tag: "Acessórios",
    image: "assets/dog-food-bowl.webp",
    imageAlt: "Comedouro com ração seca",
  },
  {
    id: 5,
    name: "Coleiras, guias e peitorais",
    category: "pet",
    categoryLabel: "Linha pet",
    description: "Acessórios para passeio, segurança e rotina com o seu pet.",
    tag: "Pet",
    image: "assets/pet-collars.webp",
    imageAlt: "Coleiras e guias coloridas para animais",
  },
  {
    id: 6,
    name: "Molinete e linha de pesca",
    category: "pesca",
    categoryLabel: "Pesca",
    description: "Equipamentos e acessórios para diferentes estilos de pescaria.",
    tag: "Pesca",
    image: "assets/fishing-reels.webp",
    imageAlt: "Molinetes com linhas de pesca",
  },
  {
    id: 7,
    name: "Varas e acessórios de pesca",
    category: "pesca",
    categoryLabel: "Pesca",
    description: "Consulte varas, anzóis, linhas e itens para completar seu kit.",
    tag: "Equipamentos",
    image: "assets/fishing-reels.webp",
    imageAlt: "Detalhe de equipamento e linha de pesca",
  },
  {
    id: 8,
    name: "Alimentação para bovinos",
    category: "campo",
    categoryLabel: "Campo e criação",
    description: "Produtos de nutrição e manejo para a rotina de criação.",
    tag: "Criação",
    image: "assets/cattle-feed.webp",
    imageAlt: "Gado se alimentando em propriedade rural",
  },
  {
    id: 9,
    name: "Botas para uso rural",
    category: "campo",
    categoryLabel: "Campo e utilidades",
    description: "Itens práticos para o trabalho e para a rotina no campo.",
    tag: "Utilidades",
    image: "assets/rural-boots.webp",
    imageAlt: "Trabalhador com botas em ambiente rural",
  },
  {
    id: 10,
    name: "Acessórios e utilidades pet",
    category: "pet",
    categoryLabel: "Linha pet",
    description: "Uma seleção de itens para cuidado, conforto e bem-estar animal.",
    tag: "Variedade",
    image: "assets/pet-store.webp",
    imageAlt: "Loja com variedade de produtos e acessórios para pets",
  },
];

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const emptyState = document.querySelector("#catalog-empty");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeFilter = "todos";

function normalizeText(value) {
  return value.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function productCardTemplate(product) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__visual">
        <span class="product-card__badge">${product.tag}</span>
        <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-card__footer">
          <span>Sob consulta</span>
          <button class="product-card__button" type="button" data-open-product="${product.id}">Ver detalhes →</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const query = normalizeText(searchInput?.value.trim() || "");
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeFilter === "todos" || product.category === activeFilter;
    const searchable = normalizeText(`${product.name} ${product.categoryLabel} ${product.description}`);
    return matchesCategory && (!query || searchable.includes(query));
  });

  productGrid.innerHTML = filteredProducts.map(productCardTemplate).join("");
  emptyState.hidden = filteredProducts.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProducts();
  });
});

searchInput?.addEventListener("input", renderProducts);

document.querySelectorAll("[data-filter-target]").forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.filterTarget;
    activeFilter = target;
    filterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === target));
    renderProducts();
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  });
});

function buildWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  const phone = CONFIG.whatsappNumber.replace(/\D/g, "");
  return phone ? `https://wa.me/${phone}?text=${encodedMessage}` : `https://wa.me/?text=${encodedMessage}`;
}

function applyWhatsAppLinks() {
  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    link.href = buildWhatsAppUrl(link.dataset.message || "Olá! Vim pelo site da Agropecuária Mazzola.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

const modal = document.querySelector("#product-modal");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalImage = document.querySelector("#modal-image");
const modalWhatsApp = document.querySelector("#modal-whatsapp");
let lastFocusedElement = null;

function openProductModal(productId) {
  const product = PRODUCTS.find((item) => item.id === Number(productId));
  if (!product) return;

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.categoryLabel;
  modalDescription.textContent = product.description;
  modalImage.src = product.image;
  modalImage.alt = product.imageAlt;
  modalWhatsApp.href = buildWhatsAppUrl(`Olá! Gostaria de consultar: ${product.name}.`);
  modalWhatsApp.target = "_blank";
  modalWhatsApp.rel = "noopener noreferrer";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal__close")?.focus();
}

function closeProductModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-product]");
  if (button) openProductModal(button.dataset.openProduct);
});

document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeProductModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProductModal();
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  mainNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle?.classList.remove("is-open");
  mainNav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const siteHeader = document.querySelector(".site-header");
window.addEventListener("scroll", () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 12), { passive: true });

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  revealElements.forEach((element) => observer.observe(element));
  // Evita conteúdo invisível em navegadores que atrasem o IntersectionObserver.
  window.setTimeout(() => revealElements.forEach((element) => element.classList.add("is-visible")), 1100);
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProducts();
applyWhatsAppLinks();
