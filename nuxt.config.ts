// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@formkit/auto-animate",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@unocss/nuxt",
    "@morev/vue-transitions/nuxt",
    "nuxt-anchorscroll",
  ],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  unocss: {
    uno: true,
    attributify: true,
  },
});
