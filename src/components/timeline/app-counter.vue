<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline';
import AppButton from './app-button.vue';
import { isNumber } from '@/validators';
import { formatSeconds } from '@/functions';
defineProps({
    seconds: {
        type: Number,
        default: 0,
        validator: isNumber
    }
})


</script>

<template>
    <div class="flex gap-2">
        <AppButton type="danger">
            <ArrowPathIcon class="h-8"></ArrowPathIcon>
        </AppButton>
        <div class="flex items-center grow rounded bg-gray-100 px-2 font-mono text-3xl">{{ formatSeconds(seconds) }}
        </div>
        <AppButton type="warning">
            <PauseIcon class="h-8"></PauseIcon>
        </AppButton>
        <AppButton type="success">
            <PlayIcon class="h-8"></PlayIcon>
        </AppButton>
    </div>
</template>

<style lang="scss" scoped></style>