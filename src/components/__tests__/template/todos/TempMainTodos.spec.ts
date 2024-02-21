import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TempMainTodos from '@/components/template/todos/TempMainTodos.vue'
import TempItemTodos from '@/components/template/todos/TempItemTodos.vue'

const mountMainTodos = () => {
  const wrapper = mount(TempMainTodos)
  return wrapper
}

const getTodos = () => mountMainTodos().findAllComponents(TempItemTodos)

describe('main todos', () => {
  it('should render default todos', () => {
    expect(getTodos()).toHaveLength(2)
  })
})
