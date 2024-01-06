<template>
    <div :class="classes['page-main']">
        <UiContainer>
            <div :class="classes['page-main__inner']">
                <h1 :class="classes['page-main__title']">Главная страница</h1>
                <AppNavigation />
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/AppNavigation.vue';
import UiContainer from '@/components/UiContainer.vue';
</script>

<style module="classes" lang="scss">
.page-main {
    padding-block: 25px;
}

.page-main__inner {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.page-main__title {
    max-width: max-content;
    color: #322c2c;
    border-bottom: 2px solid #322c2c;
}
</style>