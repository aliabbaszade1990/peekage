<template>
  <Card class="shadow-sm border border-black/5 w-[268px] h-[200px]">
    <div class="flex items-baseline gap-2">
      <h3 class="text-base font-semibold text-[#141414]">
        {{ title }}
      </h3>
    </div>

    <div class="mt-3 flex items-baseline gap-2">
      <div class="text-lg font-extrabold leading-none text-[#141414]">
        {{ total }}
      </div>
      <div class="text-base text-[#141414]/70">total</div>
    </div>

    <div class="mt-4">
      <div ref="el" class="h-[88px] w-full" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import type { EChartsOption, EChartsType } from "echarts";

type Props = {
  title: string;
  total: string | number;
  series: number[];
  lineColor: string;
  areaFrom?: string;
  areaTo?: string;
};

const props = defineProps<Props>();

const el = ref<HTMLElement | null>(null);
let chart: EChartsType | null = null;
let ro: ResizeObserver | null = null;

const option = computed<EChartsOption>(() => {
  const x = props.series.map((_, i) => i + 1);
  const areaFrom = props.areaFrom ?? "rgba(27, 99, 245, 0.45)";
  const areaTo = props.areaTo ?? "rgba(27, 99, 245, 0)";

  return {
    animation: false,
    grid: { left: 0, right: 0, top: 6, bottom: 0, containLabel: false },
    xAxis: {
      type: "category",
      data: x,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    tooltip: { show: false },
    series: [
      {
        type: "line",
        data: props.series,
        smooth: true,
        symbol: "none",
        lineStyle: { width: 4, color: props.lineColor, cap: "round" },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: areaFrom },
            { offset: 1, color: areaTo },
          ]),
        },
      },
    ],
  };
});

function mountChart() {
  if (!el.value) return;
  chart = echarts.init(el.value, undefined, { renderer: "canvas" });
  chart.setOption(option.value, true);

  ro = new ResizeObserver(() => {
    chart?.resize();
  });
  ro.observe(el.value);
}

function unmountChart() {
  ro?.disconnect();
  ro = null;
  chart?.dispose();
  chart = null;
}

onMounted(mountChart);
onBeforeUnmount(unmountChart);

watch(
  option,
  (next) => {
    chart?.setOption(next, true);
  },
  { deep: true }
);
</script>
