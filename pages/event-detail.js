import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import { Flex, Box } from '../components/FlexBox'
import Container from '../components/Container'
import { List, ListItem } from '../components/PapersList'

const Title = styled.h1`
  font-size: 60px;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 40px;
`

const StyledContainer = styled(Container)`
  @media only screen and (max-width: 1044px) {
    flex-direction: column;
  }
`

export default props => (
  <Layout backButton>
    <Head>
      <title>PHP UK Conference 2018</title>
    </Head>
    <PageHeader>
      <StyledContainer>
        <Title>PHP UK Conference 2018</Title>
        <Flex center>
          <Box>
            <p>PHP UK is pleased to announce the 13th Annual PHP UK conference; a 3-day event, 1 workshop day and 2 conference days with 3 great tracks, held at at The Brewery, in the heart of the City of London.</p>
            <p>With over 700 delegates, speakers, and sponsors, PHP UK conference aims to deliver fantastic up-to-date content about PHP and related web technologies in a comfortable and professional setting. There are countless networking opportunities to engage with international speakers and delegates, which makes the event one you won’t want to miss.</p>
          </Box>
          <Box style={{paddingLeft: 30, textAlign: 'center'}}>
            <Button
              round
              outline
              large
            >
              Submit paper
            </Button>
          </Box>
        </Flex>
      </StyledContainer>
    </PageHeader>
    <Container>
      <h1>Papers</h1>
      <List>
        <ListItem
          title={`Vim em 5 minutos`}
          description={`Gostaria de fazer uma light talk sobre algumas configurações de vim que ajudam na produtividade.Ainda preciso bolar os slides, pretendo mandar em breve.Thanks :)`}
          owner={{name: 'Philipe Gouveia Paixão'}}
          votes={200}
        />
      </List>
    </Container>
  </Layout>
)
