// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: "Evan_Sky",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      baseURL: "http://localhost:3000",
    },
  },
})
