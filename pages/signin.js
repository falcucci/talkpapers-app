import React from 'react'
import Head from 'next/head'
import Layout, { HeaderTitle } from '../components/Layout'
import Container from '../components/Container'
import SignInForm from '../components/SignInForm'

import Firebase, { FirebaseUIConfig } from '../config/firebase'

export default class SignIn extends React.Component {
  componentDidMount() {
    if (process.browser) {
      const Firebaseui = require('firebaseui')

      FirebaseUIConfig.credentialHelper = (
        Firebaseui.auth.CredentialHelper.GOOGLE_YOLO
      )
      let ui = new Firebaseui.auth.AuthUI(Firebase.auth())

      ui.start('#firebase-ui-container', FirebaseUIConfig)
    }
  }

  render() {
    return (
      <Layout
      title={<HeaderTitle>Sign In</HeaderTitle>}
      backButton
      hideMenuSignIn
    >
      <Head>
        <title>SignIn - talkpapers</title>
        <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
      </Head>
      <Container>
        <div id="firebase-ui-container" />
      </Container>
    </Layout>
    )
  }
}
