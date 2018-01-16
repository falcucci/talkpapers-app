import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { Logo } from './Logo'

export const HeaderTitle = styled(Logo)`
  color: initial;
`

const Main = styled.main`
  padding-top: 100px;
  padding-bottom: 60px;
`

export default ({
  title,
  backButton,
  hideMenu,
  hideMenuSignIn,
  hideMenuSignUp,
  children
}) => (
  <div>
    <Header
      title={title}
      backButton={backButton}
      hideMenu={hideMenu}
      hideMenuSignIn={hideMenuSignIn}
      hideMenuSignUp={hideMenuSignUp}
    />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)
