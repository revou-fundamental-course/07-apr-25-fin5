// BANNER SLIDESHOW OTOMATIS
let currentBanner = 0;
const banners = document.querySelectorAll(".banner-img");

function showBanner(index) {
  banners.forEach((banner, i) => {
    banner.style.display = i === index ? "block" : "none";
  });
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  showBanner(currentBanner);
}

// Tampilkan banner pertama saat halaman dimuat
if (banners.length > 0) {
  showBanner(currentBanner);
  setInterval(nextBanner, 3000);
}

// FORM VALIDATION + NOTIFIKASI + PREVIEW
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Mohon lengkapi semua form!");
    return;
  }

  // Preview data (bisa diganti tampil di halaman, tapi ini pake alert dulu)
  const preview =
    `--- Data Form ---\n` +
    `Nama   : ${name}\n` +
    `Email  : ${email}\n` +
    `Telepon: ${phone}\n` +
    `Pesan  : ${message}`;

  alert("Form berhasil dikirim!\n\n" + preview);

  // Reset form (opsional)
  document.querySelector("form").reset();
}
