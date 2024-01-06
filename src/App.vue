<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

</script>

<template>
  <div :class="classes.page">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style module="classes" lang="scss">
.page {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
  background: #7c7c7c;
}
</style>
