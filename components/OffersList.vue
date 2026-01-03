<template>
  <div class="mt-4 flex flex-col gap-3 overflow-auto" v-bind="$attrs">
    <div v-for="offer in offers" :key="offer.id">
      <OfferItem
        :offer="offer"
        :selected="offer.id === selectedOfferId"
        @click="selectedOfferId = offer.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "~/types/offers";

type Props = {
  offers: Offer[];
};

defineProps<Props>();

const selectedOfferId = ref<string | null>(null);
</script>
