import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppButton from '@/components/app/AppButton.vue'

describe('button', () => {
  it('should render text default without assign slot', () => {
    const button = mount(AppButton, { props: {} })
    expect(button.text()).toContain('Button')
  })
})
