<script setup>
import AppButton from "@/components/timeline/app-button.vue";
import AppSelect from "@/components/timeline/app-select.vue";
import { PERIOD_SELECT_OPTIONS } from "@/constants";
import { isActivityValid, isUndefined } from "@/validators";
import { TrashIcon } from '@heroicons/vue/24/outline'
import { ref } from "vue";


defineProps({
    activity: {
        type: String,
        required: true,
        validate: isActivityValid
    }
})

const emit = defineEmits({
    delete: isUndefined
})

const secondsToComplete = ref(null)

</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <AppButton type="danger" @click="emit('delete')">
                <TrashIcon class="h-8"></TrashIcon>
            </AppButton>
            <span class="trancate text-xl">{{ activity }}</span>
        </div>
        <div class="flex gap-2">
            <AppSelect placeholder="h:mm" :options="PERIOD_SELECT_OPTIONS" :selected="secondsToComplete"
                @select="secondsToComplete = $event"></AppSelect>
        </div>
    </li>
</template>

<style lang="scss" scoped></style>