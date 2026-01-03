<template>
  <Card class="p-6">
    <div class="flex flex-col gap-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Login</h1>
        <p class="text-gray-600 mt-1">Sign in to continue.</p>
      </div>

      <div class="flex flex-col gap-6">
        <UFormGroup label="Username">
          <Input placeholder="Enter username" v-model="username" />
        </UFormGroup>

        <UFormGroup label="Password">
          <Input
            placeholder="Enter password"
            v-model="password"
            type="password"
          />
        </UFormGroup>

        <UButton
          color="blue"
          :loading="loading"
          :disabled="loading || !username || !password"
          @click="onSubmit"
          class="w-full justify-center"
        >
          Login
        </UButton>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const { loginWithCredentials, isAuthenticated } = useAuth();
const router = useRouter();
const config = useRuntimeConfig();
const username = ref(config.public.authUsername);
const password = ref(config.public.authPassword);
const loading = ref(false);

watchEffect(() => {
  if (isAuthenticated.value) {
    router.replace("/");
  }
});

async function onSubmit() {
  loading.value = true;

  try {
    await loginWithCredentials({
      username: username.value,
      password: password.value,
    });
    await router.replace("/");
  } catch (err) {
    throw new Error("Login failed. Please try again.");
  } finally {
    loading.value = false;
  }
}
</script>
