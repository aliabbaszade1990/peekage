<template>
  <Card
    class="rounded-2xl w-[300px] h-[700px] gap-4 flex flex-col bg-[#F4F4F4] overflow-hidden"
  >
    <h2 class="text-base font-bold mb-3">Offer overview</h2>

    <div v-if="pending" class="text-sm text-gray-500">Loading…</div>

    <div v-else-if="campaign?.result" class="text-sm text-gray-800 space-y-2">
      <div class="flex justify-between gap-2">
        <span class="text-gray-500">Start date</span>
        <span class="text-right truncate">
          {{ campaign.result.preferredStartDate ?? "—" }}
        </span>
      </div>

      <div class="flex justify-between gap-2">
        <span class="text-gray-500">Total sample</span>
        <span class="text-right">{{ campaign.result.targetCount ?? "—" }}</span>
      </div>

      <div class="flex justify-between gap-2">
        <span class="text-gray-500">Used credit</span>
        <span class="text-right">{{ campaign.result.credit ?? "—" }}</span>
      </div>

      <div class="flex justify-between gap-2">
        <span class="text-gray-500">ID</span>
        <span class="text-right truncate">{{ id }}</span>
      </div>
    </div>

    <div class="mt-2 flex gap-4 flex-col items-center">
      <MockAreaChart
        title="Offer view"
        :total="15293"
        :series="viewsSeries"
        line-color="#1B63F5"
        area-from="rgba(27, 99, 245, 0.55)"
        area-to="rgba(27, 99, 245, 0)"
      />

      <MockAreaChart
        title="Offer redemptions"
        :total="9175"
        :series="redemptionsSeries"
        line-color="#0B9E8A"
        area-from="rgba(11, 158, 138, 0.40)"
        area-to="rgba(11, 158, 138, 0)"
      />
    </div>
    <div class="mt-4 flex gap-2 justify-between">
      <UButton
        class="text-white bg-[#1B63F5] hover:bg-[#1B63F5] hover:text-white h-9 flex-1 justify-center whitespace-nowrap"
      >
        Setting
      </UButton>
      <UButton
        class="text-white bg-[#1B63F5] hover:bg-[#1B63F5] hover:text-white h-9 flex-1 justify-center whitespace-nowrap"
      >
        Edit
      </UButton>
      <UButton
        class="text-white bg-[#1B63F5] hover:bg-[#1B63F5] hover:text-white h-9 flex-1 justify-center whitespace-nowrap"
      >
        View
      </UButton>
    </div>

    <div class="mt-4 flex gap-2 justify-between">
      <UButton
        class="bg-white text-[#1B63F5] hover:bg-white hover:text-[#1B63F5] h-9 flex-1 justify-center whitespace-nowrap"
      >
        Read the full report
      </UButton>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { ServiceResult } from "~/dtos/ServiceResult";
import type { CampaignV2Details } from "~/types/CampaignV2";

type Props = {
  id: string;
};

const props = defineProps<Props>();
const { getCampaignV2 } = useCampaignV2();

const { data, pending } = useAsyncData(
  "campaignV2",
  async (): Promise<ServiceResult<CampaignV2Details> | null> => {
    if (!props.id) return null;
    return await getCampaignV2(props.id);
  },
  {
    watch: [() => props.id],
    server: false,
  }
);

const campaign = computed(() => data.value ?? null);

const viewsSeries = [
  180, 220, 260, 310, 360, 410, 455, 470, 495, 520, 565, 610, 645, 670, 705,
  735, 760, 790, 820, 860, 900, 930, 955, 980, 1010, 1045, 1080, 1110, 1140,
  1165, 1190, 1210,
];

const redemptionsSeries = [
  120, 135, 150, 165, 180, 195, 210, 225, 235, 245, 255, 265, 275, 285, 295,
  270, 230, 205, 245, 310, 330, 350, 365, 380,
];
</script>
