<template>
    <Line :options="chartData.chartOptions" :data="chartData.chartData"> </Line>
</template>

<script lang="ts" setup>
import type { ChartProps } from "@/types";
import { Line } from "vue-chartjs";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

type Props = {
    chartData: ChartProps<"line">;
};

const { chartData } = defineProps<Props>();

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
</script>
