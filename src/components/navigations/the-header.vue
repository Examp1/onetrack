<script setup>
import theLogo from '@/components/header/the-logo.vue'
import theHeaderProgress from '@/components/header/the-header-progress.vue'
import { isPageValid } from '@/validators';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';

const emit = defineEmits({
    navigate: isPageValid
})
</script>

<template>
    <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
        <theLogo @click="emit('navigate', PAGE_TIMELINE)" />
        <theHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
    </header>
</template>


<style lang="scss" scoped></style>