window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400; // hoe snel het blurry wordt
  const maxBlur = 30;    // maximale blur in pixels

  const blurValue = Math.min((scrollY / maxScroll) * maxBlur, maxBlur);

  document.querySelector('.hero img').style.filter = `blur(${blurValue}px)`;
});
