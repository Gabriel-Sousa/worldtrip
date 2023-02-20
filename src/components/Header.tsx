import { Center, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Center as="header" maxW={'container.xl'} mx="auto" p={'7'}>
      <Image src="/logo.svg" alt="" />
    </Center>
  )
}
