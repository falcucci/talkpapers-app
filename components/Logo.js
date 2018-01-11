import styled, { css } from 'styled-components'
import { Link } from '../routes'
import colors from '../theme/colors'

const Title = styled.h1`
  display: flex;
  cursor: pointer;
`

export const Logo = styled.a`
  font-family: 'Slabo 27px';
  font-size: 26px;
  color: ${colors.red};
  text-decoration: none;

  ${props => props.inverse && css`
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
  `}
`

export default () => (
  <Title>
    <Link href="/">
      <Logo title="The easier way to manage your CFP - Talk Papers">
        talkpapers
      </Logo>
    </Link>
  </Title>
)
