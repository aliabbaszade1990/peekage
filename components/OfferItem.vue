<template>
  <div class="flex items-center justify-between gap-3 px-2 h-24 cursor-pointer">
    <div
      class="min-w-0 flex items-center gap-3 border-l-4 pl-1.5"
      :class="selected ? 'border-l-[#1B63F5]' : 'border-l-transparent'"
    >
      <img
        :src="posterSrc"
        :alt="offer.poster?.name || offer.name"
        class="h-16 w-16 rounded-lg object-cover bg-gray-100"
        @error="onPosterError"
      />

      <div class="truncate text-[#141414]">
        {{ offer.name }}
      </div>
    </div>

    <div class="shrink-0">
      <Tag :text="offer.status ?? '—'" :class="statusClass(offer.status)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CampaignStatus, Offer } from "~/types/Offers";
import noImageUrl from "~/assets/no-image.svg";

interface Props {
  offer: Offer;
  selected?: boolean;
}

const props = defineProps<Props>();

const NO_IMAGE_SRC = noImageUrl;
const posterHadError = ref(false);

const posterSrc = computed(() => {
  if (posterHadError.value) return NO_IMAGE_SRC;
  return (
    props.offer.poster?.imageKitUri || props.offer.poster?.uri || NO_IMAGE_SRC
  );
});

function onPosterError() {
  posterHadError.value = true;
}

watch(
  () => props.offer,
  () => {
    posterHadError.value = false;
  },
  { deep: true }
);

function statusClass(status?: CampaignStatus | null) {
  switch (status) {
    case "LIVE":
      return "bg-[#DEF6F0] text-[#20C598]";
    case "VERIFIED":
      return "bg-blue-50 text-blue-700";
    case "ASSESSING":
      return "bg-[#FEEDE0] text-[#f78834]";
    case "DRAFT":
      return "bg-gray-100 text-gray-700";
    case "PAUSE":
      return "bg-orange-50 text-orange-700";
    case "FINISHED":
      return "bg-[#F0E1FF] text-[#9835FF]";
    case "TERMINATED":
      return "bg-[#F0E1FF] text-[#9835FF]";
    case "REJECTED":
      return "bg-red-50 text-red-700";
    case "INVALID":
      return "bg-purple-50 text-purple-700";
    case "INPROGRESS":
      return "bg-[#DEF6F0] text-[#20C598]";
    default:
      return "bg-gray-50 text-gray-600";
  }
}
</script>
