import * as S from './styles'
import { useState } from 'react'

const FormBadico = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const [isValidWhatsapp, setIsValidWhatsapp] = useState(true)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submit!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    setFormData((prevState) => ({ ...prevState, [key]: value }))

    if (key === 'whatsapp') {
      setIsValidWhatsapp(isValidWhatsappNumber(value))
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
          <S.Input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Seu nome"
            value={formData.name}
          />
        </S.Label>

        <S.Label htmlFor="email">
          <S.Input
            value={formData.email}
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="E-mail"
          />
        </S.Label>

        <S.Label htmlFor="whatsapp">
          <S.Input
            name="whatsapp"
            id="whatsapp"
            placeholder="Seu número do Whatsapp com DDD"
            onChange={handleChange}
            value={formData.whatsapp}
          />
        </S.Label>
        {!isValidWhatsapp && (
          <p>Número inválido, por favor verifique-o novamente</p>
        )}

        <S.ButtonWrapper>
          <S.Button type="submit" disabled={!isValidWhatsapp}>
            Cadastrar
          </S.Button>
        </S.ButtonWrapper>
      </form>
    </S.Wrapper>
  )
}

export default FormBadico
