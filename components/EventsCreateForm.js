import styled from 'styled-components'
import Button from './Button'
import { Input } from './Forms'

const Title = styled.h2`
  display: flex;
  font-size: 24px;
  // font-weight: 300;
  margin-bottom: 60px;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  // margin: 50px auto;
`

export default () => (
  <Form>
    <Input placeholder="Title" />
    <Editor
      editorState={EditorState.createEmpty()}
    />
    <Button block>Submit</Button>
  </Form>
)
