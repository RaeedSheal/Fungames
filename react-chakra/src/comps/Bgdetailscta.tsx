import { Flex, chakra, Stack, Box, Image} from '@chakra-ui/react';
// import { Box } from 'framer-motion';

const Bgdetailscta = () => {
  return (
        <Flex
        direction={{
            base: "column",
            md: "row",
        }}
        _light={{
            bg: "brand500",
        }}
        px={8}
        py={24}
        mx="auto"
        >
            <Box
                w={{
                base: "full",
                md: 11 / 12,
                xl: 9 / 12,
                }}
                mx="auto"
                pr={{
                md: 20,
                }}
            >
                <chakra.h2
                fontSize={{
                    base: "3xl",
                    sm: "4xl",
                }}
                fontWeight="extrabold"
                lineHeight="shorter"
                color="white"
                _dark={{
                    color: "gray.100",
                }}
                mb={6}
                >
                <chakra.span display="block">Are you ready to experience the thrill of Monopoly?</chakra.span>
                <chakra.span
                    display="block"
                    color="white"
                    _dark={{
                    color: "gray.500",
                    }}
                >
                    So what are you waiting for? 
                </chakra.span>
                </chakra.h2>
                <chakra.p
                mb={6}
                fontSize={{
                    base: "lg",
                    md: "xl",
                }}
                color="gray.100"
                _dark={{
                    color: "gray.300",
                }}
                >
                Buy a Monopoly game today and start your journey to becoming a Monopoly mogul!
                </chakra.p>
                <Stack
                direction={{
                    base: "column",
                    sm: "row",
                }}
                mb={{
                    base: 4,
                    md: 8,
                }}
                spacing={2}
                >
                <Box display="inline-flex" rounded="md" shadow="md">
                    <chakra.a
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        px={5}
                        py={3}
                        border="solid transparent"
                        fontWeight="bold"
                        w="full"
                        rounded="md"
                        _light={{
                            color: "white",
                        }}
                        bg="brand"
                        _dark={{
                            bg: "brand.500",
                        }}
                        _hover={{
                            bg: "brand.700",
                            _dark: {
                            bg: "brand.600",
                            },
                        }}
                    >
                    Buy it now
                    </chakra.a>
                </Box>
                </Stack>
            </Box>
            <Box
                w={{
                base: "full",
                md: 10 / 12,
                }}
                mx="auto"
                textAlign="center"
            >
                <Image
                w="full"
                rounded="lg"
                shadow="2xl"
                src="https://images.unsplash.com/photo-1611371805663-af65e62e9071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80"
                alt="Hellonext feedback boards software screenshot"
                />
            </Box>
        </Flex>
  )
}

export default Bgdetailscta