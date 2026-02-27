// LOADING SPINNER START
const preloader = document.getElementById("preloader");
let isPageLoaded = false;

// Jika dalam 400ms halaman belum selesai dimuat, tampilkan spinner
const showTimer = setTimeout(() => {
  if (!isPageLoaded) {
    preloader.classList.remove("opacity-0", "pointer-events-none");
    preloader.classList.add("opacity-100");
  }
}, 400);

window.addEventListener("load", () => {
  isPageLoaded = true;
  clearTimeout(showTimer); // Batalkan timer jika web sudah siap

  // Sembunyikan spinner (jika sempat muncul karena internet lambat)
  preloader.classList.add("opacity-0", "pointer-events-none");
  preloader.classList.remove("opacity-100");
});
// LOADING SPINNER END

//  HAMBURGER MENU START
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// toggle menu
function toggleMenu() {
  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Klik tombol hamburger
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Mencegah klik ini terdeteksi oleh 'window' di bawah
  toggleMenu();
});

// KLIK DI MANA SAJA UNTUK MENUTUP
window.addEventListener("click", (e) => {
  // Jika menu sedang terbuka DAN yang diklik bukan bagian dari menu atau tombol
  if (
    !menu.classList.contains("hidden") &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    toggleMenu();
  }
});

// Menutup menu saat salah satu link diklik (opsional tapi disarankan)
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!menu.classList.contains("hidden")) {
      toggleMenu();
    }
  });
});
//  HAMBURGER MENU END

// LEGALISIR DOKUMEN CARD START
const modal = document.getElementById("documentModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");

function openModal(title, imgSrc) {
  // 1. Isi konten
  modalTitle.innerText = title;
  modalImg.src = imgSrc;

  // 2. Munculkan modal
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // 3. Kunci scroll body
  document.body.style.overflow = "hidden";
}

function closeModal() {
  // 1. Sembunyikan modal
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // 2. Aktifkan scroll kembali
  document.body.style.overflow = "auto";

  // 3. Bersihkan src agar tidak "flicker" saat dibuka lagi
  modalImg.src = "";
}

// Tutup jika klik di area hitam (luar modal)
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Tutup jika tekan tombol Esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
// LEGALISIR DOKUMEN CARD END

// FORM CHAT LANGSUNG KE WHATSAPP START
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah halaman refresh

    // 1. Ambil data dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // 2. Nomor WhatsApp Perusahaan
    const phoneNumber = "6281384431535";

    // 3. Susun pesan agar rapi
    const fullMessage =
      `Halo PT. NEXTCOMM INDONESIA PRIMA,%0A%0A` +
      `Saya ingin menanyakan tentang proyek.%0A%0A` +
      `*Nama:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Subjek:* ${subject}%0A` +
      `*Pesan:* ${message}`;

    // 4. Buka URL WhatsApp
    const waUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    // Membuka di tab baru
    window.open(waUrl, "_blank");
  });
// FORM CHAT LANGSUNG KE WHATSAPP END

// back to top button start
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.replace("opacity-0", "opacity-100");
    backToTopBtn.classList.replace("invisible", "visible");
  } else {
    backToTopBtn.classList.replace("opacity-100", "opacity-0");
    backToTopBtn.classList.replace("visible", "invisible");
  }
});

// Fungsi saat tombol diklik
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Efek meluncur halus
  });
});
// back to top button end


// include footer
fetch('footer.html')
        .then(response => {
          if (!response.ok) throw new Error('File footer tidak ditemukan');
          return response.text();
        })
        .then(data => {
          document.getElementById('footer-1').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
