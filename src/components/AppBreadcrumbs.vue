<template>
    <div :class="classes.breadcrumbs">
        <ul :class="classes.breadcrumbs__list">
            <li :class="classes.breadcrumbs__item" v-for="(breadcrumb, index) in breadcrumbs">
                <RouterLink
                    :class="[classes.breadcrumbs__link, (breadcrumb.disabled) ? classes['breadcrumbs__link--disabled'] : '']"
                    :to="{ name: breadcrumb.name }">
                    {{ breadcrumb.title }}
                </RouterLink>
                <span v-if="index + 1 < breadcrumbs.length">/</span>
            </li>
        </ul>
    </div>
</template>
Ï
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
    if (!!route.meta.breadcrumb) {
        const { items } = route.meta.breadcrumb(route);
        return items;
    }
});
</script>

<style module="classes" lang="scss">
.breadcrumbs {
    padding: 20px;
}

.breadcrumbs__list {
    display: flex;
    column-gap: 15px;
}

.breadcrumbs__item {
    display: flex;
    column-gap: 15px;
    font-size: 20px;
}

.breadcrumbs__link {
    color: #ffffff;
    transition: all .25s ease;

    &:hover {
        color: #d93600;
    }
    
    &:active {
        color: #ffffff;
    }

    &--disabled {
        color: #322c2c;
        pointer-events: none;
    }
}
</style>