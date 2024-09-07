<script setup>
import AppTimelineItem from "@/components/timeline/app-timeline-item.vue";
import { isActivityValid, isTimelineItemValid, validateActivities, validateSelectOptions } from "@/validators";

defineProps({
    activitySelectOptions: {
        type: Array,
        required: true,
        validator: validateSelectOptions
    },
    timelineItems: {
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
    setTimelineItemActivity(timelineItem, activity) {
        return [
            isTimelineItemValid(timelineItem),
            isActivityValid(activity),
        ].every(Boolean)
    }
});

</script>

<template>
    <div class="mt-7">
        <ul>
            <AppTimelineItem v-for="timelineItem in timelineItems" :activity-select-options="activitySelectOptions"
                :key="timelineItem.hour" :timeline-item="timelineItem" :activities="activities" @selectActivity="emit('setTimelineItemActivity',
                    timelineItem, $event
                )">
            </AppTimelineItem>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>