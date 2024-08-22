<script setup>

import theLogo from '@/components/header/the-logo.vue'
import theHeaderProgress from '@/components/header/the-header-progress.vue'

const emit = defineEmits('goToTimeline', 'goToProgress')
</script>

<template>
    <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
        <theLogo @click="emit('goToTimeline')" />
        <theHeaderProgress @click="emit('goToProgress')" />
    </header>
</template>


<style lang="scss" scoped></style>