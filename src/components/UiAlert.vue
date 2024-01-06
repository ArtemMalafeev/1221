<template>
    <div :class="classes.alert">
        <slot>Данные отсутствуют</slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style module="classes" lang="scss">
.alert {
    padding: 28px 24px;
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    max-width: 500px;
    color: #322c2c;
    border: 2px solid #322c2c;
    border-radius: 8px;
}
</style>