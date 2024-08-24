<script setup>
import appNavItem from '@/components/navigations/app-nav-item.vue'
import { NAV_ITEMS } from '@/constants.js'
import { isPageValid } from '@/validators';
defineProps({
    currentPage: {
        type: String,
        required: true,
        validator: isPageValid
    },
})
const emits = defineEmits({
    updateCurrentPage: isPageValid
})

</script>
<template>
    <nav class="sticky bottom-0 z-10 bg-white">
        <ul class="flex items-center justify-around border-t">
            <appNavItem v-for="(icon, page) in NAV_ITEMS" :key="page" :navItem="page"
                :class="{ 'bg-gray-200 pointer-events-none': currentPage === page }"
                @click="emits('updateCurrentPage', page)">
                <component :is="icon" class="h-6" />
            </appNavItem>
        </ul>
    </nav>
</template>



<style lang="scss" scoped></style>