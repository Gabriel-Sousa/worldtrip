import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface HeaderProps {
  comeHome?: boolean
}

export function Header({ comeHome = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      justifyContent={comeHome ? 'space-around' : 'center'}
      alignItems="center"
      maxW={'container.xl'}
      mx="auto"
      p={{ base: '4', md: '7' }}
      maxH={{ base: '75px', md: '120px' }}
    >
      {comeHome && (
        <Link href={'/'}>
          <Box p={4}>
            <MdKeyboardArrowLeft size={32} />
          </Box>
        </Link>
      )}
      <Image src="/logo.svg" alt="" />
      {comeHome && <Box />}
    </Flex>
  )
}
