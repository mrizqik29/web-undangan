<template>
  <div>
<header
  ref="headerRef"
  class="fade-in"
  :class="{ visible: isVisibleHeader }"
>
  <h1 class="judul">UNDANGAN PERNIKAHAN </h1>
  <h1 class="namaku">Burhan & Tuti</h1>
  <div class="profile-wrapper">
    <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
  </div>
  <div class="atasnya" :style="{
  '--boxatasatasnya': `url(${boxatas})`,
  '--boxbawah-atasnya': `url(${boxbawah})`,
  '--boxgarisatas-atasnya': `url(${boxgaris})`,
  '--boxgarisbawah-atasnya': `url(${boxgaris})`,
  }">
    <div class="atas-atasnya"></div>
    <div class="garisatas-atasnya"></div>
    <div class="garisbawah-atasnya"></div>
    <div class="bawah-atasnya"></div>
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
    <p class="keluarga">(Putra dari Aceng Kampas Rem & Ica Kaliper)</p>
    <div class="profile-wrapper">
      <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
    </div>
    <br>
    <p class="mempelai">&</p>
    <br>
    <p class="mempelai">Tuti Spakbor</p>
    <p class="keluarga">(Putri dari Ipul Tali Lansam & Sarah Kabel Tis)</p>
    <div class="profile-wrapper">
      <img :src="exampleImg" alt="Contoh Gambar" class="profile-img" />
    </div>
  </div>
  <br>
</section>

    <section
      ref="maknaRef"
      class="makna fade-in"
      :class="{ visible: isVisibleMakna }"
      :style="{
                '--boxatas-makna': `url(${boxatas})`,
                '--boxbawah-makna': `url(${boxbawah})`,
                '--boxgarisatas-makna': `url(${boxgaris})`,
                '--boxgarisbawah-makna': `url(${boxgaris})`,
                }">

          <div class="atas-makna"></div>
          <div class="garisatas-makna"></div>
          <div class="garisbawah-makna"></div>
          <div class="bawah-makna"></div>
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
      :style="{
                '--boxatas-acara': `url(${boxatas})`,
                '--boxbawah-acara': `url(${boxbawah})`,
                '--boxgarisatas-acara': `url(${boxgaris})`,
                '--boxgarisbawah-acara': `url(${boxgaris})`,
                }">

          <div class="atas-acara"></div>
          <div class="garisatas-acara"></div>
          <div class="garisbawah-acara"></div>
          <div class="bawah-acara"></div>
      <h3 class="lokasi-title">Detail Acara</h3>
      <p class="global"><strong>Tanggal:</strong> 1 Juni 2026</p>
      <p class="global"><strong>Waktu:</strong> 10:00 WIB - Selesai</p>
      <p class="global"><strong>Tempat:</strong> Gedung Serbaguna XYZ, Jakarta</p>
    </section>

    <section
    ref="lokasiRef"
    class="lokasi fade-in"
    :class="{ visible: isVisibleLokasi }"
          :style="{
                '--boxatas-lokasi': `url(${boxatas})`,
                '--boxbawah-lokasi': `url(${boxbawah})`,
                '--boxgarisatas-lokasi': `url(${boxgaris})`,
                '--boxgarisbawah-lokasi': `url(${boxgaris})`,
                }">

          <div class="atas-lokasi"></div>
          <div class="garisatas-lokasi"></div>
          <div class="garisbawah-lokasi"></div>
          <div class="bawah-lokasi"></div>
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
       Buka di Google Maps
    </a>
    </section>


    <section
      ref="amplopRef"
      class="amplop-section fade-in"
      :class="{ visible: isVisibleAmplop }"
              :style="{
                '--boxatas-amlop': `url(${boxatas})`,
                '--boxbawah-amlop': `url(${boxbawah})`,
                '--boxgarisatas-amlop': `url(${boxgaris})`,
                '--boxgarisbawah-amlop': `url(${boxgaris})`,
                }">

          <div class="atas-amlop"></div>
          <div class="garisatas-amlop"></div>
          <div class="garisbawah-amlop" :class="{ turun: showRekening }"></div>
          <div class="bawah-amlop" :class="{ turun: showRekening }"></div>
      <h3 class="lokasi-title">Amplop Online</h3>
      <p class="global">Jika Anda berkenan memberikan hadiah, silakan klik tombol di bawah ini.</p>
      <button @click="showRekening = !showRekening" class="amplop-button">
        Kirim Amplop
      </button>
    

   <TransitionGroup name="rekeningku" tag="div">
      <div v-if="showRekening" class="rekening-box">
        <div class="rekening-item">
          <p class="global">
            <strong>Burhan Rem Belakang</strong><br>
            Bank BCA - <span>{{ rekeningBurhan }}</span>
          </p>
          <button @click="copyToClipboard(rekeningBurhan, 'burhan')" class="copy-btn">
            {{ copied.burhan ? 'Disalin!' : 'Copy' }}
          </button>
        </div>

        <div class="rekening-item">
          <p class="global">
            <strong>Tuti Spakbor</strong><br>
            Bank Mandiri - <span>{{ rekeningTuti }}</span>
          </p>
          <button @click="copyToClipboard(rekeningTuti, 'tuti')" class="copy-btn">
            {{ copied.tuti ? 'Disalin!' : 'Copy' }}
          </button>
        </div>
      </div>
   </TransitionGroup>
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
                  :style="{
                '--boxatas-pesan': `url(${boxatas})`,
                '--boxbawah-pesan': `url(${boxbawah})`,
                '--boxgarisatas-pesan': `url(${boxgaris})`,
                '--boxgarisbawah-pesan': `url(${boxgaris})`,
                }">

          <div class="atas-pesan"></div>
          <div class="garisatas-pesan"></div>
          <div class="garisbawah-pesan" :class="{ turun: showRekening }"></div>
          <div class="bawah-pesan" :class="{ turun: showRekening }"></div>
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
import exampleImg from '../assets/profile.jpg'
import { ref, onMounted } from 'vue';
import gallery1 from '../assets/example1.jpg'
import gallery2 from '../assets/example2.jpg'
import gallery3 from '../assets/example3.jpg'
import gallery4 from '../assets/example4.jpg'
import gallery5 from '../assets/example5.jpg'
import gallery6 from '../assets/example6.jpg'
import gallery7 from '../assets/example7.jpg'
import boxatas from '../assets/box-atas.png'
import boxbawah from '../assets/box-bawah.png'
import boxgaris from '../assets/box-garis.png'

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
  gallery7,
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
  createObserver(galeriRef, isVisibleGaleri);
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Great+Vibes&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
/* --- Container Utama --- */

* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}


.profile-img {
  width: 70%;
  height: 70%;
  z-index: 1;
}

.profile-overlay {
  position: absolute;
  top: -2px;
  left: -10px;
  width: 165px;
  height: 165px;
  z-index: 2;
  pointer-events: none; /* Supaya tidak mengganggu klik */
}


.judul {
    font-family: "Cormorant Garamond", serif;
    font-size: 50px;
    margin-bottom: 0.5rem;
    color: #D5B253;
}

.couple-info {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-weight: 600;
    color: #1c3b2c;
}

.global {
    font-family: "Poppins", sans-serif;;
    font-size: 15px; 
    color: #DAD3C8;
}

.person h2 {
    /* margin-bottom: 0.2rem; */
    color: #a0522d;
}

.namaku {
    font-size: 40px;
    font-family: "Great Vibes", cursive;
    color: #F9F5EF;
}

.mempelai {
    font-family: "Great Vibes", cursive;
    font-weight: bold;
    font-size: 40px;
    color: #F9F5EF;
}
.keluarga {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #F9F5EF;
}

/* Mengubah background bagian-bagian konten menjadi transparan atau semi-transparan */
.event-details{
  position: relative;
  padding-bottom: 4rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.atas-acara {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-acara);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-acara {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-acara);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-acara {
  position: absolute;
  top: 15rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-acara);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-acara {
  position: absolute;
  top: 16rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-acara);
  background-repeat: no-repeat;
  background-size: contain;
}


