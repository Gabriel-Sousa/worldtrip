import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, Image, Link, Text } from '@chakra-ui/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const continents = [
  {
    src: 'continents/asia.jpg',
    url: '/asia',
    text: 'Ásia',
  },
  {
    src: 'continents/africa.jpg',
    url: '/africa',
    text: 'África',
  },
  {
    src: 'continents/north-america.jpg',
    url: '/america-do-norte',
    text: 'América do Norte',
  },
  {
    src: 'continents/south-america.jpg',
    url: '/america-do-sul',
    text: 'América do Sul',
  },
  {
    src: 'continents/europe.jpg',
    url: '/europa',
    text: 'Europa',
  },
  {
    src: 'continents/oceania.jpg',
    url: '/oceania',
    text: 'Oceania ',
  },
]

export function Carousel() {
  return (
    <Box maxW={'container.xl'} mx="auto" p={4} mt={13} mb={10}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className={'sliderCarousel'}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.url}>
            <Link href={continent.url} position="relative">
              <Image src={continent.src} alt="" brightness={'40%'} />
              <Text
                position={'absolute'}
                top="50%"
                left={'50%'}
                className="text-center"
                zIndex={20}
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                textAlign="center"
                color={'#F5F8FA'}
              >
                {continent.text}
              </Text>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
