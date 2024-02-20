<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  addClass?: string
}

defineProps<Props>()
</script>

<template>
  <div :class="twMerge('rounded-app flex flex-col items-center gap-3 bg-white p-4', addClass)">
    <slot />
  </div>
</template>
