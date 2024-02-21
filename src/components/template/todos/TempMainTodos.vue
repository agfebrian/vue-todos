<script setup lang="ts">
import { ref, watch, computed, inject } from 'vue'

import AppCard from '@/components/app/AppCard.vue'
import HeaderTodos from './TempHeaderTodos.vue'
import AppTab from '@/components/app/AppTab.vue'
import TempItemTodos from '@/components/template/todos/TempItemTodos.vue'
import TempSearchTodos from '@/components/template/todos/TempSearchTodos.vue'

import type { Todo } from '@/types'

const { toggleSearch } = inject('toggleSearch', {
  toggleSearch: false
})

const itemsTab = ['All', 'On Progress', 'Done']
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
const showTodos = ref<Todo[]>([...todos.value])
const todosCompleted = computed(() => todos.value.filter((item) => item.isCompleted))
const todosUncompleted = computed(() => todos.value.filter((item) => !item.isCompleted))

watch(activeTab, (newVal) => {
  if (newVal === 1) {
    showTodos.value = todosUncompleted.value
  } else if (newVal === 2) {
    showTodos.value = todosCompleted.value
  } else {
    showTodos.value = todos.value
  }
  searchTodo.value = ''
})

watch(
  todos,
  () => {
    refreshShowTodos()
  },
  { deep: true }
)

const textTodo = ref<string>('')
const searchTodo = ref<string>('')
const isUpdateTodo = ref<boolean>(false)
const selectedTodo = ref<Todo>({} as Todo)

watch(searchTodo, (newVal) => {
  if (newVal) {
    showTodos.value = showTodos.value.filter((item) =>
      item.todo.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
    )
  } else {
    refreshShowTodos()
  }
})

const addTodo = () => {
  if (isUpdateTodo.value) {
    updateTodo()
    // reset data that need to updated todo
    resetEditTodo()
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

const cancelEditTodo = () => {
  resetEditTodo()
  textTodo.value = ''
}

const resetEditTodo = () => {
  isUpdateTodo.value = false
  selectedTodo.value = {} as Todo
}

const removeTodo = (id: number | string) => {
  todos.value = todos.value.filter((item) => item.id !== id)
  searchTodo.value = ''
}

const refreshShowTodos = () => {
  if (activeTab.value === 1) {
    showTodos.value = todosUncompleted.value
  } else if (activeTab.value === 2) {
    showTodos.value = todosCompleted.value
  } else {
    showTodos.value = todos.value
  }
}
</script>

<template>
  <main class="flex flex-col gap-4">
    <TempSearchTodos v-model="searchTodo" :show="toggleSearch" />
    <HeaderTodos
      v-model="textTodo"
      :is-update-todo="isUpdateTodo"
      @on-click="addTodo"
      @on-close="cancelEditTodo"
    />
    <AppCard>
      <!-- tab -->
      <AppTab v-model="activeTab" :items="itemsTab" />

      <!-- todos -->
      <div class="rounded-app w-full overflow-hidden bg-blue-100">
        <div v-if="showTodos.length" data-todos class="flex flex-col justify-center">
          <TempItemTodos
            v-for="todo in showTodos"
            :key="todo.id"
            v-model="todo.isCompleted"
            :todo="todo"
            @on-update="editTodo"
            @on-remove="removeTodo"
          />
        </div>
        <div v-else class="flex min-h-16 items-center justify-center">
          <h2 class="text-xl font-semibold text-gray-400">There no todos here</h2>
        </div>
      </div>
    </AppCard>
  </main>
</template>
