import styled from 'styled-components'
import { Link } from '../routes'
import Button from './Button'

const ListItemStyled = styled.article`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E5E5E6;
  padding: 30px 25px;

  &:after {
    content: "";
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #0056DC;
  cursor: pointer;
  font-size: 25px;

  & a {
  }

  &:hover {
    opacity: 0.8;
  }
`

const Description = styled.p`
  font-size: 18px;
  margin-top: 5px;
`

const Feature = styled.span`
  display: block;
  padding: 5px;
  margin: 0 5px;
`

export const Listitem = ({
  title,
  description,
  url,
  totalPapers,
  totalVotes,
  slug,
}) => (
  <ListItemStyled>
    <Header>
      <Link route="event-detail" params={{ slug }}>
        <Title>{title}</Title>
      </Link>
    </Header>
    <Description>{description}</Description>
  </ListItemStyled>
)

export const List = styled.section`
  margin-bottom: 50px;
`
