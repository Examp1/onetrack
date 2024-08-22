<script setup>
import AppTimelineItem from "@/components/timeline/app-timeline-item.vue";
import { generateTimelimeItems } from "@/functions"

const timelineItems = generateTimelimeItems()

</script>

<template>
    <div class="mt-7">
        <ul>
            <AppTimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour"
                :timeline-item="timelineItem">
            </AppTimelineItem>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>