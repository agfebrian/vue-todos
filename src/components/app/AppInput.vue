<script setup lang="ts">
interface Props {
  text?: string
  placeholder?: string
}

const model = defineModel()
withDefaults(defineProps<Props>(), {
  text: 'text'
})
</script>

<template>
  <input
    v-model="model"
    :type="text"
    :placeholder="placeholder"
    class="rounded-app w-full border border-blue-300/50 p-3 outline-none focus:border-blue-500"
  />
</template>
