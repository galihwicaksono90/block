<template>
    <Bar id="my-chart-id" :options="chartData?.chartOptions" :data="chartData.chartData" />
</template>

<script lang="ts"  setup>
import { Bar, } from "vue-chartjs";
import type { ChartProps } from "@/types";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

type Props = {
    chartData: ChartProps<"bar">
}

const { chartData } = defineProps<Props>()

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

</script>
