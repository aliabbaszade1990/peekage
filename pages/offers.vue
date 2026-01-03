<template>
  <div class="ps-52 pt-12 flex flex-col gap-6">
    <h1 class="text-2xl font-bold">Offers</h1>
    <Card class="rounded-2xl w-[714px] min-h-[790px] gap-2 flex flex-col">
      <Input
        placeholder="Search offers by name or ID"
        input-class="h-12"
        @update:model-value="onSearchChange"
        icon="i-lucide-search"
      />
      <ChipList :offers="offers" @change="onStatusChange" />
      <OffersList :offers="offers" @change="onOfferChange" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { CampaignStatus } from "~/types/Offers";

const { listOffers } = useOffers();
const searchQuery = ref<string>("");
const selectedStatus = ref<CampaignStatus | "ALL">("ALL");
const debouncedSearchQuery = ref<string>("");

let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const { data } = useAsyncData(
  "offers",
  () =>
    listOffers({
      name: debouncedSearchQuery.value || undefined,
      status: selectedStatus.value === "ALL" ? undefined : selectedStatus.value,
    }),
  {
    default: () => ({ offers: [], totalCount: 0 }),
    watch: [selectedStatus, debouncedSearchQuery],
    server: false,
  }
);

const offers = computed(() => data.value?.offers ?? []);

const onStatusChange = (status: CampaignStatus) => {
  selectedStatus.value = status;
};

const onSearchChange = (value: string) => {
  searchQuery.value = value;
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    debouncedSearchQuery.value = value;
  }, 300);
};

const onOfferChange = (id: string) => {
  console.log(id);
};
</script>
