import type { ChartData, ChartOptions, ChartTypeRegistry } from "chart.js";

export type ChartProps<T extends keyof ChartTypeRegistry> = {
    chartData: ChartData<T>;
    chartOptions?: ChartOptions<T>;
};

export type Block = {
    hash?: string | null;
    prevHash?: string | null;
    data?: string;
    nonce?: string;
};

export type Chain = {
    blocks: Block[];
};
