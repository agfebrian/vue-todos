<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  forLabel?: string
  text: string
  addClass?: string
}

defineProps<Props>()
</script>

<template>
  <label
    :for="forLabel"
    :class="twMerge('w-full cursor-pointer font-semibold text-gray-950', addClass)"
  >
    {{ text }}
  </label>
</template>
