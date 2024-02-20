<script setup lang="ts">
import { ref, computed } from 'vue'

import AppInput from '@/components/app/AppInput.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCard from '@/components/app/AppCard.vue'

interface Props {
  isUpdateTodo: boolean
}

const model = defineModel()
defineProps<Props>()
const emits = defineEmits<{
  (e: 'onClick'): void
}>()

const input = ref<InstanceType<typeof AppInput> | null>()

const handleClick = () => {
  emits('onClick')
  model.value = ''
  input.value?.focusInput()
}

const disabledButton = computed(() => (model.value as string).length < 5)
</script>

<template>
  <AppCard add-class="flex-row">
    <AppInput v-model="model" placeholder="Type your todo" />
    <AppButton :disabled="disabledButton" @click="handleClick">
      {{ isUpdateTodo ? 'Update' : 'Save' }}
    </AppButton>
  </AppCard>
</template>
