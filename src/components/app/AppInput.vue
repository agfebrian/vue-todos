<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  text?: string
  placeholder?: string
}

const model = defineModel()
withDefaults(defineProps<Props>(), {
  text: 'text'
})

const input = ref<HTMLInputElement | null>()
const focusInput = () => input.value?.focus()

defineExpose({
  focusInput
})
</script>

<template>
  <input
    v-model="model"
    ref="input"
    :type="text"
    :placeholder="placeholder"
    class="rounded-app w-full border border-blue-300/50 p-3 outline-none focus:border-blue-500"
  />
</template>
