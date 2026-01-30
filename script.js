// AOS Init
AOS.init({ duration: 1000, once: true });

// Typed JS
document.addEventListener("DOMContentLoaded", () => {
  new Typed('#typed', {
    strings: ['Video Editor', 'Freelancer', 'Motion Designer', 'Content Creator'],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Particle Background

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - .5) * .7,
    dy: (Math.random() - .5) * .7
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,64,160,0.4)';
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// Resize support
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 3D Parallax Effect

const hero = document.querySelector('.hero');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
