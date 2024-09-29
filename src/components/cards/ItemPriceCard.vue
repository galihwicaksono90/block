<script lang="ts" setup>
import { ref } from "vue";
type Item = {
    icon?: string;
    title?: string;
    description?: string;
    price?: number;
    date?: string;
};

const items = ref<Item[]>([
    {
        icon: "fas fa-user",
        title: "title",
        description: "description",
        price: 1000000,
        date: "description",
    },
    {
        icon: "fas fa-cog",
        title: "settings",
        description: "description",
    },
    {
        icon: "fas fa-sign-out",
        title: "settings",
        description: "description",
    },
    {
        icon: "fas fa-cog",
        title: "settings",
        description: "description",
    },
]);

const currencyFormatter = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "idr",
});

function formatCurrency(amount?: number): string {
    if (!amount) amount = 0;

    return currencyFormatter.format(amount);
}
</script>

<template>
    <v-row>
        <v-col :lg="12 / items.length" md="6" v-for="item in items">
            <v-card class="pa-5">
                <div class="d-flex flex-row align-center">
                    <div class="mr-6">
                        <v-icon :icon="item.icon"></v-icon>
                    </div>
                    <div class="d-flex justify-space-between w-100">
                        <div class="d-flex flex-column flex-">
                            <div class="text-h5 text-capitalize text-bold">
                                {{ item.title }}
                            </div>
                            <div class="text-grey-darken-2">
                                {{ item.description }}
                            </div>
                        </div>
                        <div class="d-flex flex-column align-end">
                            <div class="text text-blue-lighten-1 text-h5">
                                {{ formatCurrency(item.price) }}
                            </div>
                            <div class="text">
                                {{ item.date }}
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
