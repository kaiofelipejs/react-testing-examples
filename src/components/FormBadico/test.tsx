import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormBadico from '.'

console.log = jest.fn()

describe('<FormBadico />', () => {
  const fakeName = 'fake name'
  const fakeEmail = 'email@email.com'
  const fakeWhatsapp = '48999999999'

  it('should render with title and description', () => {
    render(<FormBadico />)

    const title = screen.getByRole('heading', {
      name: /faça parte!/i
    })
    const description = screen.getByText(
      /nosso app estará pronto em breve, se cadastre para te avisarmos\./i
    )

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should call console.log when form is submit', () => {
    render(<FormBadico />)

    const inputName = screen.getByPlaceholderText('Seu nome')
    const inputEmail = screen.getByPlaceholderText('E-mail')
    const inputWhatsapp = screen.getByPlaceholderText(
      'Seu número do Whatsapp com DDD'
    )
    const submitButton = screen.getByRole('button', { name: 'Cadastrar' })

    userEvent.type(inputName, fakeName)
    userEvent.type(inputEmail, fakeEmail)
    userEvent.type(inputWhatsapp, fakeWhatsapp)
    userEvent.click(submitButton)

    expect(console.log).toBeCalledWith('Submit!')
  })

  it.each([
    ['name', fakeName, 'Seu nome'],
    ['email', fakeEmail, 'E-mail'],
    ['whatsapp', fakeWhatsapp, 'Seu número do Whatsapp com DDD']
  ])('should update %s when type', (_, value, placeholder) => {
    render(<FormBadico />)

    const element = screen.getByPlaceholderText(placeholder)
    userEvent.type(element, value)

    expect(element).toHaveValue(value)
  })

  it('should show message and disabled submitt button when whatsapp is invalid', () => {
    render(<FormBadico />)

    const element = screen.getByPlaceholderText(
      'Seu número do Whatsapp com DDD'
    )
    userEvent.type(element, 'invalid')

    const invalidMessage = screen.getByText(
      /número inválido, por favor verifique-o novamente/i
    )
    const submitButton = screen.getByRole('button', { name: 'Cadastrar' })

    expect(invalidMessage).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })
})
