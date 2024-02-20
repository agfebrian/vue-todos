<script setup lang="ts">
import AppButton from '@/components/app/AppButton.vue'
import AppCheckbox from '@/components/app/AppCheckbox.vue'
import AppLabel from '@/components/app/AppLabel.vue'

import type { Todo } from '@/types'

interface Props {
  todo: Todo
}

const model = defineModel()
defineProps<Props>()
const emits = defineEmits<{
  (e: 'onUpdate', id: number | string): void
  (e: 'onRemove', id: number | string): void
}>()
</script>

<template>
  <div
    class="flex items-center justify-between border-b px-2 py-3 transition-colors hover:bg-blue-200"
  >
    <div class="flex items-center gap-3">
      <AppCheckbox v-model="model" :id="String(todo.id)" />
      <AppLabel :for-label="String(todo.id) as string" :text="todo.todo" />
    </div>
    <div class="flex items-center gap-3">
      <AppButton variant="secondary" size="sm" @click="emits('onUpdate', todo.id)">
        <VIcon name="bi-pencil-fill" />
      </AppButton>
      <AppButton variant="secondary" size="sm" @click="emits('onRemove', todo.id)">
        <VIcon name="bi-trash-fill" fill="#fd2020" />
      </AppButton>
    </div>
  </div>
</template>
