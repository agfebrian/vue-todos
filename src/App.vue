<script setup lang="ts">
import TempHeader from '@/components/template/globals/TempHeader.vue'
import TempTodos from '@/components/template/todos/TempTodos.vue'
import AppContainer from '@/components/app/AppContainer.vue'
</script>

<template>
  <AppContainer class="flex flex-col gap-4 pt-16">
    <TempHeader />
    <main>
      <TempTodos />
    </main>
  </AppContainer>
</template>
