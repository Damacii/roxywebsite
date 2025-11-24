/* ========================================================================== */
/* Apple-style Smooth Animations                                              */
/* ========================================================================== */

// Register GSAP plugins
if (window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/* ========================================================================== */
/* Hero Image Interaction (Apple-style)                                       */
/* ========================================================================== */
const front = document.querySelector(".front-img");
const back = document.querySelector(".back-img");
const wrapper = document.querySelector(".image-wrapper");

if (wrapper && front && back) {
  wrapper.addEventListener("mouseenter", () => {
    gsap.to(front, {
      opacity: 0,
      scale: 1.03,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(back, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  wrapper.addEventListener("mouseleave", () => {
    gsap.to(front, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(back, {
      opacity: 0.4,
      scale: 0.96,
      duration: 0.6,
      ease: "power2.out",
    });
  });
}

/* ========================================================================== */
/* Smooth Scroll Animations (Apple-style fade-in)                            */
/* ========================================================================== */
if (window.ScrollTrigger) {
  // Animate sections on scroll
  gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate gallery items
  gsap.utils.toArray(".gallery-item").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate service cards
  gsap.utils.toArray(".service-column").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate pricing cards
  gsap.utils.toArray(".pricing-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate hero text elements
  gsap.from(".small-title", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".headline", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
  });

  gsap.from(".location", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.6,
    ease: "power2.out",
  });

  gsap.from(".roles", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.8,
    ease: "power2.out",
  });

  // Animate hero images
  gsap.from(".image-wrapper", {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });
}

/* ========================================================================== */
/* Mobile Navigation (Apple-style)                                            */
/* ========================================================================== */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  };

  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking on links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });
}

/* ========================================================================== */
/* Header Background on Scroll (Apple-style)                                  */
/* ========================================================================== */
const header = document.querySelector(".roxy-header");

if (header) {
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove background based on scroll position
    if (currentScroll > 50) {
      header.style.background = "rgba(255, 255, 255, 0.8)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.8)";
    }
    
    lastScroll = currentScroll;
  });
}

/* ========================================================================== */
/* Smooth Scroll for Anchor Links                                            */
/* ========================================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
