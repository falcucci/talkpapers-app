import styled from 'styled-components'

const BaseInput = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  flex: 1;
  background-color: #f5f5f5;
  border: 3px solid transparent;
  border-radius: 4px;
  margin-bottom: 25px;
`

export const Input = BaseInput

export const InputPassword = styled(Input).attrs({
  type: 'password'
})``

export const InputeEmail = styled(Input).attrs({
  type: 'email'
})``

export const InputeDatemail = styled(Input).attrs({
  type: 'date'
})``


export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  flex: 1;
  background-color: #f5f5f5;
  border: 3px solid transparent;
  border-radius: 4px;
  margin-bottom: 25px;
  min-height: 150px;
  resize: none;
`
