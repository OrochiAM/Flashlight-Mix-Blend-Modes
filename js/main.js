document.addEventListener('mousemove', (e) => {
  gsap.to('.light', {
    x: e.clientX - 150,
    y: e.clientY - 150,
  });

  console.log(e.clientX);
});
