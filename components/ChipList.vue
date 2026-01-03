<template>
  <div class="flex flex-wrap items-center gap-2 mt-2" v-bind="$attrs">
    <button
      v-for="status in statuses"
      :key="status.toLocaleLowerCase()"
      type="button"
      @click="setSelected(status)"
      class="contents"
    >
      <Chip
        :badge="statusCounts(status)"
        :text="status.toLocaleLowerCase()"
        :selected="selected === status"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { CampaignStatus, Offer } from "~/types/Offers";

const statuses: CampaignStatus[] = [
  "ALL",
  "INVALID",
  "DRAFT",
  "ASSESSING",
  "VERIFIED",
  "LIVE",
  "PAUSE",
  "FINISHED",
  "TERMINATED",
  "REJECTED",
  "INPROGRESS",
];

type Props = {
  offers: Offer[];
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "change", value: CampaignStatus): void;
}>();

const selected = ref<CampaignStatus>("ALL");

const statusCounts = (status: CampaignStatus) => {
  if (status === "ALL") return props.offers.length;
  return props.offers.filter((offer) => offer.status === status).length;
};

const setSelected = (value: CampaignStatus) => {
  selected.value = value;
  emit("change", value);
};
</script>
