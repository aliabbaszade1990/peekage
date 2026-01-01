<template>
  <UInput
    :placeholder="placeholder"
    :disabled="disabled"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
interface Props {
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false,
})
</script>

