import { useState } from 'react'
import * as S from './styles'

const Form = () => {
  const [name, setName] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (name) {
      console.log(`Your name is ${name}`)
    } else {
      console.log(`Name is empty :(`)
    }
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="name">Name:</S.Label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Type your name"
        />
        <button type="submit">Submit</button>
      </S.Form>
    </S.Wrapper>
  )
}

export default Form
