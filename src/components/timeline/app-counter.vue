<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline';
import AppButton from './app-button.vue';
import { isHourValid, isNumber } from '@/validators';
import { formatSeconds } from '@/functions';
import { ref } from 'vue';
import { MILISECONDS_IN_SECONDS } from '@/constants';
const props = defineProps({
    seconds: {
        type: Number,
        default: 0,
        validator: isNumber
    },
    hour: {
        type: Number,
        required: true,
        validator: isHourValid
    }
})

const secondsCounter = ref(props.seconds)
const isRunning = ref(false)
const isStartButtonDisabled = props.hour !== new Date().getHours()

function start() {
    isRunning.value = setInterval(() => {
        secondsCounter.value++
    }, MILISECONDS_IN_SECONDS)
}
function stop() {
    clearInterval(isRunning.value)
    isRunning.value = false
}
function reset() {
    stop()
    secondsCounter.value = 0
}


</script>

<template>
    <div class="flex gap-2">
        <AppButton :disabled="!secondsCounter" type="danger" @click="reset">
            <ArrowPathIcon class="h-8"></ArrowPathIcon>
        </AppButton>
        <div class="flex items-center grow rounded bg-gray-100 px-2 font-mono text-3xl">{{ formatSeconds(secondsCounter)
            }}
        </div>
        <AppButton v-if="isRunning" type="warning" @click="stop">
            <PauseIcon class="h-8"></PauseIcon>
        </AppButton>
        <AppButton v-else type="success" :disabled="isStartButtonDisabled" @click="start">
            <PlayIcon class="h-8"></PlayIcon>
        </AppButton>
    </div>
</template>

<style lang="scss" scoped></style>