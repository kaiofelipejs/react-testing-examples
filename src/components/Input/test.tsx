import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '.'

describe('<Input />', () => {
  const onChange = jest.fn()
  const value = 'testing'

  it('should render with value', () => {
    render(<Input value={value} onChange={onChange} />)

    expect(screen.getByRole('textbox')).toHaveValue(value)
  })

  it('should trigger onChange when user types', () => {
    render(<Input onChange={onChange} />)

    const inputElement = screen.getByRole('textbox')

    userEvent.type(inputElement, value)

    expect(onChange).toHaveBeenCalled()
  })
})
