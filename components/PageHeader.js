import styled from 'styled-components'
import Container from './Container'

const PageHeader = styled.section`
  margin-top: 50px;
  padding: 40px 0;
`

export default ({ children }) => (
  <PageHeader>
    <Container>
      {children}
    </Container>
  </PageHeader>
)
