<script lang="ts" setup>
import { BlockCard } from "@/components/cards";
import { useChain } from "@/hooks";

const { chain, mine, } = useChain();

async function onMine(id: number) {
  console.log({ id });
  await mine(id);
}
</script>

<template>
  <v-row>
    <v-col :cols="4" v-for="(block, index) in chain" :key="index">
      <BlockCard :block="block" :key="index" :index="index" :nextBlock="chain[index + 1]" @onMine="onMine(index)" />
    </v-col>
  </v-row>
</template>
