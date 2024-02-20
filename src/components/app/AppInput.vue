<script setup lang="ts">
import { computed, ref } from 'vue'
import { twMerge } from 'tailwind-merge'

import AppButton from './AppButton.vue'

interface Props {
  text?: string
  placeholder?: string
  icon?: boolean
  iconName?: string
  iconColor?: string
}

const model = defineModel()
const props = withDefaults(defineProps<Props>(), {
  text: 'text',
  iconName: 'bi-x-lg'
})
const emits = defineEmits<{
  (e: 'onClose'): void
}>()

const isIcon = computed(() => (props.icon ? 'pr-6' : ''))

const input = ref<HTMLInputElement | null>()
const focusInput = () => input.value?.focus()

defineExpose({
  focusInput
})
</script>

<template>
  <div class="relative flex w-full items-center">
    <input
      v-model="model"
      ref="input"
      :type="text"
      :placeholder="placeholder"
      :class="
        twMerge(
          'rounded-app w-full border border-blue-300/50 p-3 outline-none focus:border-blue-500',
          isIcon
        )
      "
    />
    <AppButton
      v-show="icon"
      variant="secondary"
      size="sm"
      add-class="absolute right-3"
      @click="emits('onClose')"
    >
      <VIcon :name="iconName" :fill="iconColor" />
    </AppButton>
  </div>
</template>
