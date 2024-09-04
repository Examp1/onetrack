<script setup>
import theHeader from '@/components/navigations/the-header.vue'
import theNav from '@/components/navigations/the-nav.vue'
import theTimiline from '@/pages/the-timeline.vue'
import theProgress from '@/pages/the-progress.vue'
import theActivities from '@/pages/the-activities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { computed, ref } from "vue"
import { generateActivities, generateActivitySelectOptions, generateTimelimeItems, normalizedPAgeHash } from '@/functions'

const currentPage = ref(normalizedPAgeHash())


const goTo = (page) => {
  currentPage.value = page
}

const activities = ref(generateActivities())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));
const timelineItems = ref(generateTimelimeItems())

const deleteActivity = (activity) => {
  timelineItems.value.forEach(timelineItem => {
    if (timelineItem.activityID === activity.id) {
      timelineItem.activityID = null
    }
  })

  activities.value.splice(activities.value.indexOf(activity), 1)
}
const createActivity = (newActivity) => {
  activities.value.push(newActivity)
}
function setTimelineItemActivity({ timelineItem, activity }) {
  timelineItem.activityID = activity?.id || null
}
</script>

<template>
  <theHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <theTimiline v-show="currentPage === PAGE_TIMELINE" :activity-select-options="activitySelectOptions"
      :activities="activities" :timeline-items="timelineItems" @setTimelineItemActivity="setTimelineItemActivity" />
    <theActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" @deleteActivity="deleteActivity"
      @createActivity="createActivity" />
    <theProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <theNav :current-page="currentPage" @updateCurrentPage="goTo($event)" />
</template>

<style scoped></style>