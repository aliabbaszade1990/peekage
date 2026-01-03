<template>
  <div class="ps-52 pt-8 flex flex-col gap-6">
    <h1 class="text-2xl font-bold">Offers</h1>
    <div class="flex gap-2.5">
      <Card class="rounded-2xl w-[714px] h-[814px] gap-2 flex flex-col">
        <Input
          placeholder="Search offers by name or ID"
          input-class="h-12"
          @update:model-value="onSearchChange"
          icon="i-lucide-search"
        />
        <ChipList :offers="offers" @change="onStatusChange" />
        <OffersList :offers="offers" @change="onOfferChange" />
        <Pagination
          v-model="page"
          :total-count="totalCount"
          :page-size="pageSize"
        />
      </Card>

      <OfferDetail v-if="selectedOfferId" :id="selectedOfferId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CampaignStatus } from "~/types/Offers";

const { listOffers } = useOffers();
const searchQuery = ref<string>("");
const selectedStatus = ref<CampaignStatus | "ALL">("ALL");
const debouncedSearchQuery = ref<string>("");
const page = ref<number>(1);
const pageSize = 6;
const selectedOfferId = ref<string | null>(null);

let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const { data } = useAsyncData(
  "offers",
  () =>
    listOffers({
      offset: (page.value - 1) * pageSize,
      first: pageSize,
      name: debouncedSearchQuery.value || undefined,
      status: selectedStatus.value === "ALL" ? undefined : selectedStatus.value,
    }),
  {
    default: () => ({ offers: [], totalCount: 0 }),
    watch: [selectedStatus, debouncedSearchQuery, page],
    server: false,
  }
);

const offers = computed(() => data.value?.offers ?? []);
const totalCount = computed(() => data.value?.totalCount ?? 0);

const onStatusChange = (status: CampaignStatus) => {
  selectedStatus.value = status;
  page.value = 1;
};

const onSearchChange = (value: string) => {
  searchQuery.value = value;
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    page.value = 1;
    debouncedSearchQuery.value = value;
  }, 300);
};

const onOfferChange = (id: string) => {
  selectedOfferId.value = id;
};
</script>
