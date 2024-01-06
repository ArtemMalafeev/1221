<template>
    <header :class="classes.header">
        <UiContainer>
            <p :class="classes.header__description">
                Тестовое задание для компании "1221Системс"
            </p>
        </UiContainer>
    </header>
</template>

<script setup lang="ts">
import UiContainer from '@/components/UiContainer.vue';
</script>

<style module="classes" lang="scss">
.header {
    padding: 10px;
    text-align: center;
    background-color: #322c2c;
}

.header__description {
    color: #ffffff;
    font-size: 20px;
}
</style>