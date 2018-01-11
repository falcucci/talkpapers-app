import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrows_left } from 'react-icons-kit/linea';
import { Link } from '../routes'
import Container from './Container'
import Logo from './Logo'
import Menu from './Menu'
import Button from './Button'

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
  background-color: #fff;
  padding: 30px 0;
  // box-shadow: 0 1px 20px -6px rgba(0,0,0,.15);
`

const BackButton = ({ className }) => (
  <a onClick={() => window.history.back()} className={className}>
    <Icon icon={arrows_left} size={40} />
  </a>
)

const StyledBackButton = styled(BackButton)`
  cursor: pointer;
`

export default ({ backButton }) => (
  <Header>
    <Container flex>
      {!backButton
        ? <Logo />
        : <StyledBackButton />
      }
      <Menu />
    </Container>
  </Header>
)
