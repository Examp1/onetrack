<script setup>
import AppActivityItem from "@/components/activities/app-activity-item.vue";
import TheActivityEmptyState from "@/components/activities/the-activity-empty-state.vue";
import TheActivityForm from "@/components/activities/the-activity-form.vue";
import { isActivityValid, isNumber, validateActivities } from "@/validators";

defineProps({
    activities: {
        type: Array,
        required: true,
        validator: validateActivities
    }
})

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid,
    setActivitySecondsToComplete(activity, secondsToComplete) {
        return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean)
    }
})
function setSecondsToComplete(activity, secondsToComplete) {
    emit('setActivitySecondsToComplete', activity, secondsToComplete);
}

</script>

<template>
    <div class="flex flex-col grow">
        <ul v-if="activities.length" class="grow">
            <AppActivityItem v-for="activity in activities" :key="activity.id" :activity="activity"
                @delete="emit('deleteActivity', activity)" @secondsToComplete="setSecondsToComplete(activity, $event)">
            </AppActivityItem>
        </ul>
        <TheActivityEmptyState v-else></TheActivityEmptyState>
        <TheActivityForm @createActivity="emit('createActivity', $event)"></TheActivityForm>
    </div>
</template>

<style lang="scss" scoped></style>