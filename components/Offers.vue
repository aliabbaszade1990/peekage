<template>
  <div class="p-6">
    <h1>Offers</h1>
  </div>
</template>

<script setup lang="ts">
interface Offer {
  id: string;
  title: string;
  description: string;
  // Add more fields as needed
}

// Empty data structure - ready for data
const offers: Offer[] = [];
</script>
