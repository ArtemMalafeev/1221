<template>
    <footer :class="classes.footer">
        <UiContainer>
            <a :class="classes.footer__author" href="https://github.com/ArtemMalafeev" target="_blank">
                Artem Malafeev
            </a>
        </UiContainer>
    </footer>
</template>

<script setup lang="ts">
import UiContainer from '@/components/UiContainer.vue';
</script>

<style module="classes" lang="scss">
.footer {
    padding-block: 10px;
    text-align: center;
    background-color: #322c2c;
}

.footer__author {
    display: inline-block;
    text-decoration: none;
    transition: all .25s ease;
    font-size: 18px;
    color: #ffffff;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1);
    }
}
</style>