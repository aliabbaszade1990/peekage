// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/ui", pathPrefix: false },
  ],
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
      authUsername: process.env.AUTH_USERNAME,
      authPassword: process.env.AUTH_PASSWORD,
    },
  },
});
