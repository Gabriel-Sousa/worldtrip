import { Heading } from '@chakra-ui/react'
import Head from 'next/head'

import { Banner } from '@/components/Banner'
import { Carousel } from '@/components/Carousel'
import { Header } from '@/components/Header'
import { TravelType } from '@/components/TravelType'

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Header />
      <Banner />
      <TravelType />
      <Heading
        color={'#47585B'}
        fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
        textAlign={'center'}
        p="4"
        mt={13}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Carousel />
    </>
  )
}
