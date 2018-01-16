import styled from 'styled-components'
import Button from '../components/Button'
import { Input, TextArea } from '../components/Forms'

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  // margin: 50px auto;
`

export default props => (
  <Form>
    <Input placeholder="Title" />
    <TextArea placeholder="Description" />
    <Input type="date" placeholder="Occurs at" />
    <Input type="date" placeholder="Close for new proposals in" />
    <Input type="url" placeholder="Website" />
    <Input placeholder="Tags" />
    <Button large>Create</Button>
  </Form>
)
