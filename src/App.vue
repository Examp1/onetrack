<script setup>
import theHeader from '@/components/navigations/the-header.vue'
import theNav from '@/components/navigations/the-nav.vue'
import theTimiline from '@/pages/the-timeline.vue'
import theProgress from '@/pages/the-progress.vue'
import theActivities from '@/pages/the-activities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { ref } from "vue"
import { generateActivitySelectOptions, generateTimelimeItems, normalizedPAgeHash } from '@/functions'

const currentPage = ref(normalizedPAgeHash())


const goTo = (page) => {
  currentPage.value = page
}

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value);
const timelineItems = generateTimelimeItems()

const deleteActivity = (activity) => {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
const createActivity = (activity) => {
  activities.value.push(activity)
}
</script>

<template>
  <theHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <theTimiline v-show="currentPage === PAGE_TIMELINE" :activity-select-options="activitySelectOptions"
      :timeline-items="timelineItems" />
    <theActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" @deleteActivity="deleteActivity"
      @createActivity="createActivity" />
    <theProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <theNav :current-page="currentPage" @updateCurrentPage="goTo($event)" />
</template>

<style scoped></style>