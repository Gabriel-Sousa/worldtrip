import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface HeaderProps {
  returnHome?: boolean
}

export function Header({ returnHome = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      justifyContent={returnHome ? 'space-around' : 'center'}
      alignItems="center"
      maxW={'container.xl'}
      mx="auto"
      p={{ base: '4', md: '7' }}
      maxH={{ base: '75px', md: '120px' }}
    >
      {returnHome && (
        <Link href={'/'}>
          <Box p={4}>
            <MdKeyboardArrowLeft size={32} />
          </Box>
        </Link>
      )}
      <Image src="/logo.svg" alt="" />
      {returnHome && <Box />}
    </Flex>
  )
}
