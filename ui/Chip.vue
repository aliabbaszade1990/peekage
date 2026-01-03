<template>
  <span
    class="inline-flex h-7 rounded-3xl border items-center px-2 py-1.5 gap-1 select-none whitespace-nowrap"
    :class="
      selected ? 'bg-[#1B63F5]  text-white' : 'bg-[#F4F4F4]  text-[#141414]'
    "
  >
    <span class="text-sm">{{ text }}</span>
    <span
      class="text-xs rounded-full p-0.5 w-4 h-4 inline-flex items-center justify-center"
      :class="selected ? 'bg-white text-[#1B63F5]' : 'bg-black text-white'"
    >
      {{ badge }}</span
    >
  </span>
</template>

<script setup lang="ts">
interface Props {
  selected?: boolean;
  badge?: number;
  text?: string;
}

defineProps<Props>();
</script>
