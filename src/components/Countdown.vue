<template>
  <div class="countdown"
  :style="{
                '--boxatas-countdown': `url(${boxatas})`,
                '--boxbawah-countdown': `url(${boxbawah})`,
                '--boxgarisatas-countdown': `url(${boxgaris})`,
                '--boxgarisbawah-countdown': `url(${boxgaris})`,
                }">

          <div class="atas-countdown"></div>
          <div class="garisatas-countdown"></div>
          <div class="garisbawah-countdown" :class="{ turun: showRekening }"></div>
          <div class="bawah-countdown" :class="{ turun: showRekening }"></div>
        <h3 class="judulku">Acara Pernikahan Akan Dimulai</h3>
        <p v-if="timeLeft > 0" class="countdown-modern">
        <span class="days">{{ days }} Hari</span>
        <span class="time">
            {{ hours.toString().padStart(2, '0') }}:
            {{ minutes.toString().padStart(2, '0') }}:
            {{ seconds.toString().padStart(2, '0') }}
        </span>
        </p>
        <p v-else class="finished">
        Waktunya sudah tiba! 🎉
        </p>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import boxatas from '../assets/box-atas.png'
  import boxbawah from '../assets/box-bawah.png'
  import boxgaris from '../assets/box-garis.png'
  
  const props = defineProps({
    eventDate: {
      type: [String, Date],
      required: true
    }
  })
  
  const timeLeft = ref(0)
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  
  
  let timer = null
  
  function notifyUser() {
    if (!("Notification" in window)) {
      alert("Browser tidak mendukung notifikasi")
    } else if (Notification.permission === "granted") {
      new Notification("🎉 Acara Pernikahan dimulai sekarang!")
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("🎉 Acara Pernikahan dimulai sekarang!")
        } else {
          alert("🎉 Acara Pernikahan dimulai sekarang!")
        }
      })
    } else {
      alert("🎉 Acara Pernikahan dimulai sekarang!")
    }
  }
  
  function updateCountdown() {
    const now = new Date()
    const target = new Date(props.eventDate)
  
    const diff = target - now
  
    if (diff <= 0) {
      timeLeft.value = 0
      clearInterval(timer)
      notifyUser()
    } else {
      timeLeft.value = diff
      days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
      hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
      minutes.value = Math.floor((diff / (1000 * 60)) % 60)
      seconds.value = Math.floor((diff / 1000) % 60)
    }
  }
  
  onMounted(() => {
    updateCountdown()
    timer = setInterval(updateCountdown, 1000)
  })
  
  onUnmounted(() => {
    clearInterval(timer)
  })
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  .countdown {
  padding-bottom: 2rem;
  margin: 5rem auto 2rem auto; /* Tengah horizontal + jarak atas bawah */
  max-width: 500px;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .atas-countdown {
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxatas-countdown);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis atas */
.garisatas-countdown {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisatas-countdown);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Garis bawah */
.garisbawah-countdown {
  position: absolute;
  top: 18.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxgarisbawah-countdown);
  background-repeat: no-repeat;
  background-size: contain;
}

/* Elemen bawah */
.bawah-countdown {
  position: absolute;
  top: 19.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20rem;
  z-index: 1;
  background-image: var(--boxbawah-countdown);
  background-repeat: no-repeat;
  background-size: contain;
}
  
  
  /* Countdown modern */
  .countdown p.countdown-modern {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-weight: 600;
    color: #ffffff;
    position: relative;
    z-index: 1;
    animation: fadeInPop 0.6s ease;
  }
  
  .countdown p.countdown-modern .days {
    font-size: 2rem;
    color: #D5B253;
    font-family: "Lora", serif;
    font-weight: bold;
  }
  
  .countdown p.countdown-modern .time {
    font-size: 2.5rem;
    font-family: "Lora", serif;
    background-color: #D5B253;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 7px 7px 25px rgba(0, 0, 0, 0.219);
  }

  .judulku{
    font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #DAD3C8;
  }
  
  .countdown h2{
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }

  /* Saat countdown selesai */
  .countdown p.finished {
    font-size: 1.4rem;
    color: #1c3b2c;
    font-weight: bold;
    animation: fadeInPop 0.6s ease;
  }
  
  /* Animasi */
  @keyframes fadeInPop {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (max-width: 600px) {
    .countdown {
      padding: 1.5rem;
    }
  
    .countdown h2 {
      font-size: 1.5rem;
    }
  
    .countdown p.countdown-modern .days {
      font-size: 1.5rem;
    }
  
    .countdown p.countdown-modern .time {
      font-size: 2rem;
    }
  }
  </style>
  

  