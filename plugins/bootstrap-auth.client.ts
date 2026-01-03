export default defineNuxtPlugin(() => {
  // Intentionally no auto-login.
  // Auth is handled by `middleware/auth.global.ts` + `pages/login.vue`.
});
