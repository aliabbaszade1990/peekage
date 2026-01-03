<template>
  <div
    class="flex items-center justify-between px-2 pt-2 border-t h-16"
    v-bind="$attrs"
  >
    <div class="text-sm text-gray-600">
      {{ totalCount }} {{ totalCount === 1 ? "result" : "results" }}
    </div>

    <UPagination
      v-model="page"
      :total="totalCount"
      :page-count="pageSize"
      :active-button="{ color: 'paginationActive', variant: 'solid' }"
      :inactive-button="{ color: 'gray', variant: 'ghost' }"
      :prev-button="{ label: 'Prev', color: 'white', variant: 'ghost' }"
      :next-button="{ label: 'Next', color: 'white', variant: 'ghost' }"
      :max="5"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  totalCount: number;
  pageSize?: number;
};

const props = withDefaults(defineProps<Props>(), {
  pageSize: 10,
});

const page = defineModel<number>({ default: 1 });

watch(
  () => props.totalCount,
  () => {
    const totalPages = Math.max(
      1,
      Math.ceil(props.totalCount / props.pageSize)
    );
    if (page.value > totalPages) page.value = totalPages;
    if (page.value < 1) page.value = 1;
  }
);
</script>
