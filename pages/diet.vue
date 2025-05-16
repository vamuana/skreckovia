<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '~/components/Header.vue'


// static imports
import dietImg from '~/assets/image/hamster-diet.png'

const dietSection = ref(null)
function scrollToContent() {
  dietSection.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.scrollTo(0,0))
</script>

<template>
  <div>
    <Header />

    <!-- Hero (shared style) -->
    <section class="page-hero">
      <div class="hero-content">
        <h1>Strava škrečkov</h1>
        <p>Vyvážená a pestrá strava pre zdravie a šťastie vášho malého miláčika.</p>

      </div>
      <div class="hero-image">
        <img :src="dietImg" alt="Škrečok s miskou krmiva" />
      </div>
    </section>

    <!-- Diet Details -->
    <section class="diet-details" ref="dietSection">
      <div class="column recommended">
        <h2>Odporúčané potraviny</h2>
        <ul>
          <li>Zmiešané kvalitné granulované krmivo pre škrečky</li>
          <li>Čerstvá zelenina: mrkva, uhorka, paprika</li>
          <li>Čerstvé ovocie (max. 1× týždenne): jablko, hruška</li>
          <li>Semienka a orechy (ako doplnok, malé množstvá)</li>
          <li>Vitamínové doplnky podľa vet. odporúčania</li>
        </ul>
      </div>
      <div class="column avoid">
        <h2>Potraviny na obmedzenie</h2>
        <ul>
          <li>Cukor a sladkosti</li>
          <li>Soľ a slané snacky</li>
          <li>Orechy a semienka v nadmernom množstve</li>
          <li>Syrové a mliečne výrobky</li>
          <li>Mäso a ryby</li>
        </ul>
      </div>
    </section>

    <!-- Feeding Tips -->
    <section class="feeding-tips">
      <h2>Tipy pre kŕmenie</h2>
      <ul>
        <li>Podávajte jedlo 1–2× denne ráno a večer.</li>
        <li>Odstraňujte zvyšky a staré krmivo denne.</li>
        <li>Zabezpečte prístup k čerstvej vode nonstop.</li>
        <li>Sledujte príjem potravy a váhu zvieraťa.</li>
      </ul>
    </section>


  </div>
</template>

<style scoped>
:root {
  --color-primary: #a8d5e2;
  --color-secondary: #f1c0e8;
  --color-accent: #c3f584;
  --color-text: #333;
  --font-sans: 'Montserrat', sans-serif;
  --transition: 0.3s ease-in-out;
}

* { box-sizing: border-box; }
body { margin:0; font-family: var(--font-sans); color: var(--color-text); }

/* —————————————————————————————
   Shared Hero Styles (from Toys)
   ————————————————————————————— */
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

/* —————————————————————————————
   Diet Details
   ————————————————————————————— */
.diet-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 2rem;
  padding: 2rem 1rem;
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
  color: var(--color-primary);
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

/* —————————————————————————————
   Feeding Tips
   ————————————————————————————— */
.feeding-tips {
  background: var(--color-primary);
  color: #fff;
  padding: 2rem 1rem;
  border-radius: 12px;
  margin: 2rem 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.feeding-tips h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.feeding-tips ul {
  list-style: none;
  padding: 0;
}
.feeding-tips li {
  margin-bottom: .75rem;
  display: flex;
  align-items: center;
}
.feeding-tips li::before {
  content: '🔹';
  margin-right: .5rem;
}

/* —————————————————————————————
   Responsive
   ————————————————————————————— */
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
