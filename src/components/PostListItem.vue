<template>
    <div :class="classes.post">
        <h3 :class="classes.post__title">
            {{ post.title }}
        </h3>
        <p :class="classes.post__description">
            {{ post.body }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { PostInterface } from '@/interface';

defineProps<{ post: PostInterface }>();
</script>

<style module="classes" lang="scss">
.post {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    height: 100%;
}

.post__title {
    font-size: 28px;
    color: #8a8a8a;
}

.post__description {
    color: #ffffff;
}
</style>