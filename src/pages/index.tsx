import { Heading } from '@chakra-ui/react'
import Head from 'next/head'

import { Banner } from '@/components/Banner'
import { Carousel } from '@/components/Carousel'
import { TravelType } from '@/components/TravelType'

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Banner />
      <TravelType />
      <Heading
        color={'#47585B'}
        fontSize="4xl"
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
