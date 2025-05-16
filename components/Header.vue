<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '~/assets/image/logo.png'

const router = useRouter()
const menuOpen = ref(false)

function goTo(path) {
  menuOpen.value = false
  router.push(path)
}
</script>

<template>
  <header class="hamster-header">
    <div class="hamster-header__inner">
      <!-- Logo + Site Title -->
      <div class="hamster-header__brand" @click="goTo('/')">
        <img :src="logo" alt="Svet škrečkov" class="hamster-logo" />
        <span class="hamster-title">Svet škrečkov</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hamster-nav">
        <ul>
          <li><a @click.prevent="goTo('/')" href="#">Domov</a></li>
          <li><a @click.prevent="goTo('/diet')" href="#">Strava</a></li>
          <li><a @click.prevent="goTo('/toys')" href="#">Hračky</a></li>
          <li><a @click.prevent="goTo('/health')" href="#">Zdravie</a></li>
          <li><a @click.prevent="goTo('/news')" href="#">Novinky</a></li>
          <li><a @click.prevent="goTo('/gallery')" href="#">Galéria</a></li>
        </ul>
      </nav>

      <!-- Mobile Hamburger -->
      <button class="hamster-menu-btn" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav v-if="menuOpen" class="hamster-nav--mobile">
      <ul>
        <li><a @click.prevent="goTo('/')" href="#">Domov</a></li>
        <li><a @click.prevent="goTo('/diet')" href="#">Strava</a></li>
        <li><a @click.prevent="goTo('/toys')" href="#">Hračky</a></li>
        <li><a @click.prevent="goTo('/health')" href="#">Zdravie</a></li>
        <li><a @click.prevent="goTo('/news')" href="#">Novinky</a></li>
        <li><a @click.prevent="goTo('/gallery')" href="#">Galéria</a></li>
        <li><a @click.prevent="goTo('#contact')" href="#">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
:root {
  --c-primary: #a8d5e2;
  --c-secondary: #f1c0e8;
  --c-bg: rgba(255,255,255,0.75);
  --c-text: #333;
  --font-sans: 'Montserrat', sans-serif;
  --transition: 0.3s ease;
}

.hamster-header {
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background: var(--c-bg);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}
.hamster-header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-sans);
}

/* Brand */
.hamster-header__brand {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.hamster-logo {
  height: 36px;
  margin-right: 0.5rem;
}
.hamster-title {
  font-size: 1.4rem;
  color: var(--c-text);
  font-weight: 600;
}

/* Desktop nav */
.hamster-nav ul {
  display: flex;
  gap: 1.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hamster-nav a {
  text-decoration: none;
  color: var(--c-text);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: background var(--transition), color var(--transition);
}
.hamster-nav a:hover {
  background: var(--c-primary);
  color: #fff;
}

/* Hamburger */
.hamster-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.hamster-menu-btn span {
  display: block;
  width: 24px;
  height: 3px;
  background: var(--c-text);
  transition: transform var(--transition), opacity var(--transition);
}
.hamster-menu-btn span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamster-menu-btn span.open:nth-child(2) {
  opacity: 0;
}
.hamster-menu-btn span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.hamster-nav--mobile {
  background: var(--c-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.hamster-nav--mobile ul {
  list-style: none;
  margin: 0;
  padding: 0.75rem 1rem;
}
.hamster-nav--mobile li + li {
  margin-top: 0.5rem;
}
.hamster-nav--mobile a {
  text-decoration: none;
  color: var(--c-text);
  display: block;
  padding: 0.6rem;
  border-radius: 6px;
  transition: background var(--transition);
}
.hamster-nav--mobile a:hover {
  background: var(--c-secondary);
  color: #fff;
}

/* Responsive */
@media (max-width: 768px) {
  .hamster-nav { display: none; }
  .hamster-menu-btn { display: flex; }
}
</style>
