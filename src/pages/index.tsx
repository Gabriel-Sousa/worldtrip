import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Box w="full" position="relative">
        <Image src="/backgroundBanner.png" alt="" w={'full'} h={'335px'} />
        <Flex
          direction={'column'}
          gap={5}
          position="absolute"
          top={'20%'}
          left={'8%'}
          zIndex={10}
        >
          <Heading color={'#F5F8FA'} fontSize={'4xl'} fontWeight={500}>
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text color={'#DADADA'} fontSize={'xl'} maxW={'524px'}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          src="/airplane.svg"
          alt=""
          position="absolute"
          bottom={'-30px'}
          right={'10%'}
        />
      </Box>
    </>
  )
}
