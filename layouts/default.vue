<template>
  <div class="min-h-screen flex bg-white">
    <SidebarMenu />

    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
