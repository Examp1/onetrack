<script setup>
import AppButton from './app-button.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '@/validators';
import { computed } from 'vue';
const props = defineProps({
    options: {
        type: Array,
        required: true,
        validator: validateSelectOptions
    },
    placeholder: {
        type: String,
        default: 'Rest'
    },
    selected: {
        type: Number
    }
})

const emit = defineEmits({
    select: isNumberOrNull
})


const isNotSelected = computed(() => {
    return isUndefinedOrNull(props.selected)
})

</script>

<template>
    <AppButton @click="emit('select', null)" type="neutral">
        <XMarkIcon class="h-8"></XMarkIcon>
    </AppButton>
    <select class="w-full truncate rounded bg-gray-100 py-2 px-2 text-2xl"
        @change="emit('select', +$event.target.value)">
        <option :selected="isNotSelected" disabled value="null">{{ placeholder }}</option>
        <option v-for="{ value, label } in options" :value="value" :key="value" :selected="value === selected">{{ label
            }}</option>
    </select>
</template>

<style lang="scss" scoped></style>