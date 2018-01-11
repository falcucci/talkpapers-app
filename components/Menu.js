import styled from 'styled-components'
import { Link } from '../routes'
import Button from './Button'

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  & a {
    margin: 0 15px;
  }
`

export default () => (
  <Nav>
    <Link href="/signin">
      <Button link>Sign In</Button>
    </Link>
    <Link href="/signup">
      <Button round danger>Sign Up</Button>
    </Link>
  </Nav>
)
