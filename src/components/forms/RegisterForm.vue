<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRegisterMutation } from "@/hooks/useRegisterMutation";
import { useRouter } from "vue-router";

const router = useRouter();
type LoginForm = {
    email: string;
    password: string;
    retypePassword: string;
    fullName: string;
};

const { mutate, isLoading } = useRegisterMutation();

const modelValue = reactive<LoginForm>({
    email: "",
    password: "",
    retypePassword: "",
    fullName: "",
});

const valid = ref<boolean>(false);

function onSubmit() {
    mutate(
        {
            email: modelValue.email,
            password: modelValue.password,
            fullName: modelValue.fullName,
        },
        {
            onSuccess: (value) => {
                router.push("/login");
            },
        }
    );
}

function required(v: any) {
    return !!v || "Field is required";
}

function checkRetypePassword(v: any) {
    if (v === modelValue.password) {
        return true;
    }
    return "Password is not same";
}
</script>

<template>
    <v-form v-model="valid" @submit.prevent="onSubmit">
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="modelValue.email" type="email" :rules="[required]" :readonly="isLoading"
                    label="Email" clearable variant="outlined" />
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="modelValue.fullName" :rules="[required]" :readonly="isLoading" label="Full Name"
                    clearable variant="outlined" />
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="modelValue.password" type="password" :rules="[required]" :readonly="isLoading"
                    label="Password" clearable variant="outlined" />
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="modelValue.retypePassword" type="password"
                    :rules="[required, checkRetypePassword]" :readonly="isLoading" label="Retype Password" clearable
                    variant="outlined" />
            </v-col>
            <v-col>
                <v-btn type="submit" variant="elevated" color="blue" :loading="isLoading" width="100%">Submit</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
