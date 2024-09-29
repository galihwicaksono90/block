<script setup lang="ts">
import { useMeQuery } from "@/hooks";

const { data } = useMeQuery({});

const items = [
    {
        title: "hello",
    },
];
</script>

<template>
    <v-app-bar :elevation="2">
    </v-app-bar>
</template>
