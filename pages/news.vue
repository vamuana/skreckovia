<script setup>
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'


// hero illustration (you can swap this for any suitable image)
import heroNewsImg from '~/assets/image/gallery2.png'

// the three news/tip cards
import tip1 from '~/assets/image/tip1.png'
import tip2 from '~/assets/image/tip2.png'
import tip3 from '~/assets/image/tip3.png'

const newsSection = ref(null)
function scrollToNews() {
  newsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const tips = [
  {
    image: tip1,
    title: 'Ako pripraviť klietku',
    excerpt: 'Postavte malé domčeky, rozložte podstielku v hrúbke 3–5 cm a pridajte hračky na škrabotanie.',
  },
  {
    image: tip2,
    title: 'Najlepšia strava',
    excerpt: 'Ponúkajte kvalitné granule, čerstvú zeleninu a občasné ovocie – pre zdravie aj chuťové poháriky.',
  },
  {
    image: tip3,
    title: 'Bezpečné prostredie',
    excerpt: 'Umiestnite klietku mimo prievanu, pri teplote 20–24 °C a mimo priameho slnka.',
  },
]

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <Header/>

    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-content">
        <h1>Novinky a tipy</h1>
        <p>Najnovšie rady a články, ktoré vám pomôžu poskytnúť vašemu škrečkovi tú najlepšiu starostlivosť.</p>
      </div>
      <div class="hero-image">
        <img :src="heroNewsImg" alt="Škrečok s tipmi"/>
      </div>
    </section>

    <!-- News Cards -->
    <section class="news-cards" ref="newsSection">
      <div class="news-grid">
        <div v-for="tip in tips" :key="tip.title" class="news-card">
          <div class="image-wrapper">
            <img :src="tip.image" :alt="tip.title"/>
          </div>
          <div class="news-content">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.excerpt }}</p>
          </div>
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
* { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-sans); color: var(--color-text); }

/* — Hero (same as diet & toys) — */
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

/* — News Cards Grid — */
.news-cards {
  padding: 3rem 1rem;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.5rem;
}
.news-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease;
}
.news-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.image-wrapper {
  height: 160px;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-content {
  padding: 1rem;
}
.news-content h3 {
  margin: 0 0 .5rem;
  color: var(--color-primary);
  font-size: 1.2rem;
}
.news-content p {
  margin: 0;
  font-size: .95rem;
  color: var(--color-text);
}

/* — Responsive — */
@media (max-width: 768px) {
  .page-hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
  }
  .page-hero .hero-image {
    margin: 1rem 0;
  }
}
</style>
