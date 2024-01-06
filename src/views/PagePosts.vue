<template>
    <div :class="classes['page-posts']">
        <UiContainer>
            <div :class="classes['page-posts__inner']">
                <h1 :class="classes['page-posts__title']">Страница списка постов</h1>

                <AppBreadcrumbs />

                <template v-if="posts">
                    <template v-if="isNotEmpty">
                        <section :class="[classes.posts, classes['page-posts__posts']]">
                            <PostList :posts="visibledPosts" @remove="removePost" />
                            <button :class="classes.posts__button" @click="showMore()">Добавить</button>
                        </section>
                    </template>
                    <UiAlert :class="classes.posts__alert" v-else>Список постов пуст!</UiAlert>
                </template>
                <UiAlert :class="classes.posts__alert" v-else>Загрузка...</UiAlert>
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { fetchPosts } from '@/api';
import UiAlert from '@/components/UiAlert.vue';
import UiContainer from '@/components/UiContainer.vue';
import PostList from '@/components/PostList.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import type { PostInterface } from '@/interface';

const step = 8;

const posts = ref<PostInterface[] | null>(null);
const currentShowPosts = ref(step);

const isNotEmpty = computed(() => {
    return !!posts.value?.length;
});

const visibledPosts = computed(() => {
    return posts.value?.slice(0, currentShowPosts.value);
});

function showMore() {
    currentShowPosts.value += step;
};

function removePost(index: number) {
    posts.value?.splice(index, 1);
};

onMounted(async () => {
    posts.value = await fetchPosts();
});
</script>

<style module="classes" lang="scss">
.page-posts {
    position: relative;
    width: 100%;
    height: 100%;
    padding-block: 25px;
}

.page-posts__inner {
    width: 100%;
    height: 100%;
}

.page-posts__title {
    max-width: max-content;
    color: #322c2c;
    border-bottom: 2px solid #322c2c;
}

.page-posts__posts {
    margin-top: 20px;
}

.posts {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    align-items: center;
}

.posts__button {
    max-width: max-content;
    padding-block: 10px;
    padding-inline: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: #322c2c;
    border: 1px solid #322c2c;
    background-color: transparent;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1.1) translateY(3px);
    }
}

.posts__alert {
    position: absolute;
    min-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>