<script setup>
import { ref } from 'vue';
import AppSelect from './app-select.vue';
import { isTimelineItemValid } from '@/validators';
import TheTimelineHour from './the-timeline-hour.vue';

defineProps({
    timelineItem: {
        type: Object,
        validator: isTimelineItemValid
    }
})


const options = [
    { value: 1, label: 'Codinng' },
    { value: 2, label: 'Training' },
    { value: 3, label: 'Reading' },
]
const selectActiviteID = ref()
</script>

<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 py-20 px-4">
        <TheTimelineHour :hour="timelineItem.hour" />
        <div class="flex gap-2">
            <AppSelect :selected="selectActiviteID" :options="options" placeholder="Rest"
                @select="selectActiviteID = $event" />
        </div>
    </li>
</template>

<style lang="scss" scoped></style>