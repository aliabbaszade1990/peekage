<template>
  <div
    class="mt-4 flex flex-col gap-3 overflow-y-auto hide-scrollbar h-[590px]"
    v-bind="$attrs"
  >
    <div v-for="(offer, index) in offers" :key="offer.id">
      <OfferItem
        :offer="offer"
        :selected="offer.id === selectedOfferId"
        @click="setSelectedOfferId(offer.id)"
      />
      <USeparator
        v-if="index < offers.length - 1"
        class="h-[1px] bg-gray-200 w-full flex"
        :key="`separator-${index}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "~/types/Offers";

type Props = {
  offers: Offer[];
};

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

defineProps<Props>();

const selectedOfferId = ref<string | null>(null);
const setSelectedOfferId = (id: string) => {
  selectedOfferId.value = id;
  emit("change", id);
};
</script>
