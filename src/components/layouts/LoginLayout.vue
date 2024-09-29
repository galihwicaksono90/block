<script lang="ts" setup>
// import image from "@/assets/login.jpg";
const props = defineProps<{ image: string }>();
</script>

<template>
    <main class="login-layout">
        <div class="login-layout-image" :style="{ backgroundImage: `url(${props.image})` }"></div>
        <div class="login-layout-content">
            <v-container>
                <slot />
            </v-container>
        </div>
    </main>
</template>

<style scoped>
main.login-layout {
    display: flex;
    height: 100vh;
    justify-content: space-between;
}

.login-layout .login-layout-image {
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    width: 100%;
    flex-basis: auto;
}

.login-layout .login-layout-content {
    flex-basis: 600px;
}

@media screen and (max-width: 600px) {
    .login-layout .login-layout-image {
        display: none;
    }

    .login-layout .login-layout-content {
        flex-basis: 100vw;
    }
}
</style>
