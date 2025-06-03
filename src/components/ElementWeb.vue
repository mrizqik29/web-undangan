<template>
  <div>
<header
  ref="headerRef"
  class="fade-in"
  :class="{ visible: isVisibleHeader }"
>
  <h1 class="judul">The Weeding of </h1>
  <h1 class="namaku">Burhan & Tuti</h1>
  <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
  <div class="atasnya">
    <p class="global">Dengan segala kerendahan hati, kami mengundang Anda untuk hadir dalam acara pernikahan kami.</p>
    <button class="btn-acara" @click="scrollToAcara">Acara</button>
  </div>
</header>


<section class="couple-info">
  <div
    ref="coupleRef"
    class="person fade-in"
    :class="{ visible: isVisibleCouple }"
  >
    <p class="mempelai">Burhan Rem Belakang</p>
    <p class="global">(Putra dari Aceng Kampas Rem & Ica Kaliper)</p>
    <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
    <br>
    <p class="mempelai">&</p>
    <br>
    <p class="mempelai">Tuti Spakbor</p>
    <p class="global">(Putri dari Ipul Tali Lansam & Sarah Kabel Tis)</p>
    <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
  </div>
  <br>
</section>

    <section
      ref="maknaRef"
      class="makna fade-in"
      :class="{ visible: isVisibleMakna }"
    >
      <h3 class="lokasi-title">Makna Pernikahan</h3>
      <p class="global">
        Pernikahan adalah penyatuan dua insan dalam ikatan suci untuk saling mencintai,
        menghormati, dan berjalan bersama dalam suka maupun duka.
      </p>
    </section>

    <section
      id="detail-acara"
      ref="acaraRef"
      class="event-details fade-in"
      :class="{ visible: isVisibleAcara }"
    >
      <h3 class="lokasi-title">Detail Acara</h3>
      <p><strong>Tanggal:</strong> 1 Juni 2026</p>
      <p><strong>Waktu:</strong> 10:00 WIB - Selesai</p>
      <p><strong>Tempat:</strong> Gedung Serbaguna XYZ, Jakarta</p>
    </section>

    <section
    ref="lokasiRef"
    class="lokasi fade-in"
    :class="{ visible: isVisibleLokasi }"
    >
    <h3 class="lokasi-title">Lokasi Acara</h3>
    <p class="lokasi-description">
        Silakan klik tombol di bawah ini untuk melihat lokasi acara di Google Maps.
    </p>
    <a
        href="https://www.google.com/maps?q=Gedung+Serbaguna+XYZ,+Jakarta"
        target="_blank"
        rel="noopener"
        class="maps-button"
    >
        🎯 Buka di Google Maps
    </a>
    </section>


    <section
      ref="amplopRef"
      class="amplop-section fade-in"
      :class="{ visible: isVisibleAmplop }"
    >
      <h3 class="lokasi-title">Amplop Online</h3>
      <p>Jika Anda berkenan memberikan hadiah, silakan klik tombol di bawah ini.</p>
      <button @click="showRekening = !showRekening" class="amplop-button">
        Kirim Amplop
      </button>

      <div v-if="showRekening" class="rekening-box">
        <div class="rekening-item">
          <p>
            <strong>Burhan Rem Belakang</strong><br>
            Bank BCA - <span>{{ rekeningBurhan }}</span>
          </p>
          <button @click="copyToClipboard(rekeningBurhan, 'burhan')" class="copy-btn">
            {{ copied.burhan ? 'Disalin!' : 'Copy' }}
          </button>
        </div>

        <div class="rekening-item">
          <p>
            <strong>Tuti Spakbor</strong><br>
            Bank Mandiri - <span>{{ rekeningTuti }}</span>
          </p>
          <button @click="copyToClipboard(rekeningTuti, 'tuti')" class="copy-btn">
            {{ copied.tuti ? 'Disalin!' : 'Copy' }}
          </button>
        </div>
      </div>
    </section>

    <section
      ref="countdownRef"
      class="fade-in"
      :class="{ visible: isVisibleCountdown }"
    >
      <CountdownTimer :eventDate="eventDate" />
    </section>

    <section 
    ref="galleryref"
    class="gallery fade-in"
    :class="{ visible: isVisibleGaleri }"
    >
      <h3 class="lokasi-title">Galeri Kami</h3>
      <div class="gallery-grid">
        <img
          v-for="(img, index) in galleryImages"
          :key="index"
          :src="img"
          :alt="`Foto ${index + 1}`"
          class="gallery-img"
          :ref="el => imageRefs[index] = el"
        />
      </div>
    </section>
    <section
    ref="pesanRef"
    class="pesan fade-in"
    :class="{ visible: isVisiblePesan }"
    >
    <h3 class="lokasi-title">Pesan</h3>
    <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc7CqrAFHfsH0x1RKN8qo7293yW8tiJnWHjH4kQUOipkHJ5hw/viewform?usp=dialog"
        target="_blank"
        rel="noopener"
        class="maps-button"
    >
        Silahkan isi Pesan
    </a>
    </section>
  </div>
