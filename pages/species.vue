<script setup>
import Header from '~/components/Header.vue'
import heroSpeciesImg from '~/assets/image/hamster-species.png'
import syrianImg       from '~/assets/image/syrsky.png'
import djungarianImg   from '~/assets/image/dzungarsky.png'
import chineseImg      from '~/assets/image/cinsky.png'

const speciesList = [
  {
    image: syrianImg,
    title: 'Syrský škrečok',
    text:  'Najobľúbenejší veľký druh so sýtejšou srsťou a priateľskou povahou.',
  },
  {
    image: djungarianImg,
    title: 'Džungársky škrečok',
    text:  'Menší druh s hladkou srsťou a aktívnym temperamentom, vhodný do menších priestorov.',
  },
  {
    image: chineseImg,
    title: 'Čínsky škrečok',
    text:  'Drobnejší typ s typickým dlhším telom a elegantným správaním.',
  },
]
</script>

<template>
  <div>
    <Header />
    <section class="diet-hero">
      <div class="hero-content">
        <h1>Druhy škrečkov</h1>
        <p>Prehľad troch najrozšírenejších plemien vám pomôže vybrať toho pravého kamaráta.</p>
      </div>
      <div class="hero-image">
        <img :src="heroSpeciesImg" alt="Rôzne druhy škrečkov" />
      </div>
    </section>
    <section id="species-list" class="toy-types">
      <h2>Druhy škrečkov</h2>
      <div class="toy-grid">
        <div v-for="sp in speciesList" :key="sp.title" class="toy-card">
          <h3>{{ sp.title }}</h3>
          <p>{{ sp.text }}</p>
          <img :src="sp.image" :alt="sp.title" class="toy-image" />
        </div>
      </div>
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

* {
  box-sizing: border-box;
  transition: var(--transition);
}
body {
  margin: 0;
  font-family: var(--font-sans);
  color: var(--color-text);
}

.diet-hero {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
}
.hero-content {
  flex: 1 1 300px;
  max-width: 500px;
  color: white;
}
.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: .5rem;
}
.hero-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: .9;
}
.hero-content button {
  background: white;
  color: var(--color-secondary);
  padding: .75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .2s ease;
}
.hero-content button:hover {
  transform: translateY(-2px);
}
.hero-image {
  flex: 0 0 200px;
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.hero-image img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.toy-types {
  padding: 3rem 1rem;
}
.toy-types h2 {
  text-align: center;
  color: var(--color-primary);
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
.toy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.5rem;
}
.toy-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toy-card h3 {
  color: var(--color-secondary);
  margin-bottom: .5rem;
}
.toy-card p {
  flex: 1;
  font-size: .95rem;
  margin-bottom: 1rem;
}
.toy-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--color-accent);
}
@media (max-width: 768px) {
  .diet-hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
  }
  .hero-image {
    margin: 1rem auto;
  }
}
</style>
