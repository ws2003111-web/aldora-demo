/**
 * Aldora Demo — menu data, cart, order demo UI
 */
(function () {
  const TAX_RATE = 0.08875;
  const CART_KEY = "nv-cart";

  /** @type {{ id: string, cat: string, price: number, img: string, gradient: string }[]} */
  const MENU = [
    {
      id: "oyster",
      cat: "starters",
      price: 24,
      img: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#c9b8a0,#6b5344)",
    },
    {
      id: "beet",
      cat: "starters",
      price: 16,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#d4a090,#8b3a3a)",
    },
    {
      id: "soup",
      cat: "starters",
      price: 14,
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#e8dcc8,#a67c52)",
    },
    {
      id: "steak",
      cat: "mains",
      price: 48,
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#8b5a3c,#3d2418)",
    },
    {
      id: "salmon",
      cat: "mains",
      price: 36,
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#e8a070,#8b4513)",
    },
    {
      id: "chicken",
      cat: "mains",
      price: 32,
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#d4b896,#7a5c3c)",
    },
    {
      id: "pasta",
      cat: "mains",
      price: 28,
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#c4a882,#5c4030)",
    },
    {
      id: "greens",
      cat: "sides",
      price: 10,
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#a8c090,#4a6b3a)",
    },
    {
      id: "fries",
      cat: "sides",
      price: 12,
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#e8c878,#a67c2a)",
    },
    {
      id: "mash",
      cat: "sides",
      price: 11,
      img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#f0e6d2,#c4a882)",
    },
    {
      id: "tart",
      cat: "desserts",
      price: 14,
      img: "https://images.unsplash.com/photo-1568571780765-92762accd6c2?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#e8c4a0,#b87333)",
    },
    {
      id: "chocolate",
      cat: "desserts",
      price: 13,
      img: "https://images.unsplash.com/photo-1606312619070-d48b7ceca2d9?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#5c4030,#2a1810)",
    },
    {
      id: "pinot",
      cat: "drinks",
      price: 16,
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#6b2a3a,#3d1520)",
    },
    {
      id: "chard",
      cat: "drinks",
      price: 15,
      img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#e8dcc0,#c4a860)",
    },
    {
      id: "spritz",
      cat: "drinks",
      price: 14,
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#f0a878,#e07040)",
    },
    {
      id: "sparkling",
      cat: "drinks",
      price: 6,
      img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop&q=80",
      gradient: "linear-gradient(145deg,#c8dce8,#7a9aac)",
    },
  ];

  const CAT_ORDER = ["starters", "mains", "sides", "desserts", "drinks"];

  /** @type {Record<string, number>} */
  let cart = loadCart();

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function money(n) {
    return "$" + n.toFixed(2);
  }

  function cartCount() {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }

  function cartSubtotal() {
    return MENU.reduce((sum, item) => {
      const qty = cart[item.id] || 0;
      return sum + qty * item.price;
    }, 0);
  }

  function t(path) {
    return window.NVi18n ? window.NVi18n.t(path) : path;
  }

  function showToast(msg) {
    let el = document.getElementById("nv-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "nv-toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => el.classList.remove("is-show"), 1800);
  }

  function updateCartBadge() {
    const count = cartCount();
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = String(count);
      el.hidden = count === 0;
    });
  }

  function renderMenu() {
    const root = document.getElementById("menu-root");
    if (!root) return;

    root.innerHTML = CAT_ORDER.map((cat) => {
      const items = MENU.filter((m) => m.cat === cat);
      const cards = items
        .map((item) => {
          const name = t("items." + item.id + ".name");
          const desc = t("items." + item.id + ".desc");
          return `
          <article class="menu-card" data-item="${item.id}">
            <div class="menu-card-media" style="background:${item.gradient}">
              <img src="${item.img}" alt="" loading="lazy" onerror="this.style.display='none'" />
            </div>
            <div class="menu-card-body">
              <div class="menu-card-title">
                <h3>${escapeHtml(name)}</h3>
                <span class="price">${money(item.price)}</span>
              </div>
              <p class="menu-card-desc">${escapeHtml(desc)}</p>
              <div class="menu-card-row">
                <button type="button" class="btn btn-primary btn-sm" data-add="${item.id}">
                  ${escapeHtml(t("orderPage.add"))}
                </button>
              </div>
            </div>
          </article>`;
        })
        .join("");

      return `
        <section class="menu-section reveal" id="cat-${cat}" data-reveal>
          <div class="container">
            <h2 data-i18n="cats.${cat}">${escapeHtml(t("cats." + cat))}</h2>
            <div class="menu-grid">${cards}</div>
          </div>
        </section>`;
    }).join("");

    root.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-add");
        addToCart(id);
        showToast(t("orderPage.added"));
      });
    });
  }

  function renderCategoryNav() {
    const nav = document.getElementById("category-nav");
    if (!nav) return;
    const inner = nav.querySelector(".container") || nav;
    inner.innerHTML = CAT_ORDER.map(
      (cat, i) =>
        `<button type="button" class="cat-chip${i === 0 ? " is-active" : ""}" data-cat-jump="${cat}" data-i18n="cats.${cat}">${escapeHtml(t("cats." + cat))}</button>`
    ).join("");

    inner.querySelectorAll("[data-cat-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-cat-jump");
        const section = document.getElementById("cat-" + cat);
        if (section) {
          const headerH = 64 + 48;
          const top = section.getBoundingClientRect().top + window.scrollY - headerH;
          window.scrollTo({ top, behavior: "smooth" });
        }
        inner.querySelectorAll(".cat-chip").forEach((c) => c.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }

  function setQty(id, qty) {
    if (qty <= 0) {
      delete cart[id];
    } else {
      cart[id] = qty;
    }
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }

  function clearCart() {
    cart = {};
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }

  function openCart() {
    document.getElementById("cart-overlay")?.classList.add("is-open");
    document.getElementById("cart-drawer")?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    document.getElementById("cart-overlay")?.classList.remove("is-open");
    document.getElementById("cart-drawer")?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function renderCartDrawer() {
    const itemsEl = document.getElementById("cart-items");
    const footerEl = document.getElementById("cart-footer");
    if (!itemsEl) return;

    const lines = MENU.filter((m) => cart[m.id]);
    if (lines.length === 0) {
      itemsEl.innerHTML = `
        <div class="cart-empty">
          <p><strong data-i18n="orderPage.empty">${escapeHtml(t("orderPage.empty"))}</strong></p>
          <p data-i18n="orderPage.emptyHint">${escapeHtml(t("orderPage.emptyHint"))}</p>
          <button type="button" class="btn btn-secondary btn-sm" data-close-cart data-i18n="orderPage.browseMenu">${escapeHtml(t("orderPage.browseMenu"))}</button>
        </div>`;
      if (footerEl) footerEl.hidden = true;
      return;
    }

    if (footerEl) footerEl.hidden = false;

    itemsEl.innerHTML = lines
      .map((item) => {
        const qty = cart[item.id];
        const name = t("items." + item.id + ".name");
        return `
        <div class="cart-line" data-cart-item="${item.id}">
          <div class="cart-line-name">${escapeHtml(name)}</div>
          <div class="cart-line-price">${money(item.price * qty)}</div>
          <div class="cart-line-controls">
            <button type="button" class="qty-btn" data-qty-dec="${item.id}" aria-label="-">−</button>
            <span class="qty-val">${qty}</span>
            <button type="button" class="qty-btn" data-qty-inc="${item.id}" aria-label="+">+</button>
            <button type="button" class="btn btn-ghost btn-sm" data-qty-remove="${item.id}" data-i18n="orderPage.remove">${escapeHtml(t("orderPage.remove"))}</button>
          </div>
        </div>`;
      })
      .join("");

    itemsEl.querySelectorAll("[data-qty-dec]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-qty-dec");
        setQty(id, (cart[id] || 0) - 1);
      });
    });
    itemsEl.querySelectorAll("[data-qty-inc]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-qty-inc");
        setQty(id, (cart[id] || 0) + 1);
      });
    });
    itemsEl.querySelectorAll("[data-qty-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-qty-remove");
        setQty(id, 0);
      });
    });

    const sub = cartSubtotal();
    const tax = sub * TAX_RATE;
    const total = sub + tax;
    const subEl = document.getElementById("cart-subtotal");
    const taxEl = document.getElementById("cart-tax");
    const totalEl = document.getElementById("cart-total");
    if (subEl) subEl.textContent = money(sub);
    if (taxEl) taxEl.textContent = money(tax);
    if (totalEl) totalEl.textContent = money(total);

    const placeBtn = document.getElementById("place-order-btn");
    if (placeBtn) placeBtn.disabled = lines.length === 0;
  }

  function openDemoModal() {
    const overlay = document.getElementById("demo-modal");
    if (!overlay) return;
    // refresh i18n text
    if (window.NVi18n) window.NVi18n.applyTranslations();
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeDemoModal() {
    document.getElementById("demo-modal")?.classList.remove("is-open");
    if (!document.getElementById("cart-drawer")?.classList.contains("is-open")) {
      document.body.style.overflow = "";
    }
  }

  function placeOrderDemo() {
    if (cartCount() === 0) return;
    closeCart();
    openDemoModal();
    clearCart();
  }

  function initOrderPage() {
    if (!document.body.classList.contains("page-order")) return;

    renderCategoryNav();
    renderMenu();
    renderCartDrawer();
    updateCartBadge();

    document.querySelectorAll("[data-open-cart]").forEach((el) => {
      el.addEventListener("click", openCart);
    });
    document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
    document.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-close-cart]");
      if (closeBtn) closeCart();
    });
    document.getElementById("place-order-btn")?.addEventListener("click", placeOrderDemo);
    document.getElementById("clear-cart-btn")?.addEventListener("click", clearCart);

    document.getElementById("demo-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "demo-modal") closeDemoModal();
    });
    document.querySelectorAll("[data-close-demo]").forEach((el) => {
      el.addEventListener("click", closeDemoModal);
    });

    window.addEventListener("nv:langchange", () => {
      renderCategoryNav();
      renderMenu();
      renderCartDrawer();
      if (window.NVi18n) window.NVi18n.applyTranslations();
      initRevealOnScroll();
    });

    // highlight category chip on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id.replace("cat-", "");
          document.querySelectorAll("[data-cat-jump]").forEach((chip) => {
            chip.classList.toggle("is-active", chip.getAttribute("data-cat-jump") === id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    CAT_ORDER.forEach((cat) => {
      const el = document.getElementById("cat-" + cat);
      if (el) observer.observe(el);
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initStickyHeader() {
    const header = document.querySelector("[data-site-header]") || document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initHeroEffects() {
    const copy = document.querySelector("[data-hero-copy]");
    const img = document.querySelector("[data-hero-img]");
    const reduced = prefersReducedMotion();

    if (copy) {
      if (reduced) {
        copy.classList.add("is-in");
      } else {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => copy.classList.add("is-in"));
        });
      }
    }

    if (!img || reduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const scale = 1.06 + Math.min(y, 420) * 0.00018;
        img.style.transform = "scale(" + scale.toFixed(4) + ")";
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initRevealOnScroll() {
    const nodes = document.querySelectorAll("[data-reveal], .reveal");
    if (!nodes.length) return;

    if (prefersReducedMotion()) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach((el) => io.observe(el));
  }

  function initLanding() {
    initStickyHeader();
    initHeroEffects();
    initRevealOnScroll();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.NVi18n) window.NVi18n.initLangSwitcher();
    initOrderPage();
    initLanding();
    // Re-bind reveals for dynamically rendered menu sections
    if (document.body.classList.contains("page-order")) {
      initRevealOnScroll();
    }
  });
})();
