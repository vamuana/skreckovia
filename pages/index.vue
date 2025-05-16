<template>
  <div>
    <Header />

    <!-- Hero / Top -->
    <section class="hero">
      <img :src="logo" alt="Logo" class="hero-logo" />
      <h1 class="hero-title">Svet škrečkov</h1>
      <p class="hero-subtitle">Všetko, čo potrebujete vedieť o domácom miláčikovi</p>
    </section>

    <!-- Quick-links grid -->
    <section class="quick-links">
      <div
          class="link-card"
          v-for="item in quickLinks"
          :key="item.title"
          @click="goTo(item.link)"
      >
        <span class="icon">{{ item.icon }}</span>
        <h4>{{ item.title }}</h4>
        <p>{{ item.text }}</p>
      </div>
    </section>

    <!-- News / Tipy -->
    <section class="news-section">
      <h2>Novinky a tipy</h2>
      <div class="news-cards">
        <div class="news-card" v-for="tip in tips" :key="tip.title">
          <div class="image-wrapper">
            <img :src="tip.image" alt="" />
          </div>
          <div class="news-content">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pastel-green features -->
    <section class="features">
      <div class="feature" v-for="f in features" :key="f">
        <span class="check">✔︎</span>
        <p>{{ f }}</p>
      </div>
    </section>

    <!-- Info cards -->
    <section class="info-cards">
      <div class="card" v-for="card in cards" :key="card.title">
        <div class="card-bg" :style="{ backgroundImage: `url(${card.image})` }"></div>
        <div class="card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <button @click="goTo(card.link)">{{ card.button }}</button>
        </div>
      </div>
    </section>

    <!-- Cultural insight -->
    <section class="cultural">
      <div class="culture-img">
        <img :src="funImg" alt="Zábavný škrečok" />
        <div class="bubble-text">
          <h2>Zaujímavosti o škrečkoch</h2>
          <p>
            Vedeli ste, že syrský škrečok dokáže uložiť až 20 % svojej
            hmotnosti v lícnych vreckách? Sú to praví majstri
            skladovania potravy!
          </p>
        </div>
      </div>
    </section>
    <!-- Gallery carousel -->
    <section class="gallery">
      <h2>Galéria škrečkov</h2>
      <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="3"
          :space-between="20"
          navigation
          pagination
          loop
          class="my-swiper"
      >
        <SwiperSlide v-for="(img, i) in gallery" :key="i">
          <img :src="img" alt="Galeria" />
        </SwiperSlide>
      </Swiper>
    </section>




  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

// static imports so Vite bundles correctly
import logo from '~/assets/image/logo.png'
import tip1 from '~/assets/image/tip1.png'
import tip2 from '~/assets/image/tip2.png'
import tip3 from '~/assets/image/tip3.png'
import funImg from '~/assets/image/hamster-fun.png'
import careImg from '~/assets/image/hamster-care.png'
import speciesImg from '~/assets/image/hamster-species.png'
import dietImg from '~/assets/image/hamster-diet.png'
import gallery1 from '~/assets/image/gallery1.png'
import gallery2 from '~/assets/image/gallery2.png'
import gallery3 from '~/assets/image/gallery3.png'
import gallery4 from '~/assets/image/gallery4.png'

const router = useRouter()
const goTo = (path) => router.push(path)

const quickLinks = [
  { icon: '🏡', title: 'Domov', text: 'Základná starostlivosť', link: '/' },
  { icon: '🥕', title: 'Strava', text: 'Čo kŕmiť škrečka', link: '/diet' },
  { icon: '🧸', title: 'Hračky', text: 'Tipy na zábavu', link: '/toys' },
  { icon: '⚕️', title: 'Zdravie', text: 'Prevencia a starostlivosť', link: '/health' },
]

const tips = [
  {
    image: tip1,
    title: 'Ako pripraviť klietku',
    excerpt:
        'Postavte malé domčeky, rozložte podstielku v hrubke 3–5 cm a pridajte hračky na škrabotanie.',
  },
  {
    image: tip2,
    title: 'Najlepšia strava',
    excerpt:
        'Ponúkajte kvalitné zmiešané krmivo, čerstvú zeleninu (mrkva, uhorka) a príležitostne ovocie.',
  },
  {
    image: tip3,
    title: 'Bezpečné prostredie',
    excerpt:
        'Umiestnite klietku mimo prievanu, izbovej teploty 20–24 °C, a zabráňte priamemu slnku.',
  },
]

const features = [
  'Každodenná kontrola váhy',
  'Čerstvá voda vždy k dispozícii',
  'Pravidelné čistenie klietky',
]

const cards = [
  {
    title: 'Starostlivosť',
    text: 'Návod na hygienu, výmenu podstielky a sledovanie zdravotného stavu.',
    button: 'Čítať',
    image: careImg,
    link: '/care',
  },
  {
    title: 'Druhy',
    text: 'Prehľad najpopulárnejších škrečkov: syrský, džungársky, čínsky.',
    button: 'Pozrieť',
    image: speciesImg,
    link: '/species',
  },
  {
    title: 'Strava',
    text: 'Podrobné odporúčania na krmivo, vitamíny a pamlsky.',
    button: 'Zistiť',
    image: dietImg,
    link: '/diet',
  },
]

