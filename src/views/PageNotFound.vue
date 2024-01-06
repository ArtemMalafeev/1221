<template>
    <div class="page-404">
        <UiAlert :class="classes['page-404__alert']">Страница не найдена!</UiAlert>
    </div>
</template>

<script setup lang="ts">
import UiAlert from '@/components/UiAlert.vue';
</script>

<style module="classes" types="scss">
.page-404 {
    position: relative;
}

.page-404__alert {
    position: absolute;
    min-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>