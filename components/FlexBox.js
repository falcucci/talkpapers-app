import styled, { css } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: row;

  ${props => props.top && css`
    align-items: flex-start;
    justify-content: flex-start;
  `}

  ${props => props.column && css`
    flex-direction: column;
  `}

  ${props => props.row && css`
    flex-direction: row;
  `}

  ${props => props.center && css`
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 720px) {
      flex-direction: column;
    }
  `}
`

export const Box = styled.div`
  flex: 1;
`
