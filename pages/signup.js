import Layout, { HeaderTitle } from '../components/Layout'
import Container from '../components/Container'
import SignUpForm from '../components/SignUpForm'

export default () => (
  <Layout
    title={<HeaderTitle>Sign Up</HeaderTitle>}
    backButton
    hideMenuSignUp
  >
    <Container>
      <SignUpForm />
    </Container>
  </Layout>
)
