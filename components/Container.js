import styled, { css } from 'styled-components'

export default styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;

  ${props => props.flex && css`
    display: flex;
  `}
`
