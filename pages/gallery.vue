<script setup>
// Vue & components
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'


// Pick one for the hero circle:
import heroImg from '~/assets/image/hamster-fun.png'

// Eagerly import all .png under assets/image
const modules = import.meta.glob('~/assets/image/*.png', { eager: true })
// Sort by filename, then map to the URL
const images = Object
    .entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default)

// Smooth scroll into gallery
const gallerySection = ref(null)
function scrollToGallery() {
  gallerySection.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <Header />

    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-content">
        <h1>Galéria škrečkov</h1>
        <p>Pozrite si zopár roztomilých momentov našich chlpáčov v ich najlepšom svetle.</p>
      </div>
      <div class="hero-image">
        <img :src="heroImg" alt="Škrečok v galérii" />
      </div>
    </section>

    <!-- Gallery grid -->
    <section class="gallery-grid" ref="gallerySection">
      <div v-for="(url, i) in images" :key="i" class="gallery-item">
        <img :src="url" :alt="`Obrázok ${i + 1}`" />
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

/* Reset & base */
* { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-sans); color: var(--color-text); }

/* Hero */
.page-hero {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
}
.page-hero .hero-content {
  flex: 1 1 300px;
  max-width: 500px;
  color: white;
}
.page-hero h1 {
  font-size: 2.5rem;
  margin-bottom: .5rem;
}
.page-hero p {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: .9;
}
.page-hero button {
  background: white;
  color: var(--color-secondary);
  padding: .75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .2s ease;
}
.page-hero button:hover {
  transform: translateY(-2px);
}
.page-hero .hero-image {
  flex: 0 0 200px;
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

/* Gallery grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 1rem;
  padding: 2rem 1rem;
}
.gallery-item {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform var(--transition), box-shadow var(--transition);
}
.gallery-item:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Responsive */
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
