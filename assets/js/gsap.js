gsap.from(".navbar", {
  duration: 2,
  opacity: 0,
  y: "-100%",
  ease: "bounce.inOut(1, 5)",
});

gsap.from(".hero-heading", {
  duration: 2,
  opacity: 0,
  y: "100%",
  ease: "elastic.inOut(1, 5)",
  delay: 1,
});

gsap.from(".hero-sub-heading", {
  duration: 2,
  opacity: 0,
  x: "-100%",
  ease: "elastic.inOut(2, 5)",
  delay: 2,
});

gsap.from(".hero-buttons", {
  duration: 2,
  opacity: 0,
  y: "100%",
  ease: "elastic.inOut(3, 5)",
  delay: 2,
});

gsap.from(".hero-images", {
  duration: 2,
  opacity: 0,
  x: "100%",
  ease: "elastic.InOut(4, 2)",
  delay: 3,
});
