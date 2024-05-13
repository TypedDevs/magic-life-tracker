import { test, expect } from 'vitest'
import { render } from '@testing-library/vue'
import App from '../src/App.vue'

test('displays the default life tracker for two players', () => {
  const { getAllByText } = render(App)
  expect(getAllByText('20').length).toBe(2)
  expect(getAllByText('-').length).toBe(2)
  expect(getAllByText('+').length).toBe(2)
})
