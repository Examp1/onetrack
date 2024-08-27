<script setup>
import { ref } from 'vue';
import AppSelect from './app-select.vue';
import { isTimelineItemValid } from '@/validators';
import TheTimelineHour from './the-timeline-hour.vue';

defineProps({
    timelineItem: {
        type: Object,
        validator: isTimelineItemValid
    },
    activitySelectOptions: {
        type: Array,
        required: true
    }
})



const selectActiviteID = ref()
</script>

<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 py-20 px-4">
        <TheTimelineHour :hour="timelineItem.hour" />
        <div class="flex gap-2">
            <AppSelect :selected="selectActiviteID" :options="activitySelectOptions" placeholder="Rest"
                @select="selectActiviteID = $event" />
        </div>
    </li>
</template>

<style lang="scss" scoped></style>