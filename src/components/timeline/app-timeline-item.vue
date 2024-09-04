<script setup>
import AppSelect from './app-select.vue';
import { isActivityValid, isNull, isTimelineItemValid, validateActivities } from '@/validators';
import TheTimelineHour from './the-timeline-hour.vue';

const props = defineProps({
    timelineItem: {
        type: Object,
        validator: isTimelineItemValid
    },
    activitySelectOptions: {
        type: Array,
        required: true
    },
    activities: {
        type: Array,
        required: true,
        validator: validateActivities
    }
})

const emit = defineEmits({
    selectActivity(activity) {
        return isNull(activity) || isActivityValid(activity)
    }
})

function selectActivite(id) {
    emit('selectActivity', props.activities.find((activity) => activity.id == id) || null)
}

</script>

<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 py-20 px-4">
        <TheTimelineHour :hour="timelineItem.hour" />
        <div class="flex gap-2">
            <AppSelect :selected="timelineItem.activityID" :options="activitySelectOptions" placeholder="Rest"
                @select="selectActivite" />
        </div>
    </li>
</template>

<style lang="scss" scoped></style>