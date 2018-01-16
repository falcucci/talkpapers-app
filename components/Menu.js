import React from 'react'
import styled from 'styled-components'
import { Link } from '../routes'
import firebase from '../config/firebase'
import Button from './Button'
import Profile from './Profile'

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  & a {
    margin: 0 15px;
  }
`

const MenuLinks = ({ hideMenuSignIn, hideMenuSignUp }) => (
  <Nav>
    {!hideMenuSignIn && (
      <Link href="/signin">
        <Button link>Sign In</Button>
      </Link>
    )}
    {!hideMenuSignUp && (
      <Link href="/signup">
        <Button round danger>Sign Up</Button>
      </Link>
    )}
  </Nav>
)

export default class Menu extends React.Component {
  state = {
    isAuthenticated: false,
    currentUser: {}
  }

  constructor(props) {
    super(props)

    this.handleLogoutOut = this.handleLogoutOut.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.setState({
          ...this.state,
          isAuthenticated: true,
          currentUser
        })
      }
    })
  }

  handleLogoutOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        this.setState({
          ...this.state,
          currentUser: {},
          isAuthenticated: false
        })
      })
      .catch(console.error)
  }

  render() {
    const { isAuthenticated, currentUser } = this.state

    return !this.state.isAuthenticated
      ? <MenuLinks />
      : (
        <Nav>
          <Profile
            currentUser={this.state.currentUser}
            handleLogoutOut={this.handleLogoutOut}
          />
        </Nav>
      )
  }
}
