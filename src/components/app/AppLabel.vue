<script setup lang="ts">
interface Props {
  forLabel?: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <label :for="forLabel" class="w-full cursor-pointer font-semibold text-gray-950">{{
    text
  }}</label>
</template>
