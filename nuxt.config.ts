// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';


// @ts-ignore
export default defineNuxtConfig({
  build: {

  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [

  ],

  vite: {
    plugins: [

    ],
    assetsInclude: ['**/*.JPG'],
  },
  // Adding `head` configuration for the HTML meta tags, scripts, and other assets.
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        style: 'font-size: 16px',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: '' },
        { name: 'description', content: '' },
        { name: 'theme-color', content: '#478ac9' },
        { property: 'og:title', content: 'Educational section' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'stylesheet', href: '/nicepage.css', media: 'screen' },
        { rel: 'stylesheet', href: '/Educational-section.css', media: 'screen' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i',
        },
      ],
      script: [
        { src: '/jquery.js', defer: true },
        { src: '/nicepage.js', defer: true },

        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "",
            "logo": "images/Coat_of_arms_of_State_of_Palestine_Official-1.png",
            "sameAs": [],
          }),
        },
      ],
    },
  },
});
