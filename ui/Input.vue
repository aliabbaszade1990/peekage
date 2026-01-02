<template>
  <UInput
    :placeholder="placeholder"
    :disabled="disabled"
    v-bind="$attrs"
    :input-class="
      `rounded-lg shadow-none focus:ring-[#1B63F5] ${inputClass}`.trim()
    "
    icon="i-lucide-search"
  />
</template>

<script setup lang="ts">
type Props = {
  placeholder?: string;
  disabled?: boolean;
  inputClass?: string;
};

const {
  placeholder = "",
  disabled = false,
  inputClass = "",
} = defineProps<Props>();
</script>
