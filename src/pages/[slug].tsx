import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'

import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { api } from '@/services/axios'

type Continent = {
  id: string
  name: string
  banner: string
  text: string
  data: {
    countries: number
    language: number
    cities: number
  }
  countries: {
    city: string
    name: string
    imageCity: string
    flag: string
  }[]
}

export default function Home() {
  const isLayoutMobile = useBreakpointValue({ base: true, lg: false })

  const router = useRouter()
  const { query } = router
  let title = query.slug

  const [continent, setContinent] = useState<Continent>({} as Continent)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const continents = [
      'asia',
      'africa',
      'america-do-norte',
      'america-do-sul',
      'europa',
      'oceania',
    ]

    const { query } = router

    const isValidRoute = continents.find(
      (continent) => continent === query.slug,
    )
    if (!isValidRoute && !!query.slug) {
      router.push('/')
    }

    if (query.slug) {
      const loadingData = async () => {
        await api.get(`api/continent/${query.slug}`).then((response) => {
          setContinent(response.data)
          response.data.status === 404 && setIsLoading(true)
        })
      }

      loadingData()
    }
  }, [router])

  switch (title) {
    case 'asia':
      title = 'Ásia'
      break

    case 'africa':
      title = 'África'
      break

    case 'america-do-norte':
      title = 'América do Norte'
      break

    case 'america-do-sul':
      title = 'América do Sul'
      break

    case 'europa':
      title = 'Europa'
      break
    case 'oceania':
      title = 'Oceania'
      break

    default:
      return 'worldtrip'
  }

  if (continent.name) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header returnHome />

        <Box>
          <Box position={'relative'}>
            <Image
              src={continent.banner}
              brightness={'40%'}
              objectFit="cover"
              w="100vw"
              maxH={'500px'}
              alt=""
              className="brightness_40"
            />
            <Heading
              textTransform={'capitalize'}
              top={{ base: '50%', lg: '70%' }}
              left={{ base: '50%', lg: '10%' }}
              position="absolute"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight={600}
              color="#F5F8FA"
              className={isLayoutMobile ? 'text-center' : ''}
            >
              {continent.name}
            </Heading>
          </Box>

          <Flex
            maxW={'container.xl'}
            mx={'auto'}
            p={4}
            justifyContent="space-between"
            alignItems={'center'}
            mt={{ base: 6, lg: 20 }}
            direction={{ base: 'column', lg: 'row' }}
            gap={'16px'}
          >
            <Text
              maxW={'600px'}
              fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }}
              fontWeight={400}
              color="#47585B"
              align={'justify'}
            >
              {continent.text}
            </Text>
            <Flex
              w={'100%'}
              justifyContent={'space-between'}
              maxW={'490px'}
              gap={'20px'}
              fontWeight={600}
            >
              <Flex direction={'column'}>
                <Text
                  color={'#FFBA08'}
                  fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                  textAlign={'center'}
                >
                  {continent.data.countries}
                </Text>
                <Text
                  color={'#47585B'}
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  textAlign={'center'}
                >
                  países
                </Text>
              </Flex>

              <Flex direction={'column'}>
                <Text
                  color={'#FFBA08'}
                  fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                  textAlign={'center'}
                >
                  {continent.data.language}
                </Text>
                <Text
                  color={'#47585B'}
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  textAlign={'center'}
                >
                  línguas
                </Text>
              </Flex>

              <Flex direction={'column'}>
                <Text
                  color={'#FFBA08'}
                  fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                  textAlign={'center'}
                >
                  {continent.data.cities}
                </Text>
                <Flex gap="6px">
                  <Text
                    color={'#47585B'}
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    textAlign={'center'}
                  >
                    cidades +100
                  </Text>

                  <Popover>
                    <PopoverTrigger>
                      <button>
                        <Image src="/info.svg" alt="" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Cidades</PopoverHeader>
                      <PopoverBody>
                        {continent.countries.map((country, i) => {
                          if (continent.countries.length === i + 1) {
                            return (
                              <span key={country.city}>{country.city}. </span>
                            )
                          }

                          return (
                            <span key={country.city}>{country.city}, </span>
                          )
                        })}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Box mt="20" maxW={'container.xl'} mx={'auto'} p="4">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="#47585B"
              fontWeight={500}
            >
              Cidades +100
            </Heading>

            <SimpleGrid
              minChildWidth="256px"
              gap={'20px'}
              justifyItems="center"
              mt="10"
            >
              {continent.countries.map((country) => (
                <GridItem key={country.city}>
                  <Card country={country} />
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header returnHome />

      <Flex
        width={'100vw'}
        height={'90vh'}
        direction="column"
        justifyContent="center"
        alignItems={'center'}
      >
        {continent && isLoading ? (
          <Heading>
            Dados não encontrados, volte a página inicial e selecione outro
            continente.
          </Heading>
        ) : (
          <PulseLoader color="#47585B" size={'2rem'} />
        )}
      </Flex>
    </>
  )
}
