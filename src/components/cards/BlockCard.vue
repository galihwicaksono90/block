<script lang="ts" setup>
import crypto from "crypto-js";
import type { Block } from "@/types";
import { computed, onMounted, watch } from "vue";
import { useChain, startsWith } from "@/hooks";

const { chain } = useChain();

type Props = {
    block: Block;
    index: number;
    prevBlock?: Block;
};

const props = defineProps<Props>();

const emit = defineEmits(["onMine"]);

const hash = computed(() => {
    const str = JSON.stringify(props.block);
    const hash = crypto.SHA256(str).toString();
    return hash;
});

const isValid = computed(() => {
    return hash.value.startsWith(startsWith);
});

function updateNextBlock() {
    if (!chain.value[props.index + 1]) return;
    chain.value[props.index + 1].prevHash = hash.value;
}

watch(hash, () => {
    updateNextBlock();
});

onMounted(() => {
    updateNextBlock();
});
</script>

<template>
    <v-card :class="`pa-6 ${isValid ? '' : 'bg-red'}`">
        <template v-slot:title>Block #{{ index + 1 }}</template>
        <v-container>
            <v-text-field label="Nonce" v-model="props.block.nonce" />

            <v-textarea label="Data" v-model="props.block.data" />

            <v-text-field label="Prev Hash" readonly v-model="props.block.prevHash" />

            <v-text-field label="Hash" readonly v-model="hash" />

            <v-btn @click="emit('onMine')">Mine</v-btn>
        </v-container>
    </v-card>
</template>

<style scoped>

</style>
