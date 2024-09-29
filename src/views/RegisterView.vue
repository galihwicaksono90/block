<script lang="ts" setup>
import { RegisterForm } from "@/components/forms";
import { LoginLayout } from "@/components/layouts";
import image from "@/assets/register.jpg";
</script>

<template>
    <LoginLayout :image="image">
        <v-row>
            <v-col cols="12" align="center">
                <div class="text-h3 font-weight-bold my-6 text-uppercase">
                    Blockchain <br />
                    Essentials
                </div>
            </v-col>
            <v-col cols="12" align="center">
                <div class="text-h5 text-center mb-5">REGISTER</div>
            </v-col>
            <v-col cols="12" align="center">
                <RegisterForm />
            </v-col>
        </v-row>
    </LoginLayout>
</template>
