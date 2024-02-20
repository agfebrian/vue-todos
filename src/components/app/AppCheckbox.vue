<script setup lang="ts">
interface Props {
  name?: string
  id?: string
}

const model = defineModel()
defineProps<Props>()
</script>

<template>
  <input v-model="model" type="checkbox" :name="name" :id="id" class="cursor-pointer" />
</template>
