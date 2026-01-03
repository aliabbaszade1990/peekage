<template>
  <div class="ps-52 pt-12 flex flex-col gap-6">
    <h1 class="text-2xl font-bold">Offers</h1>
    <Card class="rounded-2xl w-[714px] min-h-[790px] gap-2 flex flex-col">
      <Input
        placeholder="Search offers by name or ID"
        input-class="h-12"
        @update:model-value="onSearchChange"
      />
      <ChipList
        :offers="mockOffers"
        :statuses="['ALL', ...STATUSES]"
        @change="onStatusChange"
      />
      <OffersList :offers="mockOffers" @change="onOfferChange" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { CampaignStatus, Offer } from "~/types/offers";

const STATUSES: CampaignStatus[] = [
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

const mockOffers: Offer[] = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1;
  const status = STATUSES[i % STATUSES.length];
  const isRejected = status === "REJECTED";

  return {
    id: `OFF-${String(n).padStart(4, "0")}`,
    name: `Offer ${String(n).padStart(2, "0")}`,
    status,
    isRejected,
    rejectReason: isRejected
      ? n % 2 === 0
        ? "Low quality creatives"
        : "Missing required info"
      : null,
    poster: {
      id: `PIC-${String(n).padStart(4, "0")}`,
      name: `Offer ${String(n).padStart(2, "0")} Poster`,
      uri: `/mock/offers/${n}.png`,
      imageKitUri: `https://picsum.photos/200/300`,
      dimensions: {
        width: 1080,
        height: 1350,
      },
    },
  };
});

const onStatusChange = (status: CampaignStatus | "ALL") => {
  console.log(status);
};

const onSearchChange = (value: string) => {
  console.log(value);
};

const onOfferChange = (id: string) => {
  console.log(id);
};
</script>
