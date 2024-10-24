const keyElement = document.getElementById('key');
const keyCodeElement = document.getElementById('keyCode');
const codeElement = document.getElementById('code');
const container = document.getElementById('container');

function animatePress() {
  gsap.fromTo(
    container,
    { scale: 0.9, opacity: 0.8 },
    { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
  );
}

window.addEventListener('keydown', (event) => {
  keyElement.textContent = event.key === ' ' ? 'Space' : event.key;
  keyCodeElement.textContent = event.keyCode;
  codeElement.textContent = event.code;
  animatePress();
});
