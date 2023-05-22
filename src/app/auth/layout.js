"use client";
import { Text, Heading, Box, Flex, Center } from "@chakra-ui/react";

export default function AuthLayout({ children }) {
  return (
    <Flex bg="#02B2AF" h="100vh" color="#243241" wrap="wrap">
      <Center w={{ base: "100%", md: "50%" }}>
        <Box>
          <Heading
            fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb="1rem"
          >
            Howfar
          </Heading>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "17px", md: "20px", lg: "24px" }}
          >
            Tell us what's popping!
          </Text>
        </Box>
      </Center>
      <Center w={{ base: "100%", md: "50%" }} bg="#243241">
        {children}
      </Center>
    </Flex>
  );
}
