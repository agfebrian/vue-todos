<script setup lang="ts">
import AppButton from '@/components/app/AppButton.vue'

interface Props {
  items: string[]
}

const model = defineModel({ default: 0 })
defineProps<Props>()

const isActive = (index: number) => model.value === index
</script>

<template>
  <div class="rounded-app flex w-full items-center gap-3 p-1">
    <AppButton
      v-for="(tab, index) in items"
      :key="index"
      :variant="isActive(index) ? 'primary' : 'secondary'"
      size="sm"
      add-class="flex-1"
      @click="model = index"
    >
      {{ tab }}
    </AppButton>
  </div>
</template>
