import {Container, Box, Heading} from '@chakra-ui/react'

const Pages = () => {
	return(
	       <Container>
			<Box borderRadius="lg" bg="red" mb={6} p="3" align="center">
				Hello I&apos;m a full stack developer based in Kenya
			</Box>
			<Box display={{md: 'flex'}}>
			<Box flexGrow={1}>
			<Heading as="h2" variant='page-title'>
				Mohamed Yusuf
			</Heading>
			<p>(Artist / Developer / Designer)</p>
			</Box>
			</Box>	
	       </Container>
	)
}

export default Pages
