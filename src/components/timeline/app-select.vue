<script setup>
import AppButton from './app-button.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

defineProps({
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        default: 'Rest'
    },
    selected: {
        type: Number
    }
})

</script>

<template>
    <AppButton>
        <XMarkIcon class="h-8"></XMarkIcon>
    </AppButton>
    <select class="w-full truncate rounded bg-gray-100 py-2 px-2 text-2xl">
        <option selected disabled value="">{{ placeholder }}</option>
        <option v-for="{ value, label } in options" :value="value" :key="value" :selected="value === selected">{{ label
            }}</option>
    </select>
</template>

<style lang="scss" scoped></style>