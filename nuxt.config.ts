// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  typescript: {
    shim: false,
  },
  css: ["~/assets/base.css"],
  app: {
    head: {
      title: "FitHub | 你的健身百科全书",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  imports: {
    dirs: ["composables/config/*.{ts,js}"],
  },
  googleFonts: {
    families: {
      "Kaushan+Script": true,
    },
    download: true,
    overwriting: true,
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
});
