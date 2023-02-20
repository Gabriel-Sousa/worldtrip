import { Box, Flex, Image, Text } from '@chakra-ui/react'

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
