<template>
  <UInput
    :placeholder="placeholder"
    :disabled="disabled"
    v-bind="$attrs"
    :input-class="
      `rounded-lg shadow-none focus:ring-[#1B63F5] ${inputClass}`.trim()
    "
    :icon="icon"
  />
</template>

<script setup lang="ts">
type Props = {
  placeholder?: string;
  disabled?: boolean;
  inputClass?: string;
  icon?: string;
};

const {
  placeholder = "",
  disabled = false,
  inputClass = "",
  icon = "",
} = defineProps<Props>();
</script>
