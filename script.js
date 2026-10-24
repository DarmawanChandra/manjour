// =========================================================
// script.js - interaksi kecil untuk halaman Manjour
// Cara kerjanya: JavaScript hanya MENAMBAH / MENGHAPUS class.
// Tampilan efeknya (naik, bayangan, warna gelap) diatur di style.css.
// =========================================================

// ---------- 1. Efek kartu harga saat kursor di atasnya ----------

// Ambil SEMUA elemen yang punya class "price-card"
const priceCards = document.querySelectorAll(".price-card");

// Ulangi untuk setiap kartu
priceCards.forEach(function (card) {
  // mouseenter = kursor masuk ke area kartu
  card.addEventListener("mouseenter", function () {
    card.classList.add("is-hovered"); // kartu naik + bayangan
  });

  // mouseleave = kursor keluar dari area kartu
  card.addEventListener("mouseleave", function () {
    card.classList.remove("is-hovered"); // kembali normal
  });
});

// ---------- 2. Tombol WA jadi lebih gelap saat ditekan ----------

// Ambil satu elemen tombol WA
const waButton = document.querySelector(".wa-button");

// Fungsi kecil supaya kode tidak ditulis berulang
function pressOn() {
  waButton.classList.add("is-pressed");
}
function pressOff() {
  waButton.classList.remove("is-pressed");
}

// Untuk mouse (laptop/PC)
waButton.addEventListener("mousedown", pressOn);   // tombol mouse ditekan
waButton.addEventListener("mouseup", pressOff);    // tombol mouse dilepas
waButton.addEventListener("mouseleave", pressOff); // kursor keluar dari tombol

// Untuk layar sentuh (HP, termasuk iPhone)
// { passive: true } = memberi tahu browser kita tidak memblokir scroll
waButton.addEventListener("touchstart", pressOn, { passive: true });
waButton.addEventListener("touchend", pressOff);
waButton.addEventListener("touchcancel", pressOff);

// Catatan: sengaja TIDAK memakai navigator.vibrate (efek getar),
// karena tidak didukung di iPhone (Safari).
