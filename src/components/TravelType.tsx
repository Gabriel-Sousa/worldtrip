import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

const travelTypes = [
  {
    text: 'vida noturna',
    url: '/travelTypes/cocktail.svg',
  },
  {
    text: 'praia',
    url: '/travelTypes/surf.svg',
  },
  {
    text: 'moderno',
    url: '/travelTypes/building.svg',
  },
  {
    text: 'clássico',
    url: '/travelTypes/museum.svg',
  },
  {
    text: 'e mais...',
    url: '/travelTypes/earth.svg',
  },
]

export function TravelType() {
  const isLayoutMobile = useBreakpointValue({ base: true, lg: false })

  if (isLayoutMobile) {
    return (
      <Flex
        direction={'column'}
        alignItems="center"
        maxW={'container.xl'}
        mx="auto"
        p={4}
        pt="9"
        gap={9}
      >
        <Flex w={'full'} direction={'column'} gap={6}>
          <Flex
            w={'full'}
            mx={'auto'}
            alignItems="center"
            justifyContent={'space-evenly'}
          >
            <Flex alignItems={'center'} gap={'8px'}>
              <Image src={'/travelTypes/dot.svg'} alt="" />
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="#47585B"
                fontWeight={500}
                textAlign="center"
              >
                vida noturna
              </Text>
            </Flex>

            <Flex alignItems={'center'} gap={'8px'}>
              <Image src={'/travelTypes/dot.svg'} alt="" />
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="#47585B"
                fontWeight={500}
                textAlign="center"
              >
                praia
              </Text>
            </Flex>
          </Flex>

          <Flex
            w={'full'}
            mx={'auto'}
            alignItems="center"
            justifyContent={'space-evenly'}
          >
            <Flex alignItems={'center'} gap={'8px'}>
              <Image src={'/travelTypes/dot.svg'} alt="" />
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="#47585B"
                fontWeight={500}
                textAlign="center"
              >
                moderno
              </Text>
            </Flex>

            <Flex alignItems={'center'} gap={'8px'}>
              <Image src={'/travelTypes/dot.svg'} alt="" />
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="#47585B"
                fontWeight={500}
                textAlign="center"
              >
                clássico
              </Text>
            </Flex>
          </Flex>

          <Center>
            <Image src={'/travelTypes/dot.svg'} alt="" mr={'8px'} />
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="#47585B"
              fontWeight={500}
              textAlign="center"
            >
              e mais...
            </Text>
          </Center>
        </Flex>

        <Box w={128} h={1} bg="#47585B" rounded={'full'} />
      </Flex>
    )
  }
  return (
    <Flex
      direction={'column'}
      alignItems="center"
      maxW={'container.xl'}
      mx="auto"
      p={4}
      pt="20"
      gap={20}
    >
      <Flex w={'full'} alignItems="center" justifyContent={'space-between'}>
        {travelTypes.map((travelType) => (
          <Flex
            w={135}
            key={travelType.url}
            direction="column"
            alignItems={'center'}
            gap={6}
          >
            <Image src={travelType.url} alt="" />
            <Text
              fontSize={'2xl'}
              color="#47585B"
              fontWeight={600}
              textAlign="center"
            >
              {travelType.text}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box w={128} h={1} bg="#47585B" rounded={'full'} />
    </Flex>
  )
}
