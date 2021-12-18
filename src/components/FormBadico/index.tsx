import * as S from './styles'
import { useState } from 'react'
import Input from 'components/Input'

const FormBadico = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    isValidWhatsapp: true
  })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submit!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    setFormData((prevState) => ({ ...prevState, [key]: value }))

    if (key === 'whatsapp') {
      setFormData((prevState) => ({
        ...prevState,
        isValidWhatsapp: isValidWhatsappNumber(value)
      }))
    }
  }

  const isValidWhatsappNumber = (number: string) => {
    const PATTERN =
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

    return PATTERN.test(number)
  }

  return (
    <S.Wrapper>
      <h1>Faça parte!</h1>
      <S.Description>
        Nosso app estará pronto em breve, se cadastre para te avisarmos.
      </S.Description>

      <form onSubmit={handleSubmit}>
        <S.Label htmlFor="name">
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Seu nome"
            value={formData.name}
          />
        </S.Label>

        <S.Label htmlFor="email">
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="E-mail"
            value={formData.email}
          />
        </S.Label>

        <S.Label htmlFor="whatsapp">
          <Input
            id="whatsapp"
            name="whatsapp"
            onChange={handleChange}
            placeholder="Seu número do Whatsapp com DDD"
            value={formData.whatsapp}
          />
        </S.Label>
        {!formData.isValidWhatsapp && (
          <p>Número inválido, por favor verifique-o novamente</p>
        )}

        <S.ButtonWrapper>
          <S.Button type="submit" disabled={!formData.isValidWhatsapp}>
            Cadastrar
          </S.Button>
        </S.ButtonWrapper>
      </form>
    </S.Wrapper>
  )
}

export default FormBadico
