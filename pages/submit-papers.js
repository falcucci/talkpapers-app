import Head from 'next/head'
import Layout, { HeaderTitle } from '../components/Layout'
import styled from 'styled-components'
import Container from '../components/Container'
import Button from '../components/Button'
import { Input } from '../components/Forms'

const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 60px;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  // margin: 50px auto;
`

const TextArea = styled.textarea`
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

export default () => (
  <Layout
    title={<HeaderTitle>PHP UK Conference 2018</HeaderTitle>}
    backButton
  >
    <Head>
      <title>Submit Paper to PHP UK Conference 2018</title>
    </Head>
    <Container>
      <Title>Submit paper</Title>
      <Form>
        <Input placeholder="Title" />
        <TextArea placeholder="Description" />
        <Button large>Submit</Button>
      </Form>
    </Container>
  </Layout>
)
