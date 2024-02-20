<script setup lang="ts">
import { ref, provide } from 'vue'

import TempHeader from '@/components/template/globals/TempHeader.vue'
import MainTodos from '@/components/template/todos/TempMainTodos.vue'
import AppContainer from '@/components/app/AppContainer.vue'
import AppButton from '@/components/app/AppButton.vue'

const toggleSearch = ref<boolean>(false)
provide('toggleSearch', { toggleSearch })
</script>

<template>
  <AppContainer class="flex flex-col gap-4 pt-16">
    <TempHeader>
      <AppButton variant="secondary" size="sm" @click="toggleSearch = !toggleSearch">
        <VIcon v-if="!toggleSearch" name="hi-search" />
        <VIcon v-else name="bi-x-lg" fill="#fd2020" />
      </AppButton>
    </TempHeader>
    <MainTodos />
  </AppContainer>
</template>
