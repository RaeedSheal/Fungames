import { Card, CardBody, Heading, Stack, Text, Image, CardFooter, Button,useColorModeValue, Box } from '@chakra-ui/react'

interface boardgame{
    title:string,
    des:string,
    imgsrc:string
}
const Widecard = (props:boardgame) => {
  return (
    <>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={props.imgsrc}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md' color="brand"
                _dark={{
                color: "brand",
                }}>{props.title}</Heading>

                <Text py='2'>
                    {props.des}
                </Text>
                </CardBody>

                <CardFooter>
                <Box as='a' href='/boardgamedetails'>
                    <Button variant='solid' bg="brand"
                    _dark={{
                    bg: "brand",
                    }}
                    _hover={{
                        bg: useColorModeValue('brandlight.500', 'gray.700'),
                    }}
                    >
                        Read More
                    </Button>
                </Box>
                
                </CardFooter>
            </Stack>
        </Card>
    </>
  )
}

export default Widecard