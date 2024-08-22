<script setup>
const props = defineProps({
    navItem: String
})
</script>
<template>
    <li class="flex-1">
        <a :href="`#${props.navItem}`" class="flex flex-col items-center p-2 text-sm capitalize">
            <slot></slot>
            {{ props.navItem }}
        </a>
    </li>
</template>



<style lang="scss" scoped></style>