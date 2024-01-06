<template>
    <div :class="classes['page-post']">
        <UiContainer>
            <div :class="classes['page-post__inner']">
                <h1 :class="classes['page-post__title']">Страница поста</h1>

                <AppBreadcrumbs />

                <template v-if="post && user">
                    <div :class="classes.post">
                        <div :class="classes.post__content">
                            <h2 :class="classes.post__title">
                                {{ post.title }}
                            </h2>
                            <p :class="classes.post__description">
                                {{ post.body }}
                            </p>
                        </div>
                        <div :class="classes.post__author">
                            <h3 :class="classes.post__subtitle">
                                Блок "об авторе"
                            </h3>
                            <div :class="classes.post__information">
                                <p :class="[classes.post__item, classes.post__name]">
                                    <span :class="classes.post__text">Имя:</span>
                                    {{ user.name }}
                                </p>
                                <a :class="[classes.post__item, classes.post__email]" :href="`mailto: ${user.email}`"
                                    target="_blank">
                                    <span :class="classes.post__text">Почта:</span>
                                    {{ user.email }}
                                </a>
                                <a :class="[classes.post__item, classes.post__phone]" :href="`tel: ${user.phone}`"
                                    target="_blank">
                                    <span :class="classes.post__text">Телефон:</span>
                                    {{ user.phone }}
                                </a>
                                <a :class="[classes.post__item, classes.post__site]" :href="user.website" target="_blank">
                                    <span :class="classes.post__text">Сайт:</span>
                                    {{ user.website }}
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
                <UiAlert :class="classes.post__alert" v-else>Загрузка...</UiAlert>
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchUser, fetchPost } from '@/api';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import UiAlert from '@/components/UiAlert.vue';
import UiContainer from '@/components/UiContainer.vue';
import type { PostInterface, UserInterface } from '@/interface';

const route = useRoute();

const user = ref<UserInterface | null>(null);
const post = ref<PostInterface | null>(null);

onMounted(async () => {
    post.value = await fetchPost(route.params.id as string);
    user.value = await fetchUser(route.params.id as string);
});
</script>

<style module="classes" lang="scss">
.page-post {
    position: relative;
    width: 100%;
    height: 100%;
    padding-block: 25px;
}

.page-post__inner {
    width: 100%;
    height: 100%;
}

.page-post__title {
    max-width: max-content;
    color: #322c2c;
    border-bottom: 2px solid #322c2c;
}

.post {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    min-width: 80%;
    padding-block: 50px;
    padding-inline: 30px;
    background-color: #322c2c;
}

.post__content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

}

.post__title {
    color: #8a8a8a;
    font-size: 28px;
}

.post__description {
    color: #ffffff;
}

.post__author {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.post__information {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-left: 15px;
}

.post__subtitle {
    max-width: max-content;
    color: #8a8a8a;
    font-size: 20px;
    border-bottom: 1px solid #8a8a8a;
}

.post__item {
    display: flex;
    column-gap: 8px;
    color: #8a8a8a;
}

.post__text {
    color: #ffffff;
}

.post__alert {
    position: absolute;
    min-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>