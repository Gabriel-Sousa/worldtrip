import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box
      backgroundImage={'/banner/backgroundbanner.png'}
      backgroundSize="cover"
    >
      <Flex
        maxW={'container.xl'}
        mx="auto"
        justifyContent={'space-between'}
        alignItems="center"
        p={4}
      >
        <Flex direction={'column'} gap="5">
          <Heading color={'#F5F8FA'} fontSize={'4xl'} fontWeight={500}>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color={'#DADADA'} fontSize={'xl'} maxW={'524px'}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          src="/banner/airplane.svg"
          alt="airplane"
          position={'relative'}
          top={'45'}
        />
      </Flex>
    </Box>
  )
}
