import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, Image } from '@chakra-ui/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export function Carousel() {
  return (
    <Box maxW={'container.xl'} mx="auto" p={4} mt={13} mb={10}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className={'sliderCarousel'}
      >
        <SwiperSlide>
          <Image src="europe/europe-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="europe/europe-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="europe/europe-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="europe/europe-4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
