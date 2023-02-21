import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export function Banner() {
  const isLayoutMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <Box
      backgroundImage={'/banner/backgroundbanner.png'}
      backgroundSize="cover"
    >
      <Flex
        maxW={'container.xl'}
        mx="auto"
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems="center"
        p={4}
      >
        <Flex
          direction={'column'}
          gap="5"
          textAlign={{ base: 'left', lg: 'left' }}
        >
          <Heading
            color={'#F5F8FA'}
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight={500}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            color={'#DADADA'}
            fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
            maxW={'524px'}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {!isLayoutMobile && (
          <Image
            src="/banner/airplane.svg"
            alt="airplane"
            position={'relative'}
            top={'45'}
          />
        )}
      </Flex>
    </Box>
  )
}
