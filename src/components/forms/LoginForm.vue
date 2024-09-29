<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLoginMutation } from "@/hooks";
import { useRouter } from "vue-router";
import client from "@/graphqlClient";

const router = useRouter();
const { mutate, isLoading } = useLoginMutation();

type LoginForm = {
    email: string;
    password: string;
};

const modelValue = reactive<LoginForm>({ email: "", password: "" });

const valid = ref<boolean>(false);

function onSubmit() {
    mutate(
        { email: modelValue.email, password: modelValue.password },
        {
            onSuccess: (value) => {
                localStorage.setItem("token", value.login.token!);
                client.setHeader("Authorization", `Bearer ${value.login.token!}`);
                router.push("/");
            },
        }
    );
}

function required(v: any) {
    return !!v || "Field is required";
}
</script>

<template>
    <v-form v-model="valid" @submit.prevent="onSubmit" componet="form">
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="modelValue.email" type="email" :rules="[required]" :readonly="isLoading"
                    label="Email" clearable variant="outlined" />
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="modelValue.password" type="password" :rules="[required]" :readonly="isLoading"
                    label="Password" clearable variant="outlined" />
            </v-col>
            <v-col>
                <v-btn type="submit" variant="elevated" color="blue" :loading="isLoading" width="100%">Login</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
