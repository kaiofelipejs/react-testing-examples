import * as S from './styles'

const Input: React.FC<any> = ({
  value = '',
  onChange,
  ...rest
}): JSX.Element => <S.Input value={value} onChange={onChange} {...rest} />

export default Input
