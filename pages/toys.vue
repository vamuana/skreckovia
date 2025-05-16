<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '~/components/Header.vue'


// static imports for bundling
import toyWheel   from '~/assets/image/gallery1.png'
import toyTunnel  from '~/assets/image/tunnel.png'
import toyChew    from '~/assets/image/hamster-toy.png'
import toyPuzzle  from '~/assets/image/puzzle.png'
import heroToyImg from '~/assets/image/hamster-toy.png' // pick an appropriate hero image

const router = useRouter()
const scrollToTypes = () => {
  const el = document.getElementById('toy-types')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const toyTypes = [
  {
    image: toyWheel,
    title: 'Bežecké koleso',
    text: 'Základná hračká na dennú aktivitu a kardio.',
  },
  {
    image: toyTunnel,
    title: 'Tunely a skrýše',
    text: 'Poskytujú škrečkovi priestor na prieskum a odpočinok.',
  },
  {
    image: toyChew,
    title: 'Žuvacie hračky',
    text: 'Pomáhajú ošetrovať zuby a poskytujú zábavu.',
  },
  {
    image: toyPuzzle,
    title: 'Puzzle kŕmidlá',
    text: 'Stimulujú myslenie a spomaľujú konzumáciu potravy.',
  },
]

onMounted(() => window.scrollTo(0,0))
</script>

<template>
  <div>
    <Header />

    <!-- Hero for Toys -->
    <section class="hero-toys">
      <div class="hero-content">
        <h1>Hračky pre škrečky</h1>
        <p>Zábavné a bezpečné hračky na obohatenie každodenných aktivít vášho škrečka.</p>

      </div>
      <div class="hero-image">
        <img :src="heroToyImg" alt="Škrečok so hračkou" />
      </div>
    </section>

    <!-- Types of Toys -->
    <section id="toy-types" class="toy-types">
      <h2>Druhy hračiek</h2>
      <div class="toy-grid">
        <div v-for="toy in toyTypes" :key="toy.title" class="toy-card">
          <h3>{{ toy.title }}</h3>
          <p>{{ toy.text }}</p>
          <img :src="toy.image" :alt="toy.title" class="toy-image" />
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
}

* { box-sizing: border-box; }
body { margin:0; font-family: var(--font-sans); color: var(--color-text); }

/* Hero */
.hero-toys {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));

  position: relative;
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
  font-size: 1rem;
  transition: transform .2s ease;
}
.hero-content button:hover {
  transform: translateY(-2px);
}

.hero-image {
  flex: 0 0 200px;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
}
.hero-image img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Types Grid */
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

/* Responsive */
@media (max-width: 768px) {
  .hero-toys { flex-direction: column; text-align: center; }
  .hero-image { margin: 1rem 0; }
}
</style>
