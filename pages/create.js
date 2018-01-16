import Head from 'next/head'
import Layout, { HeaderTitle } from '../components/Layout'
import Container from '../components/Container'
import CreateEventForm from '../components/CreateEventForm'

export default () => (
  <Layout
    title={<HeaderTitle>Create event</HeaderTitle>}
    backButton
  >
    <Head>
      <title>Create event</title>
    </Head>
    <Container>
      <CreateEventForm />
    </Container>
  </Layout>
)
