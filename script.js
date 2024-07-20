document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("[data-upsellone]", {
    opacity: 0,
  });
});
