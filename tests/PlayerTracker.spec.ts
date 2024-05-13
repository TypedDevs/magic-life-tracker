import { test, expect } from 'vitest'
import { render } from '@testing-library/vue'
import PlayerTracker from '../src/PlayerTracker.vue'
import userEvent from '@testing-library/user-event'

test('increases the player lives when use clicks the increase button', async () => {
  const { getByText } = render(PlayerTracker)

  expect(getByText('20'))

  await userEvent.click(getByText('+'))

  expect(getByText('21'))
})
