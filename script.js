/* ========================================================================== */
/* Apple-style Smooth Animations                                              */
/* ========================================================================== */

// Register GSAP plugins
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/* ========================================================================== */
/* Hero Image Interaction (Apple-style)                                       */
/* ========================================================================== */
/* (Hover swap removed to keep single static hero image) */

/* ========================================================================== */
/* Smooth Scroll Animations (Apple-style fade-in)                            */
/* ========================================================================== */
let animationsInitialized = false;

const initSiteAnimations = () => {
  if (animationsInitialized || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  animationsInitialized = true;

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

  gsap.from(".image-wrapper", {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });
};

/* ========================================================================== */
/* Site Preloader                                                             */
/* ========================================================================== */
const sitePreloader = document.getElementById("site-preloader");
const sitePreloaderBar = document.getElementById("site-preloader-bar");
const sitePreloaderCount = document.getElementById("site-preloader-count");

const initPreloader = () => {
  if (!sitePreloader || !sitePreloaderBar || !sitePreloaderCount) {
    initSiteAnimations();
    return;
  }

  const startTime = window.performance ? performance.now() : Date.now();
  const loaderDuration = 2500;

  let displayedProgress = 0;
  let pageLoaded = false;
  let revealStarted = false;
  let animationFrameId = null;

  const renderProgress = (value) => {
    const clampedValue = Math.min(value, 100);
    sitePreloader.style.setProperty("--loader-progress", clampedValue.toFixed(2));
    sitePreloaderCount.textContent = `${Math.round(clampedValue)}%`;
  };

  const revealSite = () => {
    if (revealStarted) {
      return;
    }

    revealStarted = true;
    document.body.classList.remove("is-loading");
    initSiteAnimations();

    if (window.gsap) {
      gsap.to(sitePreloader, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          sitePreloader.remove();
        },
      });
      return;
    }

    sitePreloader.remove();
  };

  const tickProgress = (timestamp) => {
    const elapsed = timestamp - startTime;
    const timeProgress = Math.min((elapsed / loaderDuration) * 100, 100);
    displayedProgress = timeProgress;
    renderProgress(displayedProgress);

    if (displayedProgress < 100) {
      animationFrameId = window.requestAnimationFrame(tickProgress);
      return;
    }

    animationFrameId = null;

    if (pageLoaded && displayedProgress >= 100) {
      revealSite();
    }
  };

  const startTick = () => {
    if (!animationFrameId) {
      animationFrameId = window.requestAnimationFrame(tickProgress);
    }
  };

  renderProgress(0);
  startTick();

  window.addEventListener(
    "load",
    () => {
      pageLoaded = true;

      if (!animationFrameId && displayedProgress >= 100) {
        revealSite();
      }
    },
    { once: true }
  );
};

initPreloader();

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
