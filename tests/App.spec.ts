import { expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import App from '../src/App.vue'
import userEvent from '@testing-library/user-event'

test('displays the default life tracker for two players', () => {
  const { getAllByText } = render(App)

  expect(getAllByText('20').length).toBe(2)
  expect(getAllByText('-').length).toBe(2)
  expect(getAllByText('+').length).toBe(2)
})

test('handle lives of the players separately - other approach', async () => {
  const { getAllByText, getByText } = render(App)
  const decreasePlayerOne = getAllByText('-')[0]
  const increasePlayerTwo = getAllByText('+')[1]
  expect(getAllByText('20').length).toBe(2)

  await userEvent.click(decreasePlayerOne)
  expect(getByText('19'))

  await userEvent.click(increasePlayerTwo)
  expect(getByText('21'))
})
