<template>
  <div class="invitation-container" :style="{
  '--bgataskanan': `url(${bgataskanan})`,
  '--bgataskiri': `url(${bgataskiri})`,
  '--bgbawahkanan': `url(${bgbawahkanan})`,
  '--bgbawahkiri': `url(${bgbawahkiri})`,
  '--bgpinggirkanan': `url(${bgpinggirkanan})`,
  '--bgpinggirkiri': `url(${bgpinggirkiri})`,
  '--bgtengah': `url(${bgtengah})`,
  '--background': `url(${background})`
}">
  <div class="bg-ataskanan"></div>
  <div class="bg-ataskiri"></div>
  <div class="bg-bawahkanan"></div>
  <div class="bg-bawahkiri"></div>
  <div class="bg-pinggirkanan"></div>
  <div class="bg-pinggirkiri"></div>
  <div class="bg-tengah"></div>
   <div class="background"></div>
  <ElementWeb/>
      <div class="music-control">
      <button @click="toggleMusic">
        {{ isPlaying ? 'Pause Music' : 'Play Music' }}
      </button>
    </div>

    <!-- Elemen audio (disembunyikan) -->
    <audio ref="audioRef" :src="musicSrc" loop></audio>
  <div class="watermark" aria-hidden="true">© Undangan by Mrk Company</div>
  </div>
</template>

<script setup>
import CountdownTimer from './Countdown.vue'
import exampleImg from '../assets/example.jpg'
import ElementWeb from './ElementWeb.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import gallery1 from '../assets/example1.jpg'
import gallery2 from '../assets/example2.jpg'
import gallery3 from '../assets/example3.jpg'
import gallery4 from '../assets/example4.jpg'
import gallery5 from '../assets/example5.jpg'
import gallery6 from '../assets/example6.jpg'
import gallery7 from '../assets/example7.jpg'
import bgataskanan from '../assets/bg - ataskanan.png'
import bgataskiri from '../assets/bg - ataskiri.png'
import bgbawahkanan from '../assets/bg - bawahkanan.png'
import bgbawahkiri from '../assets/bg-bawahkiri.png'
import bgpinggirkanan from '../assets/bg-pinggir.png'
import bgpinggirkiri from '../assets/bg-pinggir2.png'
import bgtengah from '../assets/bg-tengah.png'
import background from '../assets/background.png'
import musicFile from '../assets/musik.mp3'

const isVisibleMakna = ref(false);
const isVisibleAcara = ref(false)
const isVisibleLokasi = ref(false)
const isVisibleAmplop = ref(false)
const isVisibleCountdown = ref(false)
const isVisibleGaleri = ref(false)
const isVisibleRsvp = ref(false)
const musicSrc = musicFile
const audioRef = ref(null)
const isPlaying= ref(false)
const maknaRef = ref(null);
const acaraRef = ref(null)
const lokasiRef = ref(null)
const amplopRef = ref(null)
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


function toggleMusic() {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}


onMounted(() => {
  if (audioRef.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true;
    }).catch(() => {
      isPlaying.value = false;
    });
  }
    const handleVisibilityChange = () => {
    if (document.hidden) {
      if (audioRef.value && isPlaying.value) {
        audioRef.value.pause();
        isPlaying.value = false;
      }
    } else {
      if (audioRef.value && !isPlaying.value) {
        audioRef.value.play().then(() => {
          isPlaying.value = true;
        }).catch(() => {
          isPlaying.value = false;
        });
      }
    }
  };
    document.addEventListener('visibilitychange', handleVisibilityChange);

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
  createObserver(countdownRef, isVisibleCountdown);
  createObserver(galeriRef, isVisibleGaleri);
  createObserver(rsvpRef, isVisibleRsvp);

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
    { threshold: 0.5 }
  );

  imageRefs.value.forEach((img) => {
    if (img) observer.observe(img);
  });
});

// Optional: stop musik saat komponen di-unmount
  onUnmounted(() => {
    if (audioRef.value) {
      audioRef.value.pause();
      isPlaying.value = false;
    }
    document.removeEventListener('visibilitychange', handleVisibilityChange);
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
.invitation-container {
  max-width: 600px;
  font-family: 'Arial', sans-serif;
  color: #1c3b2c;
  background-color: #1c3b2c;
  text-align: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  background: transparent;
}
/* 🌄 Background Pernikahan - Gunung & Gradasi Warna */
.invitation-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -3;
  background:
    linear-gradient(to bottom, #1C1C1C, #1C1C1C, #1C1C1C);
  background-repeat: no-repeat;
}

.bg-ataskanan {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: var(--bgataskanan);
  background-repeat: no-repeat;
  background-position: 35rem 41rem;
  background-size: 300px auto ;
  transform: rotate(180deg);
}
.bg-ataskiri {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: var(--bgataskanan);
  background-repeat: no-repeat;
  background-position: 35rem 41rem;
  background-size: 300px auto ;
  transform: scaleX(-1) rotate(180deg);
}
.bg-bawahkanan {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: var(--bgataskanan);
  background-repeat: no-repeat;
  background-position: 35rem 41rem;
  background-size: 300px auto ;
  transform: scaleX(-1);
}
.bg-bawahkiri {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: var(--bgataskanan);
  background-repeat: no-repeat;
  background-position: 35rem 41rem;
  background-size: 300px auto ;
}
.bg-tengah {
  position: fixed;
  top: 0%;
  right: -10px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 25%;
  background-image: var(--bgtengah);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 300px auto ;
}

.background {
  position: fixed;
  top: 0;
  left: 34.7rem;
  width: 48.7rem;
  height: 100rem;
  z-index: -2;
  opacity: 1%;
  background-image: var(--background);
  background-repeat: repeat;
  background-position: center rem;
  background-size: 100rem auto ;
}


/* Untuk responsif - memastikan konten tetap terlihat */
@media (max-width: 600px) {
  .invitation-container {
    padding: 1rem;
  }
    .invitation-container::before {
 content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background:
    var(--bawahkiri) no-repeat -6rem 33rem,
    var(--bawahkanan) no-repeat 17rem 33rem,
    var(--ataskiri) no-repeat -1rem -2rem,
    var(--ataskanan) no-repeat 18rem -2rem,
    linear-gradient(to bottom, #f0f8f4, #e9f3ed, #dbe9de);
  background-size:
    15rem,
    15rem,
    10rem,
    10rem,
    cover,
    cover,
    cover,
    cover;
  background-repeat: no-repeat;
  }
}
.bird {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 50rem;
  opacity: 0.7;
}
.cloud-container {
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100vw;
  z-index: -2;
  pointer-events: none;
}

.watermark {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: rgba(90, 62, 54, 0.4);
  z-index: 9999;
  pointer-events: none; /* 🔒 Tidak bisa diklik atau diseleksi */
  user-select: none;    /* 🔒 Tidak bisa diseleksi */
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
}

@keyframes moveCloud {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(120vw);
  }
}

.music-control {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  /* z-index: 9999; */
  font-size: 10px;
  text-align: start;
}

.music-control button {
  background-color: #b18f30;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
}

.music-control button:hover {
  background-color: #7a564a;
}

/* Responsif: tombol mengecil di layar kecil */
@media (max-width: 500px) {
  .music-control button {
    padding: 8px 16px;
    font-size: 8px;
  }
}





/* --- ANIMASI --- */
html {
    scroll-behavior: smooth;
}
.fade-in {
    opacity: 1;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

</style>