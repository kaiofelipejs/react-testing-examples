import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from '.'

describe('<Form />', () => {
  it('should render form with one input and button', () => {
    render(<Form />)

    const input = screen.getByLabelText(/name:/i)
    const button = screen.getByRole('button', { name: /submit/i })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should update input value when type', () => {
    render(<Form />)
    const input = screen.getByLabelText(/name:/i)

    const newValue = 'new value'
    userEvent.type(input, newValue)

    expect(input).toHaveValue(newValue)
  })

  describe('should call console.log when submit', () => {
    beforeEach(() => {
      console.log = jest.fn()
      render(<Form />)
    })

    it('when name is empty', () => {
      const button = screen.getByRole('button', { name: /submit/i })

      userEvent.click(button)

      expect(console.log).toBeCalledWith('Name is empty :(')
    })

    it('when name is present', () => {
      const button = screen.getByRole('button', { name: /submit/i })
      const input = screen.getByLabelText(/name:/i)

      const newValue = 'new value'
      userEvent.type(input, newValue)
      userEvent.click(button)

      expect(console.log).toBeCalledWith(`Your name is ${newValue}`)
    })
  })
})
