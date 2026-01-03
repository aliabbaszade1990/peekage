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
import type { CampaignStatus, Offer } from "~/types/offers";

type ChipListValue = CampaignStatus | "ALL";

type Props = {
  offers: Offer[];
  statuses: ChipListValue[];
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "change", value: ChipListValue): void;
}>();

const selected = ref<ChipListValue>("ALL");

const statusCounts = (status: ChipListValue) => {
  if (status === "ALL") return props.offers.length;
  return props.offers.filter((offer) => offer.status === status).length;
};

const setSelected = (value: ChipListValue) => {
  selected.value = value;
  emit("change", value);
};
</script>
