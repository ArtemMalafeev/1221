<template>
    <ul :class="classes.posts__list">
        <li :class="classes.posts__item" v-for="(post, index) in posts" :key="post.id">
            <a class="posts__link" @click.left="goToPost(post.id)" @click.right.prevent="$emit('remove', index)">
                <PostListItem :post="post" />
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PostListItem from '@/components/PostListItem.vue';
import type { PostInterface } from '@/interface';

const router = useRouter();

defineProps<{ posts: PostInterface[] }>();

defineEmits(['remove']);

function goToPost(id: number) {
    router.push({ name: 'post', params: { id: id } });
};
</script>

<style module="classes" lang="scss">
.posts__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
}

.posts__item {
    background-color: #322c2c;
    cursor: pointer;

    transition: all .25s ease;

    &:hover {
        box-shadow: 12px 12px 8px 0px rgba(118, 82, 41, 0.2);
    }
}
</style>