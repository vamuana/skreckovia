<script setup>
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'

import healthImg from '~/assets/image/hamster-care.png'

const healthSection = ref(null)
function scrollToDetails() {
  healthSection.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <Header />

    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-content">
        <h1>Zdravie škrečkov</h1>
        <p>Prevencia a starostlivosť – udržiavajte svojho malého miláčika v špičkovom zdraví.</p>

      </div>
      <div class="hero-image">
        <img :src="healthImg" alt="Škrečok pri prehliadke" />
      </div>
    </section>

    <!-- Preventive vs. Warning Signs -->
    <section class="diet-details" ref="healthSection">
      <div class="column recommended">
        <h2>Preventívne opatrenia</h2>
        <ul>
          <li>Každodenná kontrola váhy</li>
          <li>Čerstvá voda a čistá podstielka</li>
          <li>Veterinárna prehliadka raz za pol roka</li>
          <li>Stála teplota 18–24 °C bez prievanov</li>
          <li>Dostatok pohybu a žuvacích hračiek</li>
        </ul>
      </div>
      <div class="column avoid">
        <h2>Známky choroby</h2>
        <ul>
          <li>Neobvyklý pokles hmotnosti</li>
          <li>Ospalosť, letargia</li>
          <li>Znížená chuť do jedla</li>
          <li>Problémy s dýchaním</li>
          <li>Zmeny v správaní alebo výkaloch</li>
        </ul>
      </div>
    </section>

    <!-- Health Tips -->
    <section class="feeding-tips">
      <h2>Tipy pre zdravie</h2>
      <ul>
        <li>Udržiavajte klietku vždy suchú a čistú.</li>
        <li>Ponúknite vitamínové doplnky podľa veter. odporúčaní.</li>
        <li>Zabezpečte každodennú fyzickú a mentálnu stimuláciu.</li>
        <li>Pravidelne kontrolujte zuby, labky a srsť.</li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
/* Shared root vars */
:root {
  --color-primary: #a8d5e2;
  --color-secondary: #f1c0e8;
  --color-accent: #c3f584;
  --color-text: #333;
  --font-sans: 'Montserrat', sans-serif;
  --transition: 0.3s ease-in-out;
}
* { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-sans); color: var(--color-text); }

/* — Hero (same as in toys.vue & diet.vue) — */
.page-hero {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));

  position: relative;
}
.page-hero .hero-content {
  flex: 1 1 300px;
  max-width: 500px;
  color: white;
}
.page-hero .hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: .5rem;
}
.page-hero .hero-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: .9;
}
.page-hero .hero-content button {
  background: white;
  color: var(--color-secondary);
  padding: .75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform .2s ease;
}
.page-hero .hero-content button:hover {
  transform: translateY(-2px);
}
.page-hero .hero-image {
  flex: 0 0 200px;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
}
.page-hero .hero-image img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* — Preventive / Warning section (reuses diet-details styling) — */
.diet-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 2rem;
  padding: 2rem 1rem;
  margin-top: 1rem;
}
.column {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.column h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.column ul {
  list-style: none;
  padding: 0;
}
.column.recommended li::before {
  content: '✔︎';
  color: var(--color-accent);
  margin-right: .5rem;
}
.column.avoid li::before {
  content: '✘';
  color: #333;
  margin-right: .5rem;
}
.column li {
  margin-bottom: .75rem;
  display: flex;
  align-items: center;
}

/* — Health Tips call-out (reuses feeding-tips) — */
.feeding-tips {
  background: var(--color-accent);
  color: #333;
  padding: 2rem 1rem;
  border-radius: 12px;
  margin: 2rem 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.feeding-tips h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}
.feeding-tips ul {
  list-style: none;
  padding: 0;
}
.feeding-tips li {
  margin-bottom: .75rem;
  display: flex;
  align-items: center;
  color: #fff;
}
.feeding-tips li::before {
  content: '💡';
  margin-right: .5rem;
}

/* — Responsive tweaks — */
@media (max-width: 768px) {
  .page-hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
  }
  .page-hero .hero-image {
    margin: 1rem 0;
  }
  .diet-details {
    grid-template-columns: 1fr;
  }
}
</style>
