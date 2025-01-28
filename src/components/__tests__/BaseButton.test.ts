import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  beforeEach(() => {
    // Create a new user for each test
    userEvent.setup()
  })

  it('renders with default props', () => {
    render(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('base-button--primary')
    expect(button).not.toBeDisabled()
  })

  it('renders with different variants', () => {
    const { rerender } = render(BaseButton, {
      props: { variant: 'secondary' },
      slots: { default: 'Secondary Button' }
    })

    let button = screen.getByRole('button')
    expect(button).toHaveClass('base-button--secondary')

    rerender({ variant: 'danger' })
    button = screen.getByRole('button')
    expect(button).toHaveClass('base-button--danger')
  })

  it('disables the button when disabled prop is true', () => {
    render(BaseButton, {
      props: { disabled: true },
      slots: { default: 'Disabled Button' }
    })

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('shows loading state and disables button when loading prop is true', () => {
    render(BaseButton, {
      props: { loading: true },
      slots: { default: 'Loading Button' }
    })

    const button = screen.getByRole('button')
    expect(button).toHaveClass('base-button--loading')
    expect(button).toBeDisabled()
    expect(button.querySelector('.base-button__loader')).toBeInTheDocument()
  })

  it('emits click event when clicked', async () => {
    const { emitted } = render(BaseButton, {
      slots: { default: 'Click me' }
    })

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(emitted()).toHaveProperty('click')
    expect(emitted().click).toHaveLength(1)
  })

  it('does not emit click event when disabled', async () => {
    const { emitted } = render(BaseButton, {
      props: { disabled: true },
      slots: { default: 'Disabled Button' }
    })

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(emitted()).not.toHaveProperty('click')
  })

  it('does not emit click event when loading', async () => {
    const { emitted } = render(BaseButton, {
      props: { loading: true },
      slots: { default: 'Loading Button' }
    })

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(emitted()).not.toHaveProperty('click')
  })
})
