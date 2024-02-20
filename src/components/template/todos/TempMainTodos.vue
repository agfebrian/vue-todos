<script setup lang="ts">
import { ref } from 'vue'

import AppCard from '@/components/app/AppCard.vue'
import HeaderTodos from './TempHeaderTodos.vue'
import AppTab from '@/components/app/AppTab.vue'
import TempItemTodos from '@/components/template/todos/TempItemTodos.vue'

import type { Todo } from '@/types'

const activeTab = ref<number>(0)
const todos = ref<Todo[]>([
  {
    id: 1,
    todo: 'Todo 1',
    isCompleted: false
  },
  {
    id: 2,
    todo: 'Todo 2',
    isCompleted: false
  }
])
</script>

<template>
  <main class="flex flex-col gap-4">
    <HeaderTodos />
    <AppCard>
      <!-- tab -->
      <AppTab v-model="activeTab" :items="['On Progress', 'Done']" />

      <!-- todos -->
      <div class="rounded-app w-full overflow-hidden bg-blue-100">
        <div class="flex flex-col justify-center">
          <TempItemTodos
            v-for="todo in todos"
            :key="todo.id"
            v-model="todo.isCompleted"
            :todo="todo"
          />
        </div>
      </div>
    </AppCard>
  </main>
</template>
