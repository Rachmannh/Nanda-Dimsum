gsap.from(".navbar", {
  duration: 2,
  opacity: 0,
  y: "-100%",
  ease: "elastic.inOut(1, 5)",
});

gsap.from(".my-hero", {
  duration: 3,
  opacity: 0,
  ease: "elastic.inOut(1, 5)",
});

gsap.from(".hero-title", {
  duration: 2,
  opacity: 0,
  x: "-100%",
  ease: "elastic.inOut(1, 5)",
  delay: 1,
});

gsap.from(".hero-paragraph", {
  duration: 2,
  opacity: 0,
  x: "100%",
  y: "-150%",
  ease: "elastic.inOut(1, 5)",
  delay: 2,
});

gsap.from(".hero-buttons", {
  duration: 2,
  opacity: 0,
  y: "100%",
  ease: "elastic.inOut(1, 5)",
  delay: 2,
});
