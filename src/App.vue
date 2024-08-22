<script setup>
import theHeader from '@/components/navigations/the-header.vue'
import theNav from '@/components/navigations/the-nav.vue'
import theTimiline from '@/pages/the-timeline.vue'
import theProgress from '@/pages/the-progress.vue'
import theActivities from '@/pages/the-activities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constans'
import { ref } from "vue"
import { normalizedPAgeHash } from '@/functions'

const currentPage = ref(normalizedPAgeHash())


const goTo = (page) => {
  currentPage.value = page
}

</script>

<template>
  <theHeader @go-to-timeline="goTo(PAGE_TIMELINE)" @go-to-progress="goTo(PAGE_PROGRESS)" />
  <main class="flex flex-grow flex-col">
    <theTimiline v-show="currentPage === PAGE_TIMELINE" />
    <theActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <theProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <theNav :current-page="currentPage" @updateCurrentPage="goTo($event)" />
</template>

<style scoped></style>