</template>

<script setup>
import CountdownTimer from './Countdown.vue'
import exampleImg from '../assets/example.jpg'
import { ref, onMounted } from 'vue';
import gallery1 from '../assets/example1.jpg'
import gallery2 from '../assets/example2.jpg'
import gallery3 from '../assets/example3.jpg'
import gallery4 from '../assets/example4.jpg'
import gallery5 from '../assets/example5.jpg'
import gallery6 from '../assets/example6.jpg'
import gallery7 from '../assets/example7.jpg'
import gallery8 from '../assets/example8.jpg'
import gallery9 from '../assets/example9.jpg'


// GANTI EVENTDATE JIKA TANGGAL DIGANTI
const eventDate = ref('2026-06-01T15:00:00')

const isVisibleMakna = ref(false);
const isVisibleAcara = ref(false)
const isVisibleLokasi = ref(false)
const isVisibleAmplop = ref(false)
const isVisibleCountdown = ref(false)
const isVisibleGaleri = ref(false)
const isVisiblePesan = ref(false)
const isVisibleRsvp = ref(false)
const maknaRef = ref(null);
const acaraRef = ref(null)
const lokasiRef = ref(null)
const amplopRef = ref(null)
const pesanRef = ref(null)
const galleryref = ref(null)
const countdownRef = ref(null)
const galeriRef = ref(null)
const rsvpRef = ref(null)
const showRekening = ref(false);
const rekeningBurhan = '1234567890'
const rekeningTuti = '0987654321'
const copied = ref({ burhan: false, tuti: false })
const galleryImages = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9,
];
const imageRefs = ref([]);
const isVisibleHeader = ref(false)
const isVisibleCouple = ref(false)
const headerRef = ref(null)
const coupleRef = ref(null)


onMounted(() => {
  const createObserver = (refElement, visibleRef) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.value = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    if (refElement.value) observer.observe(refElement.value);
  };

  createObserver(maknaRef, isVisibleMakna);
  createObserver(acaraRef, isVisibleAcara);
  createObserver(lokasiRef, isVisibleLokasi);
  createObserver(amplopRef, isVisibleAmplop);
  createObserver(galleryref, isVisibleGaleri);
  createObserver(pesanRef, isVisiblePesan);
  createObserver(countdownRef, isVisibleCountdown);
//   createObserver(galeriRef, isVisibleGaleri);
  createObserver(rsvpRef, isVisibleRsvp);
  createObserver(headerRef, isVisibleHeader);
  createObserver(coupleRef, isVisibleCouple);

  // 🎯 Tambahan khusus gambar-gambar galeri
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  imageRefs.value.forEach((img) => {
    if (img) observer.observe(img);
  });
});


