"use client";
import useSWR from "swr";
import Link from "next/link";
import {
  Text,
  Heading,
  Box,
  Center,
  Button,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // let { data } = await supabase.from('user').select()


  function handler(e) {
    e.preventDefault();
    const dataitem = {
      email: email,
      password: password,
    };
  }

  return (
    <form onSubmit={handler}>
      <Center w={{ base: "100%", md: "50%" }} bg="#243241">
        <Box>
          <Heading color="white" mb="1rem">
            Login
          </Heading>
          <Text mb=".5rem" color="white">
            We dey together!
            
          </Text>
          <Box
            borderRadius=".5rem"
            bg="white"
            h="22rem"
            w="22rem"
            p="1rem"
            pt="3rem"
          >
            <Box mb="1rem">
              <Text fontSize=".8rem" m="auto">
                Email:
              </Text>
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb="1rem">
              <Text fontSize=".8rem" m="auto">
                Password:
              </Text>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Text fontSize=".8rem">
              Already have an account?
              <Link href="/auth/signup"> Signup</Link>
            </Text>
            <Button bg="#02B2AF" mt="1rem" mb=".5rem" w="100%" type="submit">
              Login
            </Button>
            <Button bg="yellow" w="100%">
              Login with Google
            </Button>
          </Box>
        </Box>
      </Center>
    </form>
  );
}
