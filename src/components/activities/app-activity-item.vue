<script setup>
import AppButton from "@/components/timeline/app-button.vue";
import AppSelect from "@/components/timeline/app-select.vue";
import { PERIOD_SELECT_OPTIONS } from "@/constants";
import { isActivityValid, isNumber, isUndefined } from "@/validators";
import { TrashIcon } from '@heroicons/vue/24/outline'


defineProps({
    activity: {
        type: Object,
        required: true,
        validate: isActivityValid
    }
})

const emit = defineEmits({
    delete: isUndefined,
    secondsToComplete: isNumber
})

</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <AppButton type="danger" @click="emit('delete')">
                <TrashIcon class="h-8"></TrashIcon>
            </AppButton>
            <span class="trancate text-xl">{{ activity.name }}</span>
        </div>
        <div class="flex gap-2">
            <AppSelect placeholder="hh:mm" :options="PERIOD_SELECT_OPTIONS"
                :selected="activity.secondsToComplete || null" @select="emit('secondsToComplete', $event || 0)">
            </AppSelect>
        </div>
    </li>
</template>

<style lang="scss" scoped></style>