<script setup>
import { isHourValid } from '@/validators';

const props = defineProps({
    hour: {
        type: Number,
        validator: isHourValid
    }
})

const formatedHour = `${props.hour.toString().padStart(2, 0)}:00`

const classes = [
    'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
    props.hour === new Date().getHours() ? 'bg-purple-900 dont-black text-white' : 'bg-gray-100 text-gray-500'
]

</script>

<template>
    <a href="#" :class="classes">{{ formatedHour }}</a>
</template>

<style lang="scss" scoped></style>