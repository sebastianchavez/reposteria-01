/* =========================================================
   main.js - Funcionalidades globales del sitio
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-menu-overlay");
  const menuClose = document.getElementById("menu-close");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.inert = false;
    if (mobileMenu) mobileMenu.classList.add("open");
    if (mobileOverlay) mobileOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    if (menuClose) menuClose.focus();
  }
  function closeMenu() {
    const wasOpen = mobileMenu && mobileMenu.classList.contains("open");
    if (wasOpen && menuToggle) menuToggle.focus();
    if (mobileMenu) mobileMenu.inert = true;
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (mobileOverlay) mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (!mobileMenu.classList.contains("open")) return;
      if (event.key === "Escape") closeMenu();
      if (event.key === "Tab") {
        const controls = mobileMenu.querySelectorAll("a[href], button");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    window.matchMedia("(min-width: 1280px)").addEventListener("change", (event) => {
      if (event.matches && mobileMenu.classList.contains("open")) closeMenu();
    });
  }

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  /* ---------- Reveal on scroll (incluye elementos añadidos dinámicamente) ---------- */
  const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right";

  function initReveals() {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );

      const observeEl = (el) => {
        if (el.nodeType === 1 && el.matches && el.matches(REVEAL_SELECTOR)) {
          observer.observe(el);
        }
      };

      const observeAllIn = (root) => {
        if (!root || root.nodeType !== 1) return;
        observeEl(root);
        if (root.querySelectorAll) {
          root.querySelectorAll(REVEAL_SELECTOR).forEach(observeEl);
        }
      };

      // Espera al siguiente frame para asegurar que el layout esté listo
      requestAnimationFrame(() => {
        document.querySelectorAll(REVEAL_SELECTOR).forEach(observeEl);

        // Captura elementos añadidos dinámicamente (cards de servicios, galería, etc.)
        const mo = new MutationObserver((muts) => {
          muts.forEach((m) => {
            m.addedNodes.forEach((n) => observeAllIn(n));
          });
        });
        mo.observe(document.body, { childList: true, subtree: true });
      });
    } else {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => el.classList.add("visible"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveals);
  } else {
    initReveals();
  }

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute("data-counter"), 10);
            const suffix = el.getAttribute("data-suffix") || "";
            const duration = 1800;
            const startTime = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target).toLocaleString("es-CL") + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---------- Galería lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  if (lightbox && lightboxClose) {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox]");
      if (trigger) {
        e.preventDefault();
        lightboxImg.src = trigger.getAttribute("data-lightbox");
        if (lightboxCaption)
          lightboxCaption.textContent = trigger.getAttribute("data-caption") || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
    const closeLightbox = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
    });
  }

  /* ---------- Galería filters ---------- */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-filter");
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        galleryItems.forEach((item) => {
          if (cat === "all" || item.getAttribute("data-category") === cat) {
            item.style.display = "";
            setTimeout(() => item.classList.add("visible"), 30);
          } else {
            item.classList.remove("visible");
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* ---------- Form submit (mock) ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const nombre = formData.get("nombre") || "amigo/a";
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";
      setTimeout(() => {
        submitBtn.textContent = "¡Mensaje enviado!";
        submitBtn.classList.add("!bg-green-500");
        setTimeout(() => {
          alert(
            `¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos pronto. (Demo)`
          );
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          submitBtn.classList.remove("!bg-green-500");
        }, 1000);
      }, 800);
    });
  }

  /* ---------- Active nav link highlight ---------- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    const target = link.getAttribute("data-page");
    if (target === currentPage) link.classList.add("active");
  });

  /* ---------- Año dinámico en footer ---------- */
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Smooth scroll for anchors ---------- */
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
