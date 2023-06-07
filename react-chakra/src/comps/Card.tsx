import {
  Box,
  Flex,
  Image,
  chakra,

} from '@chakra-ui/react';
interface boardgame{
    title:string,
    des:string,
    imgsrc:string
}
export default function Card(props:boardgame) {
  return (
    <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
        <Box
            maxW="xs"
            mx="auto"
            bg="white"
            _dark={{
            bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
            <chakra.h1
                color="brand"
                _dark={{
                color: "brand",
                }}
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
            >
                {props.title}
            </chakra.h1>
            <chakra.p
                mt={1}
                fontSize="sm"
                color="branddark.500"
                _dark={{
                color: "gray.200",
                }}
            >
                {props.des}
            </chakra.p>
            </Box>

            <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src={props.imgsrc}
            alt={props.title}
            />

            <Flex
            alignItems="center"
            justifyContent="center"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
            
            >
            <chakra.a color="white" fontWeight="bold" fontSize="lg" href='/boardgames' _hover={{color:"brand"}}>
                Details
            </chakra.a>
            </Flex>
        </Box>
        </Flex>
  );
}