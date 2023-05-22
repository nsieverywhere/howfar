
import User from "./user/page";
import AuthLayout from "./auth/layout";
import Signup from "./auth/signup/page";
import UserLayout from "./user/layout";

export default function Home() {
  const session = true;

  return (
    <>{session ? <UserLayout children={<User />} /> : <AuthLayout children={<Signup />} />}</>
    // <Flex bg="#02B2AF" h="100vh" color="#243241" wrap="wrap">
    //   <Center w={{ base: "100%", md: "50%" }}>
    //     <Box>
    //       <Heading
    //         fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
    //         textAlign={{ base: "center", md: "left" }}
    //         mb="1rem"
    //       >
    //         Howfar
    //       </Heading>
    //       <Text
    //         textAlign={{ base: "center", md: "left" }}
    //         fontSize={{ base: "17px", md: "20px", lg: "24px" }}
    //       >
    //         Tell us what's popping!
    //       </Text>
    //     </Box>
    //   </Center>
    //   <Center w={{ base: "100%", md: "50%" }} bg="#243241">
    //     <Box>
    //       <Heading color="white" mb="1rem">
    //         Signup
    //       </Heading>
    //       <Text mb=".5rem" color="white">We gather dey!</Text>
    //       <Box
    //         borderRadius=".5rem"
    //         bg="white"
    //         h="22rem"
    //         w="22rem"
    //         p="1rem"
    //         pt="3rem"
    //       >
    //         <Box  mb="1rem">
    //           <Text fontSize=".8rem" m="auto">Email:</Text>
    //           <Input  placeholder="Enter your email" />
    //         </Box>
    //         <Box  mb="1rem">
    //           <Text fontSize=".8rem" m="auto">Password:</Text>
    //           <Input  placeholder="Enter your password" />
    //         </Box>
    //         <Text fontSize=".8rem">
    //           Already have an account?
    //           <Link href="/Auth/Login">Login</Link>
    //         </Text>
    //         <Button bg="#02B2AF" mt="1rem" mb=".5rem" w="100%">
    //           Signup
    //         </Button>
    //         <Button bg="yellow" w="100%">
    //           Signup with Google
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Center>
    // </Flex>
  );
}
