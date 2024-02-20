<script setup lang="ts">
import TempHeader from '@/components/template/globals/TempHeader.vue'
import MainTodos from '@/components/template/todos/TempMainTodos.vue'
import AppContainer from '@/components/app/AppContainer.vue'
</script>

<template>
  <AppContainer class="flex flex-col gap-4 pt-16">
    <TempHeader />
    <MainTodos />
  </AppContainer>
</template>
