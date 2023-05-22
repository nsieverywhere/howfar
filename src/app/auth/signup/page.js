"use client";
import Link from "next/link";
import {
  Text,
  Heading,
  Box,
  Center,
  Button,
  Input,
} from "@chakra-ui/react";

export default function Signup() {
  return (
    <Center w={{ base: "100%", md: "50%" }} bg="#243241">
        <Box>
          <Heading color="white" mb="1rem">
            Signup
          </Heading>
          <Text mb=".5rem" color="white">We gather dey!</Text>
          <Box
            borderRadius=".5rem"
            bg="white"
            h="22rem"
            w="22rem"
            p="1rem"
            pt="3rem"
          >
            <Box  mb="1rem">
              <Text fontSize=".8rem" m="auto">Email:</Text>
              <Input  placeholder="Enter your email" />
            </Box>
            <Box  mb="1rem">
              <Text fontSize=".8rem" m="auto">Password:</Text>
              <Input  placeholder="Enter your password" />
            </Box>
            <Text fontSize=".8rem">
              Already have an account? 
              <Link href="/auth/login"> Login</Link>
            </Text>
            <Button bg="#02B2AF" mt="1rem" mb=".5rem" w="100%">
              Signup
            </Button>
            <Button bg="yellow" w="100%">
              Signup with Google
            </Button>
          </Box>
        </Box>
      </Center>
  );
}
