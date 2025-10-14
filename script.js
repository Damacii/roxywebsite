/* ========================================================================== */
/* Hero Image Flip                                                            */
/* ========================================================================== */
gsap.registerPlugin();

const front = document.querySelector(".front-img");
const back = document.querySelector(".back-img");
const wrapper = document.querySelector(".image-wrapper");

wrapper.addEventListener("mouseenter", () => {
  gsap.to(front, {
    opacity: 0,
    scale: 1.05,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.to(back, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  });
});

wrapper.addEventListener("mouseleave", () => {
  gsap.to(front, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(back, {
    opacity: 0,
    scale: 1.1,
    duration: 0.8,
    ease: "power3.out",
  });
});
/* ========================================================================== */
/* End of Hero Image Flip                                                     */
/* ========================================================================== */

gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
  });
});
