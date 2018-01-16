import Document, { Head, Main, NextScript } from 'next/document'
import styled, { injectGlobal, ServerStyleSheet } from 'styled-components'
import { Pulse } from 'styled-spinkit'
import { Router } from '../routes'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto|Slabo+27px|Raleway');

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

html, body {
  // height: 100%;
}
body > div,
body > div > div#__next,
body > div > div#__next > div,
body > div > div#__next > div > div {
  // min-height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #1A1A1A;
  line-height: 1.5;
}
`

const PageLoading = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 100;
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => (
      sheet.collectStyles(<App {...props} />)
    ))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentWillMount() {
    Router.onRouteChangeStart = () => this.setState({ ...this.state, isLoading: true })
  }

  componentDidMount() {
    Router.onRouteChangeComplete = () => this.setState({ ...this.state, isLoading: false })
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>talkpapers</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
