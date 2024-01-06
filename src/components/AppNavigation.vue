<template>
    <nav :class="classes.navigation">
        <h2 :class="classes.navigation__title">Навигация</h2>
        <ul :class="classes.navigation__list">
            <li :class="classes.navigation__item">
                <span>&bull;</span>
                <RouterLink :to="{ name: 'posts' }" :class="classes.navigation__link">
                    Страница списка постов
                </RouterLink>
            </li>
            <li :class="classes.navigation__item">
                <span>&bull;</span>
                <RouterLink to="#" :class="[classes.navigation__link, classes['navigation__link--disabled']]">
                    Заглушка
                </RouterLink>
            </li>
            <li :class="classes.navigation__item">
                <span>&bull;</span>
                <RouterLink to="#" :class="[classes.navigation__link, classes['navigation__link--disabled']]">
                    Заглушка
                </RouterLink>
            </li>
            <li :class="classes.navigation__item">
                <span>&bull;</span>
                <RouterLink to="#" :class="[classes.navigation__link, classes['navigation__link--disabled']]">
                    Заглушка
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style module="classes" lang="scss">
.navigation {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    padding: 25px;
    max-width: max-content;

    color: #ffffff;

    background-color: #322c2c;
}

.navigation__title {
    font-size: 28px;
}

.navigation__list {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
}

.navigation__item {
    display: flex;
    column-gap: 10px;
    font-size: 20px;
}

.navigation__link {
    color: inherit;
    transition: color .25s ease;

    &:hover {
        color: #d93600;
    }

    &:active {
        color: inherit;
    }

    &--disabled {
        color: #555759;
        pointer-events: none;
    }
}
</style>