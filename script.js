/* =========================================================
   ManJour - script.js
   1. Efek scroll: logo mengecil & pindah ke kanan atas
   2. Menu hamburger di HP
   3. Fallback logo kalau file gambar belum ada
   4. Efek kartu harga untuk layar sentuh
   ========================================================= */

// Ambil elemen dari HTML
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const brandLogo = document.getElementById('brandLogo');

/* ---------- 1. Efek scroll ----------
   Pakai dua batas (60px dan 10px) supaya header tidak
   "kedip" bolak-balik saat posisi scroll pas di batas. */
function updateHeader() {
  const y = window.scrollY;
  if (y > 60) {
    header.classList.add('is-small');
  } else if (y < 10) {
    header.classList.remove('is-small');
  }
}

// { passive: true } = scroll tetap lancar di HP
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader(); // cek sekali saat halaman dibuka

/* ---------- 2. Menu hamburger ---------- */
menuToggle.addEventListener('click', function () {
  const isOpen = mainNav.classList.toggle('is-open');
  // Beri tahu pembaca layar (aksesibilitas) apakah menu terbuka
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

// Tutup menu setelah salah satu link diklik
mainNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
  });
});

/* ---------- 3. Fallback logo ----------
   Kalau logo_ManJour.png tidak ditemukan, gambar disembunyikan.
   Tulisan "ManJour" tetap tampil. */
function hideLogo() {
  brandLogo.style.display = 'none';
}
brandLogo.addEventListener('error', hideLogo);
// Kalau gambar sudah gagal dimuat sebelum script ini jalan
if (brandLogo.complete && brandLogo.naturalWidth === 0) {
  hideLogo();
}

/* ---------- 4. Kartu harga di layar sentuh ----------
   Di HP tidak ada "hover" kursor, jadi saat kartu disentuh
   kita tambahkan class "is-hover" supaya kartu tetap naik. */
document.querySelectorAll('.price-card').forEach(function (card) {
  card.addEventListener('touchstart', function () {
    card.classList.add('is-hover');
  }, { passive: true });
  card.addEventListener('touchend', function () {
    card.classList.remove('is-hover');
  });
});
