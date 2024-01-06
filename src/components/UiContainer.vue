<template>
    <div :class="classes.container">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style module="classes" lang="scss">
.container {
    max-width: 1440px;
    height: 100%;
    margin-inline: 1rem;

    @media screen and (min-width: 1440px) {
        margin-inline: auto;
    }
}
</style>