/* PESAN */
.pesan{
  padding-bottom: 5rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.atas-pesan {
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-pesan);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-pesan {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-pesan);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-pesan {
  position: absolute;
  top: 11rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-pesan);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-pesan {
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-pesan);
  background-repeat: no-repeat;
  background-size: contain;
}

/* AMPLOP ONLINE */

.amplop-section{
  padding-bottom: 6rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.atas-amlop {
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-amlop);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-amlop {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-amlop);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-amlop {
  position: absolute;
  top: 16.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-amlop);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-amlop {
  position: absolute;
  top: 17.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-amlop);
  background-repeat: no-repeat;
  background-size: contain;
}

.garisbawah-amlop,
.bawah-amlop {
  transition: top 0.8s ease;
}

.garisbawah-amlop.turun {
  top: 37rem; /* naik dari 16.5rem */
}

.bawah-amlop.turun {
  top: 38rem; /* naik dari 17.5rem */
}

.amplop-button {
  display: inline-block;
  background-color: #D5B253;
  color: #E0DDD5;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  z-index: 2;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.amplop-button:hover {
    z-index: 2;
    background-color: #E5C07B;
  transform: translateY(-2px);
}

.rekening-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.rekeningku-enter-active{
  Transition: all 0.1s ease;
}
.rekeningku-leave-active {
  transition: all 0.15s ease;
}
.rekeningku-enter-from,
.rekeningku-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.rekening-item {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
  word-break: break-word;
}

.rekening-item span {
  display: inline-block;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
}

.copy-btn {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: #D5B253;
  color: white;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
}

.copy-btn:hover {
  background-color: #E5C07B;
}

/* LOKASI */

.lokasi{
  padding-bottom: 5rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.atas-lokasi {
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-lokasi);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-lokasi {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-lokasi);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-lokasi {
  position: absolute;
  top: 16.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-lokasi);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-lokasi {
  position: absolute;
  top: 17.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-lokasi);
  background-repeat: no-repeat;
  background-size: contain;
}


.makna{
  position: relative;
  padding-bottom: 3rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.atas-makna {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-makna);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-makna {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-makna);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-makna {
  position: absolute;
  top: 13rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-makna);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-makna {
  position: absolute;
  top: 14rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-makna);
  background-repeat: no-repeat;
  background-size: contain;
}

.atasnya {
  position: relative;
  padding: 2rem;
  border-radius: 10px;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Elemen atas */
.atas-atasnya {
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatasatasnya);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-atasnya {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-atasnya);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-atasnya {
  position: absolute;
  top: 11rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-atasnya);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-atasnya {
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-atasnya);
  background-repeat: no-repeat;
  background-size: contain;
}




.gallery{
    padding: 2rem;
    border-radius: 10px;
    margin: 2rem auto;
    max-width: 500px;
    text-align: center;
    background-repeat: no-repeat, no-repeat;
    background-position: center 45rem, center 0rem;
    background-size: 300px auto, 120px
}

.lokasi:hover {
  transform: scale(1.02);
}

.lokasi-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #DAD3C8;
  margin-bottom: 1rem;
}

.lokasi-title p {
  color: #E0DDD5;
  font-size: 50px;
  font-weight: bold;
}

.lokasi-description {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  color: #E0DDD5;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.maps-button {
  position: relative;
  display: inline-block;
  background-color: #D5B253;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-family: "Poppins", sans-serif ;
  font-size: 1rem;
  text-decoration: none;
  z-index: 4;
  pointer-events: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.maps-button:hover {
  background-color: #E5C07B;
  transform: translateY(-2px);
}

.event-details p {
  
    text-align: center;
    margin: 0.5rem 0;
    font-size: 15px;
    line-height: 1.6;
    font-family: "Poppins", sans-serif;;
    color: #E0DDD5;
}

.event-details h3 {
    font-family:  "Great Vibes", cursive;
    margin-bottom: 1rem;
    color: #DAD3C8;
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
  background-color: #D5B253;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  z-index: 4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-acara:hover {
  background-color: #E5C07B;
  /* transform: translateY(-2px); */
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
    font-size: 10px;
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