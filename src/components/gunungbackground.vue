<template>
  <div class="mountain-wrapper">
    <div class="mountain mountain-1"></div>
    <div class="mountain mountain-2"></div>
  </div>
</template>

<script setup>
// Tidak perlu script khusus karena ini hanya styling latar belakang
</script>

<style>
/* Latar belakang keseluruhan halaman */
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #ffffff 0%, #e0c4aa 50%, #d2691e 100%);
  background-attachment: fixed;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Bungkus semua gunung */
.mountain-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: -1;
  pointer-events: none;
}

/* Gunung besar belakang */
.mountain-1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: #d2691e;
  clip-path: polygon(
    0% 100%,
    15% 60%,
    30% 90%,
    50% 50%,
    70% 85%,
    85% 60%,
    100% 100%
  );
  animation: mountainFade 1.5s ease-out;
}

/* Gunung depan, sedikit lebih gelap */
.mountain-2 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: #a0522d;
  clip-path: polygon(
    0% 100%,
    20% 70%,
    35% 90%,
    55% 55%,
    75% 80%,
    90% 65%,
    100% 100%
  );
  animation: mountainFade 2s ease-out;
}

/* Efek muncul */
@keyframes mountainFade {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
