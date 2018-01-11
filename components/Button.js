import styled, { css } from "styled-components"
import { Link } from '../routes'
import colors from '../theme/colors'

const Button = styled.a`
  display: inline-block;
  padding: 7px 15px;
  color: #fff;
  background-color: ${colors.blue};
  border: 2px solid ${colors.blue};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  transition: all 500ms;

  ${props => props.success && css`
    color: #32d5a5;
    border-color: #32d5a5;
  `}

  ${props => props.danger && css`
    background-color: ${colors.red};
    border-color: ${colors.red};
  `}

  ${props => props.link && css`
    color: ${colors.blue};
    border-color: transparent;
    background-color: transparent;

    &:hover {
      opacity: 0.8;
    }
  `}

  ${props => props.round && css`
    border-radius: 20px;
  `}

  ${props => props.large && css`
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 50px;
  `}

  ${props => props.outline && css`
    color: ${colors.blue};
    border-color: ${colors.blue};
    background-color: transparent;
  `}
`

export default Button
