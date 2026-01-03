<template>
  <div class="flex items-center justify-between gap-3 px-2 h-24 cursor-pointer">
    <div
      class="min-w-0 flex items-center gap-3 border-l-4 pl-1.5"
      :class="selected ? 'border-l-[#1B63F5]' : 'border-l-transparent'"
    >
      <img
        :src="offer.poster?.imageKitUri || offer.poster?.uri || ''"
        :alt="offer.poster?.name || offer.name"
        class="h-16 w-16 rounded-lg"
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

interface Props {
  offer: Offer;
  selected?: boolean;
}

defineProps<Props>();

function statusClass(status?: CampaignStatus | null) {
  switch (status) {
    case "LIVE":
      return "bg-green-50 text-green-700";
    case "VERIFIED":
      return "bg-blue-50 text-blue-700";
    case "ASSESSING":
      return "bg-amber-50 text-amber-700";
    case "DRAFT":
      return "bg-gray-100 text-gray-700";
    case "PAUSE":
      return "bg-orange-50 text-orange-700";
    case "FINISHED":
      return "bg-slate-100 text-slate-700";
    case "TERMINATED":
      return "bg-rose-50 text-rose-700";
    case "REJECTED":
      return "bg-red-50 text-red-700";
    case "INVALID":
      return "bg-purple-50 text-purple-700";
    case "INPROGRESS":
      return "bg-indigo-50 text-indigo-700";
    default:
      return "bg-gray-50 text-gray-600";
  }
}
</script>
