// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    // "@nuxtjs/eslint-module",
    "@nuxtjs/supabase",
  ],
  supabase: {
    clientOptions: {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    },
    redirect: false,
  },
  googleFonts: {
    families: {
      "Roboto Condensed": {
        wght: "200..900",
      },
    },
  },
});
