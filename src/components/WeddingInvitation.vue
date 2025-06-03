<template>
  <div class="invitation-container" :style="{
  '--bird1': `url(${bird1})`
}">

<div class="cloud-container">
  <div class="cloud cloud-1"></div>
  <div class="cloud cloud-2"></div>
</div>
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
import gallery8 from '../assets/example8.jpg'
import gallery9 from '../assets/example9.jpg'
import bird1 from '../assets/bird1.png'
import bird2 from '../assets/bird2.png'
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
  gallery7, gallery8, gallery9,
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
      // Autoplay mungkin diblokir browser
      isPlaying.value = false;
    });
  }
    const handleVisibilityChange = () => {
    if (document.hidden) {
      // Tab tidak aktif, pause musik
      if (audioRef.value && isPlaying.value) {
        audioRef.value.pause();
        isPlaying.value = false;
      }
    } else {
      // Tab aktif, play musik otomatis
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
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* --- Container Utama --- */
.invitation-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  color: #5a3e36;
  background-color: #5a3e36;
  text-align: center;
  position: relative;
  z-index: 1;
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
  z-index: -2;
  background:
    var(--bird1) no-repeat 30rem 20rem,
    var(--bird1) no-repeat 40rem 5rem,
    var(--bird1) no-repeat 90rem 10rem,
    linear-gradient(to bottom, #fff5f7, #fbe4d8, #e0a899);
  background-size: 400px auto, 200px auto, 300px auto, cover;
  background-repeat: no-repeat, no-repeat;
}


.invitation-container::after {
  content: "";
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 55vh;
  z-index: -1;
  background:
    linear-gradient(to top, #b26e63 0%, transparent 100%),
    url('https://images.unsplash.com/photo-1609022163124-4536c7a58554?auto=format&fit=crop&w=1500&q=80') no-repeat center bottom;
  background-size: cover;
  opacity: 0.7;

    clip-path: polygon(
      0 100vh,
      0 39vh,
      5% 38vh,
      10% 36vh,
      12% 34vh,
      15% 33vh,
      17% 32vh,
      19% 32vh,
      20% 32vh,
      22% 32.5vh,
      30% 33vh,
      36% 33vh,
      40% 34vh,
      41% 34.5vh,
      44% 34vh,
      45% 33.5vh,
      /* 47% 35vh, */
      48% 34vh,
      50% 32vh,
      55% 30vh,
      68% 28vh,
      80% 31vh,
      90% 35vh,
      92% 32vh,
      100% 27vh,
      100% 100vh
    );
}

/* Untuk responsif - memastikan konten tetap terlihat */
@media (max-width: 600px) {
  .invitation-container {
    padding: 1rem;
  }
  .invitation-container::after { 
    clip-path: polygon(
      0 100vh,
      0 39vh,
      5% 38vh,
      10% 36vh,
      12% 34vh,
      15% 33vh,
      17% 32vh,
      19% 32vh,
      20% 32vh,
      22% 32.5vh,
      30% 33vh,
      36% 33vh,
      40% 34vh,
      41% 34.5vh,
      44% 34vh,
      45% 33.5vh,
      /* 47% 35vh, */
      48% 34vh,
      50% 32vh,
      55% 30vh,
      68% 28vh,
      80% 31vh,
      90% 35vh,
      92% 32vh,
      100% 27vh,
      100% 100vh
    );
  }
    .invitation-container::before {
    background:
      var(--bird1) no-repeat 10% 60px,
      var(--bird1) no-repeat 70% 200px,
      var(--bird1) no-repeat 3rem 20rem,
      linear-gradient(to bottom, #fff5f7, #fbe4d8, #e0a899);
    background-size: 100px auto, 200px auto, 300px auto, cover;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
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

.cloud {
  position: absolute;
  background-image: url('https://cdn-icons-png.flaticon.com/512/414/414927.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3;
  width: 100px;
  height: 60px;
  animation: moveCloud 60s linear infinite;
}

.cloud-1 {
  top: 0;
  left: -120px;
  animation-delay: 0s;
}

.cloud-2 {
  top: 40px;
  left: -200px;
  animation-delay: 10s;
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
  background-color: #5a3e36;
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