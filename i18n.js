/**
 * Aldora Demo — i18n dictionaries + language switcher
 * Languages: en, zh, ko, fr
 */
(function (global) {
  const STORAGE_KEY = "nv-lang";

  const translations = {
    en: {
      meta: { title: "Aldora Demo — Manhattan Bistro Demo", orderTitle: "Demo Menu — Aldora Demo" },
      nav: {
        brand: "Aldora Demo",
        brandName: "Aldora",
        brandDemo: "Demo",
        home: "Home",
        about: "About",
        hours: "Hours",
        order: "Order",
        lang: "Language",
      },
      hero: {
        eyebrow: "West Village · New York · Demo",
        title: "Seasonal plates. Thoughtful wines.",
        subtitle:
          "A fictional contemporary Manhattan bistro demo where wood, soft light, and European-American cooking meet the evening.",
        cta: "Order for pickup",
        secondary: "Our story",
      },
      about: {
        title: "About",
        p1: "Aldora Demo is a fictional West Village bistro created for a multilingual QR ordering demo. We serve seasonal American-European plates in a warm, wood-lined room with a wine-forward list. Not a real restaurant.",
        p2: "This site is static and offline-capable — perfect for cold outreach demos. No kitchen receives your order. Demo use only.",
      },
      hours: {
        title: "Hours",
        monThu: "Monday – Thursday",
        monThuTime: "5:00 PM – 10:00 PM",
        friSat: "Friday – Saturday",
        friSatTime: "5:00 PM – 11:00 PM",
        sun: "Sunday",
        sunTime: "4:00 PM – 9:00 PM",
        note: "Kitchen closes 30 minutes before closing. (Demo hours only.)",
      },
      location: {
        title: "Visit us",
        address: "48 Grove Street",
        city: "New York, NY 10014",
        neighborhood: "West Village",
        phone: "(212) 555-0148",
        disclaimer: "Fake address — demo only. Not a real restaurant.",
      },
      footer: {
        tagline: "Fictional Manhattan bistro · Demo only · Not a real restaurant",
        rights: "© 2026 Aldora Demo. Not a real restaurant. Demo use only.",
      },
      orderPage: {
        title: "Demo Menu",
        subtitle: "Browse the demo menu, add items, and place a demo order. Not a real restaurant.",
        back: "← Back to demo home",
        cart: "Cart",
        empty: "Your cart is empty",
        emptyHint: "Add something delicious from the menu.",
        browseMenu: "Browse menu",
        subtotal: "Subtotal",
        tax: "Tax (est.)",
        total: "Total",
        placeOrder: "Place order",
        clear: "Clear cart",
        add: "Add",
        added: "Added",
        qty: "Qty",
        remove: "Remove",
        close: "Close",
        items: "items",
      },
      demo: {
        title: "Demo only",
        message: "Demo only — order not sent to kitchen. Not a real restaurant.",
        detail:
          "This is a static multilingual QR ordering demo (Aldora Demo). No payment was taken and nothing was transmitted.",
        ok: "Got it",
      },
      cats: {
        starters: "Starters",
        mains: "Mains",
        sides: "Sides",
        desserts: "Desserts",
        drinks: "Wine & drinks",
      },
      items: {
        oyster: {
          name: "East Coast oysters",
          desc: "Half dozen, mignonette, lemon",
        },
        beet: {
          name: "Roasted beet salad",
          desc: "Goat cheese, hazelnuts, sherry vinaigrette",
        },
        soup: {
          name: "Celery root soup",
          desc: "Brown butter, crispy sage, crème fraîche",
        },
        steak: {
          name: "NY strip, medium-rare",
          desc: "Herb butter, roasted shallots, jus",
        },
        salmon: {
          name: "Pan-seared salmon",
          desc: "Fennel, citrus beurre blanc, herbs",
        },
        chicken: {
          name: "Roasted half chicken",
          desc: "Lemon thyme, pan jus, soft polenta",
        },
        pasta: {
          name: "Handmade cavatelli",
          desc: "Wild mushrooms, Parmesan, olive oil",
        },
        greens: {
          name: "Market greens",
          desc: "Champagne vinaigrette",
        },
        fries: {
          name: "Duck-fat fries",
          desc: "Rosemary salt, aioli",
        },
        mash: {
          name: "Potato purée",
          desc: "Butter, chives",
        },
        tart: {
          name: "Apple tart",
          desc: "Vanilla ice cream, caramel",
        },
        chocolate: {
          name: "Dark chocolate pot de crème",
          desc: "Sea salt, whipped cream",
        },
        pinot: {
          name: "Pinot Noir, Willamette",
          desc: "Glass · Oregon",
        },
        chard: {
          name: "Chardonnay, Sonoma",
          desc: "Glass · California",
        },
        spritz: {
          name: "House spritz",
          desc: "Prosecco, bitter orange, soda",
        },
        sparkling: {
          name: "Sparkling water",
          desc: "Bottle",
        },
      },
    },
    zh: {
      meta: { title: "奥尔多拉·演示 — 曼哈顿小酒馆演示", orderTitle: "演示菜单 — 奥尔多拉·演示" },
      nav: {
        brand: "奥尔多拉·演示",
        brandName: "奥尔多拉",
        brandDemo: "演示",
        home: "首页",
        about: "关于",
        hours: "营业时间",
        order: "点餐",
        lang: "语言",
      },
      hero: {
        eyebrow: "西村 · 纽约 · 演示",
        title: "时令菜肴。精选美酒。",
        subtitle: "虚构的当代曼哈顿小酒馆演示：木色暖光，美欧时令料理，与夜晚相遇。",
        cta: "自取点餐",
        secondary: "我们的故事",
      },
      about: {
        title: "关于",
        p1: "奥尔多拉·演示 是为多语言二维码点餐演示而设的虚构西村小酒馆。在木色暖调的空间里，供应美欧时令菜肴与以葡萄酒为主的酒单。非真实餐厅，演示专用。",
        p2: "本站为静态页面，可离线演示，适合冷启动外联。厨房不会收到您的订单。演示专用。",
      },
      hours: {
        title: "营业时间",
        monThu: "周一至周四",
        monThuTime: "下午 5:00 – 晚上 10:00",
        friSat: "周五至周六",
        friSatTime: "下午 5:00 – 晚上 11:00",
        sun: "周日",
        sunTime: "下午 4:00 – 晚上 9:00",
        note: "厨房于打烊前 30 分钟停止出餐。（演示营业时间。）",
      },
      location: {
        title: "地址",
        address: "Grove Street 48 号",
        city: "纽约，NY 10014",
        neighborhood: "西村",
        phone: "(212) 555-0148",
        disclaimer: "虚构地址 — 仅供演示。非真实餐厅。演示专用。",
      },
      footer: {
        tagline: "虚构曼哈顿小酒馆 · 仅供演示 · 非真实餐厅",
        rights: "© 2026 奥尔多拉·演示。非真实餐厅。演示专用。",
      },
      orderPage: {
        title: "演示菜单",
        subtitle: "浏览演示菜单、加入购物车，并提交演示订单。非真实餐厅，演示专用。",
        back: "← 返回演示主页",
        cart: "购物车",
        empty: "购物车是空的",
        emptyHint: "从菜单中添加美味菜品吧。",
        browseMenu: "浏览菜单",
        subtotal: "小计",
        tax: "税费（估算）",
        total: "合计",
        placeOrder: "提交订单",
        clear: "清空购物车",
        add: "添加",
        added: "已添加",
        qty: "数量",
        remove: "移除",
        close: "关闭",
        items: "件",
      },
      demo: {
        title: "仅供演示",
        message: "仅供演示 — 订单未发送至厨房。非真实餐厅。",
        detail: "这是静态多语言二维码点餐演示（奥尔多拉·演示）。未收取任何费用，也未传输任何数据。演示专用。",
        ok: "知道了",
      },
      cats: {
        starters: "开胃菜",
        mains: "主菜",
        sides: "配菜",
        desserts: "甜品",
        drinks: "葡萄酒与饮品",
      },
      items: {
        oyster: { name: "东海岸生蚝", desc: "半打，葱醋汁，柠檬" },
        beet: { name: "烤甜菜沙拉", desc: "山羊奶酪、榛子、雪利醋汁" },
        soup: { name: "芹菜根汤", desc: "褐黄油、脆鼠尾草、鲜奶油" },
        steak: { name: "纽约客牛排（三分熟）", desc: "香草黄油、烤葱、肉汁" },
        salmon: { name: "香煎三文鱼", desc: "茴香、柑橘白黄油酱、香草" },
        chicken: { name: "烤半只鸡", desc: "柠檬百里香、锅汁、软玉米粥" },
        pasta: { name: "手工短通心粉", desc: "野生蘑菇、帕玛森、橄榄油" },
        greens: { name: "时令绿叶菜", desc: "香槟醋汁" },
        fries: { name: "鸭油薯条", desc: "迷迭香盐、蒜香蛋黄酱" },
        mash: { name: "土豆泥", desc: "黄油、香葱" },
        tart: { name: "苹果挞", desc: "香草冰淇淋、焦糖" },
        chocolate: { name: "黑巧克力布丁", desc: "海盐、鲜奶油" },
        pinot: { name: "黑皮诺，威拉米特", desc: "杯 · 俄勒冈" },
        chard: { name: "霞多丽，索诺玛", desc: "杯 · 加州" },
        spritz: { name: "店特调气泡酒", desc: "普罗塞克、苦橙、苏打" },
        sparkling: { name: "气泡水", desc: "瓶装" },
      },
    },
    ko: {
      meta: { title: "알도라 데모 — 맨해튼 비스트로 데모", orderTitle: "데모 메뉴 — 알도라 데모" },
      nav: {
        brand: "알도라 데모",
        brandName: "알도라",
        brandDemo: "데모",
        home: "홈",
        about: "소개",
        hours: "영업시간",
        order: "주문",
        lang: "언어",
      },
      hero: {
        eyebrow: "웨스트 빌리지 · 뉴욕 · 데모",
        title: "제철 요리. 엄선된 와인.",
        subtitle:
          "나무와 부드러운 조명, 미국·유럽 요리가 저녁과 만나는 가상의 현대 맨해튼 비스트로 데모.",
        cta: "포장 주문하기",
        secondary: "스토리",
      },
      about: {
        title: "소개",
        p1: "알도라 데모는 다국어 QR 주문 데모를 위해 만든 가상의 웨스트 빌리지 비스트로입니다. 따뜻한 원목 공간에서 제철 미국·유럽 요리와 와인 중심 메뉴를 선보입니다. 실제 식당이 아닙니다.",
        p2: "이 사이트는 정적·오프라인 데모용입니다. 주방으로는 주문이 전달되지 않습니다. 데모 전용.",
      },
      hours: {
        title: "영업시간",
        monThu: "월요일 – 목요일",
        monThuTime: "오후 5:00 – 오후 10:00",
        friSat: "금요일 – 토요일",
        friSatTime: "오후 5:00 – 오후 11:00",
        sun: "일요일",
        sunTime: "오후 4:00 – 오후 9:00",
        note: "주방은 마감 30분 전에 종료됩니다. (데모 영업시간.)",
      },
      location: {
        title: "위치",
        address: "48 Grove Street",
        city: "New York, NY 10014",
        neighborhood: "웨스트 빌리지",
        phone: "(212) 555-0148",
        disclaimer: "가상 주소 — 데모 전용. 실제 식당이 아닙니다.",
      },
      footer: {
        tagline: "가상 맨해튼 비스트로 · 데모 전용 · 실제 식당 아님",
        rights: "© 2026 알도라 데모. 실제 식당이 아닙니다. 데모 전용.",
      },
      orderPage: {
        title: "데모 메뉴",
        subtitle: "데모 메뉴를 보고 장바구니에 담은 뒤 데모 주문을 완료하세요. 실제 식당이 아닙니다.",
        back: "← 데모 홈으로",
        cart: "장바구니",
        empty: "장바구니가 비어 있습니다",
        emptyHint: "메뉴에서 맛있는 음식을 담아 보세요.",
        browseMenu: "메뉴 보기",
        subtotal: "소계",
        tax: "세금 (예상)",
        total: "합계",
        placeOrder: "주문하기",
        clear: "장바구니 비우기",
        add: "담기",
        added: "담김",
        qty: "수량",
        remove: "삭제",
        close: "닫기",
        items: "개",
      },
      demo: {
        title: "데모 전용",
        message: "데모 전용 — 주문이 주방으로 전송되지 않았습니다. 실제 식당이 아닙니다.",
        detail:
          "정적 다국어 QR 주문 데모입니다(알도라 데모). 결제되지 않았고 데이터가 전송되지 않았습니다.",
        ok: "확인",
      },
      cats: {
        starters: "에피타이저",
        mains: "메인",
        sides: "사이드",
        desserts: "디저트",
        drinks: "와인 & 음료",
      },
      items: {
        oyster: { name: "이스트 코스트 굴", desc: "6개, 미뇨네트, 레몬" },
        beet: { name: "구운 비트 샐러드", desc: "염소 치즈, 헤이즐넛, 셰리 비네그레트" },
        soup: { name: "셀러리악 수프", desc: "브라운 버터, 크리스피 세이지, 크렘 프레슈" },
        steak: { name: "뉴욕 스트립 (미디엄 레어)", desc: "허브 버터, 구운 샬롯, 주스" },
        salmon: { name: "팬시어 연어", desc: "회향, 시트러스 뵈르 블랑, 허브" },
        chicken: { name: "로스트 하프 치킨", desc: "레몬 타임, 팬 주스, 부드러운 폴렌타" },
        pasta: { name: "수제 카바텔리", desc: "야생 버섯, 파르메산, 올리브 오일" },
        greens: { name: "마켓 그린", desc: "샴페인 비네그레트" },
        fries: { name: "오리 지방 감자튀김", desc: "로즈메리 솔트, 아이올리" },
        mash: { name: "포테이토 퓌레", desc: "버터, 차이브" },
        tart: { name: "애플 타르트", desc: "바닐라 아이스크림, 캐러멜" },
        chocolate: { name: "다크 초콜릿 포트 드 크렘", desc: "바다 소금, 휘핑 크림" },
        pinot: { name: "피노 누아, 윌라멧", desc: "잔 · 오리건" },
        chard: { name: "샤르도네, 소노마", desc: "잔 · 캘리포니아" },
        spritz: { name: "하우스 스프리츠", desc: "프로세코, 비터 오렌지, 소다" },
        sparkling: { name: "스파클링 워터", desc: "병" },
      },
    },
    fr: {
      meta: { title: "Aldora Démo — Bistro de Manhattan (démo)", orderTitle: "Menu démo — Aldora Démo" },
      nav: {
        brand: "Aldora Démo",
        brandName: "Aldora",
        brandDemo: "Démo",
        home: "Accueil",
        about: "À propos",
        hours: "Horaires",
        order: "Commander",
        lang: "Langue",
      },
      hero: {
        eyebrow: "West Village · New York · Démo",
        title: "Assiettes de saison. Vins choisis.",
        subtitle:
          "Un bistro contemporain fictif de Manhattan (démo) où le bois, la lumière douce et la cuisine américano-européenne rencontrent le soir.",
        cta: "Commander à emporter",
        secondary: "Notre histoire",
      },
      about: {
        title: "À propos",
        p1: "Aldora Démo est un bistro fictif du West Village créé pour une démo de commande QR multilingue. Assiettes américano-européennes de saison, salle chaleureuse au bois, carte des vins soignée. Ce n’est pas un vrai restaurant.",
        p2: "Site statique, utilisable hors ligne — idéal pour une démo d’approche. Aucune commande n’atteint la cuisine. Démo uniquement.",
      },
      hours: {
        title: "Horaires",
        monThu: "Lundi – Jeudi",
        monThuTime: "17 h 00 – 22 h 00",
        friSat: "Vendredi – Samedi",
        friSatTime: "17 h 00 – 23 h 00",
        sun: "Dimanche",
        sunTime: "16 h 00 – 21 h 00",
        note: "La cuisine ferme 30 minutes avant la fermeture. (Horaires de démo.)",
      },
      location: {
        title: "Nous trouver",
        address: "48 Grove Street",
        city: "New York, NY 10014",
        neighborhood: "West Village",
        phone: "(212) 555-0148",
        disclaimer: "Adresse fictive — démo uniquement. Ce n’est pas un vrai restaurant.",
      },
      footer: {
        tagline: "Bistro fictif de Manhattan · Démo uniquement · Pas un vrai restaurant",
        rights: "© 2026 Aldora Démo. Ce n’est pas un vrai restaurant. Démo uniquement.",
      },
      orderPage: {
        title: "Menu démo",
        subtitle: "Parcourez le menu démo, ajoutez des plats et validez une commande démo. Ce n’est pas un vrai restaurant.",
        back: "← Retour à l’accueil démo",
        cart: "Panier",
        empty: "Votre panier est vide",
        emptyHint: "Ajoutez quelque chose de délicieux au menu.",
        browseMenu: "Voir le menu",
        subtotal: "Sous-total",
        tax: "Taxe (est.)",
        total: "Total",
        placeOrder: "Passer commande",
        clear: "Vider le panier",
        add: "Ajouter",
        added: "Ajouté",
        qty: "Qté",
        remove: "Retirer",
        close: "Fermer",
        items: "articles",
      },
      demo: {
        title: "Démo uniquement",
        message: "Démo uniquement — commande non envoyée en cuisine. Ce n’est pas un vrai restaurant.",
        detail:
          "Ceci est une démo statique de commande QR multilingue (Aldora Démo). Aucun paiement n’a été pris et rien n’a été transmis.",
        ok: "Compris",
      },
      cats: {
        starters: "Entrées",
        mains: "Plats",
        sides: "Accompagnements",
        desserts: "Desserts",
        drinks: "Vins & boissons",
      },
      items: {
        oyster: { name: "Huîtres de la Côte Est", desc: "Demi-douzaine, mignonette, citron" },
        beet: { name: "Salade de betteraves rôties", desc: "Chèvre, noisettes, vinaigrette au xérès" },
        soup: { name: "Soupe au céleri-rave", desc: "Beurre noisette, sauge croustillante, crème fraîche" },
        steak: { name: "NY strip, saignant", desc: "Beurre aux herbes, échalotes rôties, jus" },
        salmon: { name: "Saumon poêlé", desc: "Fenouil, beurre blanc agrumes, herbes" },
        chicken: { name: "Demi-poulet rôti", desc: "Thym citronné, jus de cuisson, polenta douce" },
        pasta: { name: "Cavatelli maison", desc: "Champignons sauvages, Parmesan, huile d’olive" },
        greens: { name: "Verts du marché", desc: "Vinaigrette au champagne" },
        fries: { name: "Frites à la graisse de canard", desc: "Sel au romarin, aïoli" },
        mash: { name: "Purée de pommes de terre", desc: "Beurre, ciboulette" },
        tart: { name: "Tarte aux pommes", desc: "Glace vanille, caramel" },
        chocolate: { name: "Pot de crème au chocolat noir", desc: "Fleur de sel, crème fouettée" },
        pinot: { name: "Pinot Noir, Willamette", desc: "Verre · Oregon" },
        chard: { name: "Chardonnay, Sonoma", desc: "Verre · Californie" },
        spritz: { name: "Spritz maison", desc: "Prosecco, orange amère, soda" },
        sparkling: { name: "Eau pétillante", desc: "Bouteille" },
      },
    },
  };

  const langLabels = {
    en: "English",
    zh: "中文",
    ko: "한국어",
    fr: "Français",
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
    return "en";
  }

  function setLang(code) {
    if (!translations[code]) return;
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code === "zh" ? "zh-Hans" : code;
    applyTranslations();
    global.dispatchEvent(new CustomEvent("nv:langchange", { detail: { lang: code } }));
  }

  function t(path) {
    const lang = getLang();
    const parts = path.split(".");
    let node = translations[lang];
    for (const p of parts) {
      if (node == null) return path;
      node = node[p];
    }
    return node != null ? node : path;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = t(key);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });
    const titleKey = document.body.getAttribute("data-title-key");
    if (titleKey) {
      const title = t(titleKey);
      if (typeof title === "string") document.title = title;
    }
    updateLangSwitcherUI();
  }

  function updateLangSwitcherUI() {
    const current = getLang();
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const code = btn.getAttribute("data-lang");
      btn.classList.toggle("is-active", code === current);
      btn.setAttribute("aria-pressed", code === current ? "true" : "false");
    });
    const label = document.querySelector("[data-lang-current]");
    if (label) label.textContent = langLabels[current] || current;
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
        const menu = btn.closest(".lang-menu");
        if (menu) menu.classList.remove("is-open");
      });
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = toggle.closest(".lang-switcher");
        const menu = wrap && wrap.querySelector(".lang-menu");
        if (menu) menu.classList.toggle("is-open");
      });
    });
    document.addEventListener("click", () => {
      document.querySelectorAll(".lang-menu.is-open").forEach((m) => m.classList.remove("is-open"));
    });
    document.documentElement.lang = getLang() === "zh" ? "zh-Hans" : getLang();
    applyTranslations();
  }

  global.NVi18n = {
    translations,
    langLabels,
    getLang,
    setLang,
    t,
    applyTranslations,
    initLangSwitcher,
  };
})(window);
