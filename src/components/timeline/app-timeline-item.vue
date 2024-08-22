<script setup>
import AppSelect from './app-select.vue';


const props = defineProps({
    timelineItem: {
        type: Object
    }
})
const hourLinkClasses = [
    'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
    props.timelineItem.hour === new Date().getHours() ? 'bg-purple-900 dont-black text-white' : 'bg-gray-100 text-gray-500'
]

const options = [
    { value: 1, label: 'Codinng' },
    { value: 2, label: 'Training' },
    { value: 3, label: 'Reading' },
]

const selectActiviteID = 3
</script>

<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 py-20 px-4">
        <a href="#" :class="hourLinkClasses">{{
            timelineItem.hour }}:00</a>
        <div class="flex gap-2">
            <AppSelect :selected="selectActiviteID" :options="options" placeholder="Rest" />
        </div>
    </li>
</template>

<style lang="scss" scoped></style>