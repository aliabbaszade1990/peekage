export default defineNuxtPlugin(async () => {
  const { login } = useAuth();
  await login();
});
