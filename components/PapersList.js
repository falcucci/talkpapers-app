import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { basic_heart } from 'react-icons-kit/linea'

const ListItemStyled = styled.article`
  display: flex;
  padding: 25px 0;
`

const ListIcon = styled.aside`
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`

const ListTitle = styled.h2`
  margin-bottom: 15px;
`

const ListDetail = styled.div`
  border-bottom: 1px solid #E5E5E6;
  padding-bottom: 30px;
`

const Avatar = styled.span`
  display: inline-flex;
  background-color: #b9b9b9;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const Owner = ({ person, className }) => (
  <div className={className}>
    <Avatar />
    {person.name}
  </div>
)

const StyledOwner = styled(Owner)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 300;
`

export const ListItem = ({
  id,
  title,
  description,
  votes,
  owner
}) => (
  <ListItemStyled>
    <ListIcon>
      <Icon
        icon={basic_heart}
        size={24}
        style={{marginBottom: 3}}
      />
      <small>{votes}</small>
    </ListIcon>
    <ListDetail>
      <ListTitle>{title}</ListTitle>
      <p>{description}</p>
      <StyledOwner person={owner} />
    </ListDetail>
  </ListItemStyled>
)

export const List = styled.section`
  max-width: 720px;
  margin-bottom: 60px;
`
