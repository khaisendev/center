window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scrollTop', `${document.documentElement.scrollTop}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});