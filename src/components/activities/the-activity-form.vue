<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
import AppButton from "@/components/timeline/app-button.vue";


import { ref, nextTick } from "vue";
import { isActivityValid } from "@/validators";
import { id } from "@/functions";
const activityName = ref('')

const emit = defineEmits({
    createActivity: isActivityValid
})

const addNewActivity = async () => {
    emit('createActivity', {
        id: id(),
        name: activityName.value,
        secondsToComplete: 0
    })
    activityName.value = ''
    await nextTick()
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })

}

</script>

<template>
    <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="addNewActivity">
        <input type="text" class="w-full rounded border px-4 text-xl" placeholder="activity name"
            v-model="activityName">
        <AppButton :disabled="activityName.trim() === ''">
            <PlusIcon class="h-7"></PlusIcon>
        </AppButton>
    </form>
</template>

<style lang="scss" scoped></style>