import { test, expect } from 'vitest'
import { render } from '@testing-library/vue'
import App from '../src/App.vue'
import userEvent from '@testing-library/user-event'

test('displays the default life tracker for two players', () => {
  const { getAllByText } = render(App)

  expect(getAllByText('20').length).toBe(2)
  expect(getAllByText('-').length).toBe(2)
  expect(getAllByText('+').length).toBe(2)
})

test('handle lives of the players separately', async () => {
  const { getAllByText } = render(App)
  const decreasePlayerOne = getAllByText('-')[0]
  const increasePlayerTwo = getAllByText('+')[1]
  const [livesPlayerOne, livesPlayerTwo] = getAllByText('20')

  await userEvent.click(decreasePlayerOne)
  expect(livesPlayerOne.textContent).toContain('19')

  await userEvent.click(increasePlayerTwo)
  expect(livesPlayerTwo.textContent).toContain('21')
})
