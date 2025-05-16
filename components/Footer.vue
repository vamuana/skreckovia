<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';

import { onMounted, onUnmounted, reactive, ref } from 'vue';
import axios from 'axios';

// Reactive state for translations
const translations = reactive({});
const locale = ref('en'); // Default locale
const API_BASE_URL = ' https://adminbackendpalestineembassy.netlify.app/api/translations';
let intervalId;

// Fetch translations dynamically
const fetchTranslations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${locale.value}`);
    Object.assign(translations, response.data);
  } catch (error) {
    console.error("Error fetching translations:", error);
  }
};

// Ensure localStorage is accessible
const getStoredLocale = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("locale") || "en";
  }
  return "en"; // Fallback
};

// Watch for locale changes across the app
const startLocaleWatcher = () => {
  intervalId = setInterval(() => {
    const storedLocale = getStoredLocale();
    if (storedLocale && storedLocale !== locale.value) {
      locale.value = storedLocale;
      fetchTranslations();
    }
  }, 500);
};

// Cleanup interval when unmounted
const stopLocaleWatcher = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

// Initialize on component mount
onMounted(() => {
  locale.value = getStoredLocale();
  fetchTranslations();
  startLocaleWatcher();
});

// Cleanup on unmount
onUnmounted(() => {
  stopLocaleWatcher();
});
</script>
<template>
  <footer class="custom-footer" id="sec-fe74">
    <div class="footer-content">
      <!-- Logo Section -->
      <div class="footer-section logo-section">
        <img class="footer-logo" src="/assets/images/logo.png" alt="Embassy Logo" data-image-width="126" data-image-height="171">
      </div>

      <!-- Contact Details Section -->
      <div class="footer-section contact-details">
        <h5 class="footer-heading">{{ translations['footer-ContactDetails'] }}</h5>
        <p class="footer-text">
          Tel: {{ translations['footer-Tel'] || '+ (421) 2 5262 1116' }} <br>
          Email: <a href="mailto:embassy@palestine.sk" class="footer-link"> {{ translations['footer-Email'] || 'office@palestineembassy.sk' }} </a>
        </p>
      </div>

      <!-- Opening Hours Section -->
      <div class="footer-section opening-hours">
        <h5 class="footer-heading">
          {{ translations['footer-OpeningHours'] || 'Opening Hours' }}
        </h5>

        <p class="footer-text">
          {{ translations['footer-MondayToThursday'] || 'Monday to Thursday' }}:
          {{ translations['footer-MondayToThursday-Hours'] || '8:00 - 15:00' }}
          <br>

          {{ translations['footer-Friday'] || 'Friday' }}:
          {{ translations['footer-Friday-Hours'] || '8:00 - 14:00' }}
          <br>

          {{ translations['footer-Visitinghourseveryday'] || 'Visiting Hours Every Day' }}:
          {{ translations['footer-VisitingHours-Hours'] || '9:00 - 14:00' }}
        </p>
      </div>

      <!-- Address Section -->
      <div class="footer-section address">
        <h5 class="footer-heading">{{ translations['footer-Address'] }}</h5>
        <p class="footer-text">
          {{ translations['footer-Embassy'] }}<br>
          Gorkého 3, 811 01 Bratislava<br>
          {{ translations['footer-SlovakRepublic'] }}
        </p>
      </div>
    </div>

    <!-- Map Section -->
    <div class="footer-map">
      <iframe class="map-frame" src="https://maps.google.com/maps?output=embed&amp;q=Gork%C3%A9ho%203%2C%20Bratislava&amp;z=13&amp;t=m"></iframe>
    </div>

    <!-- Social Media Icons Section -->
    <div class="footer-social">
      <a class="social-icon" href="https://www.facebook.com/palestine.embassy.slovakia" target="_blank" title="Facebook">
        <i class="fab fa-facebook"></i>
      </a>

      <a class="social-icon" href="https://x.com/PalestineInSK" target="_blank" title="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="social-icon" href="https://www.instagram.com/palestine.embassy.slovakia/" target="_blank" title="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </footer>
</template>


<style scoped>
/* General Footer Styling */
.custom-footer {
  background-color: #023020;
  color: #f5f5f5;
  padding: 40px 20px;
  font-family: 'Constantia', serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 220px;
  text-align: center;
}

.logo-section {
  flex: 0.8; /* Adjust size of the logo section */
  display: flex;
  justify-content: center;
}

.footer-logo {
  width: 120px; /* Adjust width of the logo to align visually */
  height: auto;
  margin: 0 auto;
}

.footer-heading {
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-family: 'Constantia', serif;
}

.footer-text {
  line-height: 1.6;
}

.footer-link {
  color: #f5f5f5;
  text-decoration: underline;
}

/* Footer Map */
.footer-map {
  margin-top: 20px;
  text-align: center;
}

.map-frame {
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
}

/* Footer Social Icons */
.footer-social {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-icon {
  color: #f5f5f5;
  font-size: 1.8rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #db545a;
}

/* Responsive Footer Adjustments */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    max-width: 100%;
    text-align: center;
  }

  .map-frame {
    height: 200px;
  }
}
</style>
