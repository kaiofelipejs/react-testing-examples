import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 328px;
  background: rgb(38, 50, 72);
  border-radius: 10px;
  padding: 2.5rem;
  color: white;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Description = styled.p`
  font-size: 1.4rem;
  margin: 1.2rem 0;
`

export const Label = styled.label`
  font-size: 1.2rem;
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 0.5rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`

export const Button = styled.button`
  width: 94px;
  height: 30px;
  background: rgb(255, 152, 0);
  border: 0px;
  border-radius: 30px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(1.1);
  }

  ${({ disabled }) =>
    !!disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`
