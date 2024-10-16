
import { Box, Flex, HStack, Link, Stack } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar() {
    const {isLoggedIn} = useAuth()

    return (
        <Box bgColor="gray" w='100%' p={4} color={'white'}>
            <Flex justifyContent={'space-between'}>
                <Box>
                    Logo
                </Box>
                <HStack as={'nav'}>
                    <Link as={RouterLink} to={'/'}>Home</Link>
                    {isLoggedIn && <Link as={RouterLink} to={'/pokemon'}>Pokémon</Link>}
                    {isLoggedIn && <Link as={RouterLink} to={'/post'}>Post</Link>}
                    <Link as={RouterLink} to={'/testes'}>Testes</Link>
                    <Link as={RouterLink} to={'/todo'}>ToDo</Link>
                    <Link as={RouterLink} to={'/usuario'}>Usuario</Link>
                </HStack>
            </Flex> 
        </Box>
    )
  }
  
  export default Navbar