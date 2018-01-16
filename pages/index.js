import Head from 'next/head'
import styled from 'styled-components';
import Container from '../components/Container'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import PageHeader from '../components/PageHeader'
import SearchForm from '../components/SearchForm'
import { Flex, Box } from '../components/FlexBox'
import { List, Listitem } from '../components/List'

export default () => (
  <Layout title={<Logo />}>
    <Head>
      <title>The easier way to manage your CFP - talkpapers</title>
    </Head>
    <PageHeader>
      <SearchForm />
    </PageHeader>
    <Container>
      <List>
        <Listitem
          title="ITerior conference 2018"
          description="Place to seek for free office hours for programming help — any programming language, all skill levels"
          url=""
          totalPapers="1"
          totalVotes="3"
          slug={243}
          />
        <Listitem
          title="Hacker Hours"
          description="Place to seek for free office hours for programming help — any programming language, all skill levels"
          url=""
          totalPapers="1"
          totalVotes="3"
          slug={243421}
        />
      </List>
    </Container>
  </Layout>
)
