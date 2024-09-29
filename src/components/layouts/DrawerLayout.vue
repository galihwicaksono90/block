<script setup lang="ts">
import { useMeQuery } from "@/hooks";
import client from "@/graphqlClient";
import { useRouter } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";

const { data } = useMeQuery({});

const router = useRouter();
const queryClient = useQueryClient();

function logout() {
    queryClient.clear();
    localStorage.removeItem("token");
    client.setHeader("Authorization", "");
    router.push("/login");
}
</script>

<template>
    <v-navigation-drawer permanent>
        <v-list>
            <v-list-item prepend-icon="fas fa-user" prepend-avatar="" :title="data?.me?.fullName"
                :subtitle="data?.me.email ?? ''"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item exact prepend-icon="fas fa-home" title="Home" to="/"></v-list-item>
            <v-list-item exact prepend-icon="fas fa-address-card" title="Blockchain" to="/blockchain"></v-list-item>
            <v-list-item exact prepend-icon="fas fa-cog" title="Settings" to="/settings"></v-list-item>
            <v-list-item exact prepend-icon="fas fa-sign-out-alt" title="Logout" @click="logout"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
