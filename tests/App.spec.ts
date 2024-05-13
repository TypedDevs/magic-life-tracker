import { test, expect } from 'vitest'

import { render } from '@testing-library/vue'
import App from '@/App.vue'

test('displays the default lives of two players', () => {
  const { getAllByText } = render(App)
  expect(getAllByText('20').length).toBe(2)
})

test('displays the decrease live buttons', () => {
  const { getAllByText } = render(App)
  expect(getAllByText('-').length).toBe(2)
})

test('displays the increase live buttons', () => {
  const { getAllByText } = render(App)
  expect(getAllByText('+').length).toBe(2)
})
