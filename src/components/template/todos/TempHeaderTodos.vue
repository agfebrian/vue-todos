<script setup lang="ts">
import AppInput from '@/components/app/AppInput.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCard from '@/components/app/AppCard.vue'
</script>

<template>
  <AppCard add-class="flex-row">
    <AppInput placeholder="Type your todo" />
    <AppButton>Save</AppButton>
  </AppCard>
</template>
