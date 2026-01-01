<template>
  <UChip
    :selected="selected"
    v-bind="$attrs"
  >
    <slot />
  </UChip>
</template>

<script setup lang="ts">
interface Props {
  selected?: boolean
}

withDefaults(defineProps<Props>(), {
  selected: false,
})
</script>

