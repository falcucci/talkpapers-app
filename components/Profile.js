import Icon from 'react-icons-kit'
import styled, { css } from 'styled-components'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { Flex } from './FlexBox'

const ProfileContainer = styled(Flex)`
  position: relative;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
`

const ProfileDropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  padding: 10px 0;
  min-width: 150px;
  padding-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 18px 30px 0px;
  border: 1px solid rgb(238, 238, 238);

  ${props => props.isOpen && css`
    display: block;
  `}
`
const ProfileDropDownItem = styled.a`
  display: block;
  padding: 5px;
`

const ProfileDropDownDivider = styled.div``


export default class Profile extends React.Component {
  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { currentUser, handleLogoutOut } = this.props

    return (
      <ProfileContainer
        onBlur={this.handleOpen}
        center
      >
        <Flex
          onClick={this.handleOpen}
          center
        >
          <Icon icon={ic_account_circle} size={32} />
        </Flex>
        <ProfileDropDown isOpen={this.state.isOpen}>
          <ProfileDropDownItem onClick={() => handleLogoutOut()}>
            {/* <Icon name={ic_account_circle} /> */}
            Logout
          </ProfileDropDownItem>
        </ProfileDropDown>
      </ProfileContainer>
    )
  }
}
