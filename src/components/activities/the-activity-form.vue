<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
import AppButton from "@/components/timeline/app-button.vue";


import { ref } from "vue";
import { isActivityValid } from "@/validators";
const activity = ref('')

const emit = defineEmits({
    createActivity: isActivityValid
})

const addNewActivity = () => {
    emit('createActivity', activity.value)
    activity.value = ''
}

</script>

<template>
    <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="addNewActivity">
        <input type="text" class="w-full rounded border px-4 text-xl" placeholder="activity name" v-model="activity">
        <AppButton :disabled="activity.trim() === ''">
            <PlusIcon class="h-7"></PlusIcon>
        </AppButton>
    </form>
</template>

<style lang="scss" scoped></style>