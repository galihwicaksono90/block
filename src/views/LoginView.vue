<script setup lang="ts">
import LoginForm from "../components/forms/LoginForm.vue";
import { LoginLayout } from "@/components/layouts";
import image from "@/assets/login.jpg";
</script>

<template>
    <LoginLayout :image="image">
        <v-row align="center">
            <v-col cols="12" align="center">
                <div class="text-h3 font-weight-bold my-6 text-uppercase">
                    Blockchain <br />
                    Essentials
                </div>
            </v-col>
            <v-col cols="12" align="center">
                <div class="text-h5 text-center mb-5">LOGIN</div>
            </v-col>
            <v-col cols="12">
                <LoginForm />
            </v-col>
            <v-col>
                Don't have an account?
                <router-link to="/register" class="text-decoration-none text-blue">Register</router-link>
            </v-col>
        </v-row>
    </LoginLayout>
</template>

<style scoped>

</style>
