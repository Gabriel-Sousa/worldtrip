import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { CircleFlag } from 'react-circle-flags'

interface CardProps {
  country: {
    imageCity: string
    flag: string
    city: string
    name: string
  }
}

export function Card({ country }: CardProps) {
  return (
    <Box maxW={'256px'} rounded={'4px'}>
      <Image src={country.imageCity} alt="" w={'256px'} h={'173px'} />
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        p={6}
        background="#fff"
        borderLeft={'1px'}
        borderBottom={'1px'}
        borderRight={'1px'}
        borderColor={'#FFBA0880'}
      >
        <Flex direction={'column'} gap={3}>
          <Heading fontSize={'xl'}>{country.city}</Heading>
          <Text>{country.name}</Text>
        </Flex>
        <CircleFlag countryCode={country.flag} width={33} />
      </Flex>
    </Box>
  )
}
