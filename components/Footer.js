import styled from 'styled-components'
import Container from './Container';
import { Logo } from './Logo';

export const Footer = styled.footer`
  padding: 60px 0;
  background-color: #4b5360;
`

export default () => (
  <Footer>
    <Container flex>
      <Logo inverse>
        talkpapers
      </Logo>
    </Container>
  </Footer>
)
