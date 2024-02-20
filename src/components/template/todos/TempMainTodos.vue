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

const textTodo = ref<string>('')
const isUpdateTodo = ref<boolean>(false)
const selectedTodo = ref<Todo>({} as Todo)

const addTodo = () => {
  if (isUpdateTodo.value) {
    updateTodo()
    // reset data that need to updated todo
    isUpdateTodo.value = false
    selectedTodo.value = {} as Todo
    return
  }

  todos.value.push({
    id: Number(Math.random()),
    todo: textTodo.value,
    isCompleted: false
  })
}

const updateTodo = () => {
  const index = todos.value.findIndex((item) => item.id === selectedTodo.value.id)
  if (index != -1) {
    todos.value[index] = { ...selectedTodo.value, todo: textTodo.value }
  }
}

const editTodo = (id: number | string) => {
  const todo = todos.value.find((item) => item.id === id)
  isUpdateTodo.value = true
  selectedTodo.value = todo!
  textTodo.value = todo!.todo
}

const removeTodo = (id: number | string) => {
  todos.value = todos.value.filter((item) => item.id !== id)
}
</script>

<template>
  <main class="flex flex-col gap-4">
    <HeaderTodos v-model="textTodo" :is-update-todo="isUpdateTodo" @on-click="addTodo" />
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
            @on-update="editTodo"
            @on-remove="removeTodo"
          />
        </div>
      </div>
    </AppCard>
  </main>
</template>
