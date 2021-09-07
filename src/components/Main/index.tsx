import * as S from './styles'

const Main = ({
  title = 'React Testing Examples',
  description = 'A simple project with testing examples'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/badico-logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
