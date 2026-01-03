<template>
  <span
    class="rounded-full px-2.5 py-1 text-xs font-bold"
    v-bind="$attrs"
  >
    {{ text }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>


