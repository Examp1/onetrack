<script setup>
import AppActivityItem from "@/components/activities/app-activity-item.vue";
import TheActivityForm from "@/components/activities/the-activity-form.vue";
import { isActivityValid, validateActivities } from "@/validators";

defineProps({
    activities: {
        type: Array,
        required: true,
        validator: validateActivities
    }
})

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid
})

</script>

<template>
    <div>
        <ul>
            <AppActivityItem v-for="activity in activities" :key="activity" :activity="activity"
                @delete="emit('deleteActivity', activity)"></AppActivityItem>
        </ul>
        <TheActivityForm @createActivity="emit('createActivity', $event)"></TheActivityForm>
    </div>
</template>

<style lang="scss" scoped></style>