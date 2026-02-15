const flashlight = document.querySelector('.flashlight');
const light = document.querySelector('.light');

flashlight.addEventListener('click', () => {
  light.classList.toggle('hidden');
  flashlight.classList.toggle('selected');
});

/* GSAP */

document.addEventListener('mousemove', (e) => {
  gsap.to('.light', {
    x: e.clientX - 150,
    y: e.clientY - 150,
  });
});
