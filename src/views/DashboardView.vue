<script setup lang="ts">
import { BarChart, AreaChart } from "@/components/charts";
import { ItemPriceCard } from "@/components/cards";
import type { ChartProps } from "@/types";
import { reactive } from "vue";

const chartData = reactive<ChartProps<"bar">>({
    chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data One",
                backgroundColor: "#f87979",
                data: [40, 39, 10, 40, 39, 80, 40],
            },
            {
                label: "Data Two",
                backgroundColor: "#00bab1",
                data: [40, 39, 10, 40, 39, 80, 40].reverse(),
            },
        ],
    },
    chartOptions: {
        responsive: true,
    },
});

const lineData = reactive<ChartProps<"line">>({
    chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data One",
                borderColor: "#00bab1",
                data: [40, 39, 10, 40, 39, 80, 40].reverse(),
                fill: true,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
            {
                label: "Data Two",
                borderColor: "#f87979",
                data: [40, 39, 10, 40, 39, 80, 40],
                fill: true,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
        ],
    },
    chartOptions: {
        responsive: true,
        plugins: {
            filler: {
                propagate: false,
            },
            title: {
                display: true,
                //text: (ctx) => "drawTime: " + ctx.chart.options.plugins.filler.drawTime,
            },
        },
        interaction: {
            intersect: false,
        },
    },
});
</script>

<template>
    <div class="text-h2 mb-6 font-weight-bold text-capitalize">Dashboard</div>
    <ItemPriceCard />
    <v-row>
        <v-col lg="6" md="12">
            <v-card class="pa-6">
                <BarChart :chartData="chartData" />
            </v-card>
        </v-col>
        <v-col lg="6" md="12">
            <v-card class="pa-6">
                <AreaChart :chartData="lineData"></AreaChart>
            </v-card>
        </v-col>
    </v-row>
</template>
