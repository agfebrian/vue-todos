<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue'
import AppInput from '@/components/app/AppInput.vue'

interface Props {
  show: boolean
}

const model = defineModel()
defineProps<Props>()
</script>

<template>
  <AppCard
    :add-class="
      show
        ? 'relative translate-y-0 opacity-100 visible'
        : 'absolute translate-y-16 opacity-0 invisible'
    "
  >
    <AppInput v-model="model" placeholder="Search your todos" />
  </AppCard>
</template>
