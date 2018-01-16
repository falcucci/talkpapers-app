import styled from 'styled-components'
import Button from './Button'
import { Input, InputeEmail, InputPassword } from './Forms'
import { Flex, Box } from './FlexBox'

const Title = styled.h2`
  display: flex;
  font-size: 24px;
  // font-weight: 300;
  margin-bottom: 60px;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 50px auto;
`

export default () => (
  <Form>
    <Input placeholder="Full name" />
    <InputeEmail placeholder="E-mail" />
    <InputPassword placeholder="Password" />
    <Button large block>Sign Up</Button>
  </Form>
)
