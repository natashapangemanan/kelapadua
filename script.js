const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ---------- AUTO-SLIDE FOTO UMKM & WISATA (tiap kartu, 2 detik) ----------
document.querySelectorAll('.kom-bg-stack').forEach(stack => {
  const imgs = Array.from(stack.querySelectorAll('.kom-bg'));
  if (imgs.length <= 1) return;
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('active');
  }, 2000);
});