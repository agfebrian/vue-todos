<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  addClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const colorize = computed(() => {
  let result: string = ''
  switch (props.variant) {
    case 'primary':
      result = 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
      break
    case 'secondary':
      result = 'bg-blue-100 text-blue-500 hover:bg-blue-200 active:bg-blue-300'
      break
  }

  // check if disabled is true
  if (props.disabled) {
    const splitted = result.split(' ')
    result = splitted.slice(0, 2).join(' ')
  }

  return result
})

const sizing = computed(() => {
  let result: string = ''
  switch (props.size) {
    case 'sm':
      result = 'p-2 text-sm'
      break
    case 'md':
      result = 'p-3 text-base'
      break
    case 'lg':
      result = 'p-4 text-lg'
      break
  }
  return result
})

const inactive = computed(() => (props.disabled ? 'opacity-50' : ''))
</script>

<template>
  <button
    :disabled="disabled"
    :class="
      twMerge(
        'rounded-app font-semibold shadow transition-colors',
        sizing,
        colorize,
        addClass,
        inactive
      )
    "
  >
    <slot>Button</slot>
  </button>
</template>
