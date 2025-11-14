const body = document.body;
const header = document.querySelector(".lm-header");
const menuToggle = document.getElementById("menuToggle");
const drawer = document.querySelector(".lm-drawer");
const backToTop = document.querySelector(".back-to-top");
const productTrack = document.getElementById("productTrack");
const productDots = document.getElementById("productDots");
const prevBtn = document.querySelector(".product-showcase .nav-btn.prev");
const nextBtn = document.querySelector(".product-showcase .nav-btn.next");

const products = [
  {
    name: "MT15000 Turbo",
    tag: "Top Seller",
    description: "Dual-core turbo engine with adaptive airflow and 15,000 puff battery endurance.",
    linkText: "View MT15000 Turbo",
    href: "products.html",
    theme: "mt",
  },
  {
    name: "Lost Mary 4in1",
    tag: "Multi Flavour",
    description: "Four magnetic pods, smart LED flavour cues and flavour-lock QUAQ heating.",
    linkText: "Explore 4in1 Platform",
    href: "products.html",
    theme: "multi",
  },
  {
    name: "BM600 Pod",
    tag: "Best Seller",
    description: "Pocket-ready favourite with precise mesh heating and balanced flavour output.",
    linkText: "Meet BM600 Pod",
    href: "products.html",
    theme: "bm",
  },
  {
    name: "CM15000 Turbo",
    tag: "Limited",
    description: "Statement colourways, turbo boost mode and gradient halo lighting.",
    linkText: "Limited Edition Drop",
    href: "products.html",
    theme: "cm",
  },
];

let currentSlide = 0;

function markActiveNav() {
  const pageKey = body.dataset.page;
  const navLinks = document.querySelectorAll('[data-page]');
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === pageKey;
    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

function toggleDrawer(force) {
  const shouldOpen = typeof force === "boolean" ? force : !drawer.classList.contains("open");
  drawer.classList.toggle("open", shouldOpen);
  menuToggle?.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function buildProductSlider() {
  if (!productTrack) return;

  productTrack.innerHTML = "";
  productDots.innerHTML = "";

  products.forEach((product, index) => {
    const article = document.createElement("article");
    article.className = `showcase-card theme-${product.theme}`;
    article.innerHTML = `
      <span class="card-tag">${product.tag}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a class="lm-link" href="${product.href}">
        ${product.linkText}
      </a>
    `;
    productTrack.appendChild(article);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${product.name} slide`);
    dot.dataset.index = index.toString();
    dot.addEventListener("click", () => goToSlide(index));
    productDots.appendChild(dot);
  });

  goToSlide(0);
}

function goToSlide(index) {
  if (!productTrack) return;
  const cards = productTrack.children;
  const total = cards.length;
  if (total === 0) return;
  currentSlide = (index + total) % total;

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(productTrack).columnGap || "20");
  const offset = currentSlide * (cardWidth + gap);
  productTrack.scrollTo({ left: offset, behavior: "smooth" });

  [...productDots.children].forEach((dot, i) => {
    dot.setAttribute("aria-selected", i === currentSlide ? "true" : "false");
  });
}

function handleNavButtons() {
  prevBtn?.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn?.addEventListener("click", () => goToSlide(currentSlide + 1));
}

function enhanceHeader() {
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    const isScrolled = current > 30;
    header?.classList.toggle("is-scrolled", isScrolled);

    if (current > lastScroll && current > 120) {
      header?.classList.add("hide");
    } else {
      header?.classList.remove("hide");
    }
    lastScroll = current;
  });
}

function handleBackToTop() {
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initMenuToggle() {
  menuToggle?.addEventListener("click", () => toggleDrawer());
  drawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });
}

function init() {
  markActiveNav();
  buildProductSlider();
  handleNavButtons();
  enhanceHeader();
  handleBackToTop();
  initMenuToggle();
}

document.addEventListener("DOMContentLoaded", init);