function copyToClipboard(text, who) {
  navigator.clipboard.writeText(text).then(() => {
    copied.value[who] = true
    setTimeout(() => {
      copied.value[who] = false
    }, 2000)
  })
}

function scrollToAcara() {
  const element = document.getElementById('detail-acara');
  if (!element) return;

  const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
  const elementHeight = element.offsetHeight;
  const viewportHeight = window.innerHeight;

  // Target scroll supaya elemen berada di tengah viewport
  const targetPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // 1 second
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    // easeInOutQuad
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* --- Container Utama --- */

.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin: 1rem auto;
    display: block;
}

.judul {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #5a3e36;
}

.couple-info {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-weight: 600;
    color: #5a3e36;
}

.global {
    font-family: "Lora", serif;
    font-size: 15px;
    color: #5a3e36;
}

.person h2 {
    /* margin-bottom: 0.2rem; */
    color: #a0522d;
}

.namaku {
    font-size: 40px;
    font-family: 'Great Vibes', cursive;
    color: #5a3e36;
}

.mempelai {
    font-family: 'Great Vibes', cursive;
    font-size: 40px;
    color: #5a3e36;
}

/* Mengubah background bagian-bagian konten menjadi transparan atau semi-transparan */
.atasnya,
.event-details,
.lokasi,
.pesan,
.amplop-section,
.gallery,
.makna {
    background-color: #f5e1d3;
    padding: 2rem;
    border-radius: 10px;
    margin: 2rem auto;
    max-width: 500px;
    text-align: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.219);
}

.lokasi:hover {
  transform: scale(1.02);
}

.lokasi-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #a0522d;
  margin-bottom: 1rem;
}

.lokasi-description {
  font-size: 1rem;
  color: #5d4037;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.maps-button {
  display: inline-block;
  background-color: #9c6c4a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.maps-button:hover {
  background-color: #8d4a21;
  transform: translateY(-2px);
}

.event-details p {
    text-align: center;
    margin: 0.5rem 0;
    font-size: 15px;
    line-height: 1.6;
    font-family: "Lora", serif;
    color: #5a3e36;
}

.event-details h3 {
    margin-bottom: 1rem;
    color: #29140a;
}

.rsvp-section h3 {
    margin-bottom: 1rem;
    color: #d2691e;
}

.amplop-section p{
    font-weight: bold;
}

.amplop-button {
  display: inline-block;
  background-color: #9c6c4a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.amplop-button:hover {
    background-color: #8d4a21;
  transform: translateY(-2px);
}

.rekening-box {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    font-family: "Lora", serif;
    font-size: 15px;
    line-height: 1.6;
    gap: 2rem;
}
.rekening-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fdf1e3;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 10px 10px 3px rgba(0, 0, 0, 0.219);
}

.copy-btn {
  display: inline-block;
  background-color: #9c6c4a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.copy-btn:hover {
      background-color: #8d4a21;
  transform: translateY(-2px);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* default 3 kolom */
  gap: 1rem;
  margin-top: 1rem;
}

.gallery-img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: scale(0.5);
  transition: all 3s ease;
}

.gallery-img.show {
  opacity: 1;
  transform: scale(1);
}

.gallery-img:hover {
  transform: scale(1.1);
}

.btn-acara {
  display: inline-block;
  background-color: #9c6c4a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-acara:hover {
          background-color: #8d4a21;
  transform: translateY(-2px);
}
 

/* --- ANIMASI --- */
html {
    scroll-behavior: smooth;
}
.fade-in {
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 600px) {
  .lokasi {
    padding: 2rem 1rem;
  }

  .lokasi-title {
    font-size: 2rem;
  }

  .maps-button {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 kolom di tablet */
  }

  .gallery-img {
    height: 150px; /* tinggi gambar lebih kecil */
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* 1 kolom di HP */
  }

  .gallery-img {
    height: 180px; /* bisa sedikit lebih tinggi jika 1 kolom */
  }
}
</style>