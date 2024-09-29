<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppBarLayout from "./AppBarLayout.vue";
import DrawerLayout from "./DrawerLayout.vue";
import { LoadingOverlay } from "@/components/common";
// import { useMeQuery } from "@/hooks";

// const router = useRouter();
// const { isLoading, isError } = useMeQuery(
//   {},
//   {
//     refetchOnMount: false,
//     onError: () => {
//       router.push("/login");
//     },
//   }
// );
</script>

<template>
  <div v-if="isLoading || isError" style="height: 100vh">
    <LoadingOverlay />
  </div>
  <v-card v-else>
    <v-layout>
      <DrawerLayout />

      <AppBarLayout />

      <v-main style="min-height: 100vh">
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