const gallery = [gallery1, gallery2, gallery3, gallery4]

const bubbles = [
  { title: 'Chovatelia.sk', url: 'https://chovatelia.sk' },
  { title: 'HamsterCare', url: 'https://hamstercare.example' },
  { title: 'Vet.sk', url: 'https://vet.sk' },
  { title: 'HamsterShop', url: 'https://hamstershop.example' },
]
</script>

<style>
:root {
  --color-bg: #f6f5f3;
  --color-primary: #a8d5e2;    /* pastel blue */
  --color-secondary: #f1c0e8;  /* pastel pink */
  --color-accent: #c3f584;     /* pastel green */
  --color-text: #333;
  --font-sans: 'Montserrat', sans-serif;
  --transition: 0.3s ease-in-out;
}
/* replace your existing .culture-img rules with: */
/* replace your existing .culture-img rules with: */
.culture-img {
  position: relative;
  max-height: 100vh;   /* only ever up to 450px tall */
  overflow: hidden;    /* crop anything below that */
  border-radius: 16px;
}

.culture-img img {
  display: block;
  width: 100%;        /* fill the container’s width */
  height: auto;       /* height auto so aspect ratio is maintained */
  object-fit: cover;  /* crop bottom if too tall */
}




.bubble-text {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(241, 192, 232, 0.9); /* pastel-pink bubble */
  padding: 1rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #333;
}

.bubble-text h2 {
  margin: 0;
  font-size: 1.75rem;
  color: whitesmoke;
}

.bubble-text p {
  margin: 0.5rem 0 1rem;
  font-size: 1rem;
  line-height: 1.4;
}

.bubble-text button {
  background: var(--color-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
}

.bubble-text button:hover {
  background: #91c5d3;
}

@media (max-width: 600px) {
  .bubble-text {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    padding: 0.75rem 1rem;
  }
  .bubble-text h2 {
    font-size: 1.5rem;
  }
  .bubble-text p {
    font-size: 0.2rem;
  }
}
* {
  box-sizing: border-box;
  transition: var(--transition);
}
body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
}

/* — Hero — */
.hero {
  text-align: center;
  padding: 5rem 1rem;
  background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-secondary)
  );
  color: #fff;
}
.hero-logo {
  height: 12vh;
  margin-bottom: 1rem;
}
.hero-title {
  font-size: 3rem;
}
.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* — Quick-links — */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2.5rem 1rem;
}
.link-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
}
.link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.link-card .icon {
  font-size: 2.5rem;
  color: var(--color-secondary);
}
.link-card h4 {
  margin: 0.75rem 0 0.5rem;
  color: var(--color-primary);
}
.link-card p {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* — News / Tipy — */
.news-section {
  padding: 3rem 1rem;
  background: #fff;
  border-radius: 12px;
  margin: 2rem 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
.news-section h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.news-card {
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.news-card:hover {
  border-color: var(--color-accent);
  transform: scale(1.03);
}
.image-wrapper {
  overflow: hidden;
  height: 160px;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-content {
  padding: 0.75rem 1rem 1rem;
}
.news-content h3 {
  margin: 0 0 0.5rem;
  color: var(--color-primary);
}
.news-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text);
}

/* — Features — */
.features {
  background: var(--color-accent);
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  color: darkslategrey;
  border-radius: 8px;
  margin: 2rem 1rem;
}
.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.check {
  font-size: 1.2rem;
  color: var(--color-primary);
}

/* — Info cards — */
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 2rem 1rem;
}
.card {
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}
.card-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}
.card-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}
.card-content {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #fff;
}
.card-content h3 {
  margin: 0 0 0.25rem;
  font-size: 1.4rem;
}
.card-content p {
  font-size: 0.95rem;
  margin: 0 0 0.75rem;
}
.card-content button {
  background: var(--color-secondary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

/* — Cultural — */
.cultural {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 2rem;
}
.culture-text {
  flex: 1;
  min-width: 280px;
}
.culture-text h2 {
  margin: 0 0 0.5rem;
  color: var(--color-primary);
}
.culture-text p {
  margin: 0 0 1rem;
}
.culture-text button {
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.culture-img img {
  width: 100%;
  border-radius: 16px;
}

/* — Gallery — */
.gallery {
  padding: 2rem 1rem;
}
.gallery h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.my-swiper img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
}

/* — Bubbles — */
.links-bubbles {
  padding: 2rem 1rem;
}
.links-bubbles h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.bubbles {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.bubble {
  background: var(--color-secondary);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}
.bubble:hover {
  transform: scale(1.05);
}

/* — Contact — */
.contact {
  padding: 2rem 1rem;
}
.contact h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.contact-form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input,
.contact-form textarea {
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
}
.contact-form button {
  align-self: flex-end;
  padding: 0.5rem 1.5rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .info-cards {
    grid-template-columns: 1fr;
  }
  .cultural {
    flex-direction: column;
  }
}
</style>
