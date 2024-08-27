<script setup>
import { BUTTON_TYPE } from '@/constants';
import { isButtonTypeValid } from '@/validators';

defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: isButtonTypeValid
    }
})
</script>

<template>
    <button :class="BUTTON_TYPE[type]" class="rounded p-3 disabled:cursor-not-allowed disabled:opacity-50">
        <slot />
    </button>
</template>

<style lang="scss" scoped></style>