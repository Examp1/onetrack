<script setup>
import AppTimelineItem from "@/components/timeline/app-timeline-item.vue";
import { validateSelectOptions } from "@/validators";

defineProps({
    activitySelectOptions: {
        type: Array,
        required: true,
        validator: validateSelectOptions
    },
    timelineItems: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="mt-7">
        <ul>
            <AppTimelineItem v-for="timelineItem in timelineItems" :activity-select-options="activitySelectOptions"
                :key="timelineItem.hour" :timeline-item="timelineItem">
            </AppTimelineItem>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>