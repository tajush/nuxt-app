import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  imports: {
    dirs: ['layouts']
  },
  modules: [],
  app: {
    head: {
      title: 'My Nuxt App'
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        
        "/api": {
          target: "http://localhost:8000/", // Replace with your backend API URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  server: {
    hmr: false,
    port: 8000, // Set the default Nuxt server port to 8000
  },
});
