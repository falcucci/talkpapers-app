import styled, { injectGlobal } from 'styled-components'
import Header from './Header'
import Footer from './Footer'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto|Slabo+27px|Raleway');

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #1A1A1A;
  line-height: 1.5;
}
`

export default ({ backButton, children }) => (
  <div>
    <Header
      backButton={backButton}
    />
    <main style={{paddingTop: 50}}>
      {children}
    </main>
    <Footer />
  </div>
)
