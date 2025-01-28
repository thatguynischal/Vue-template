import '@testing-library/jest-dom'
import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/vue'
import { afterEach } from 'vitest'

// Extend Vitest's expect method with methods from jest-dom
expect.extend(matchers)

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
