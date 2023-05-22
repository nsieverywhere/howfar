"use client"
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../../component/sidebar";

const UserLayout = ({ children }) => {
  return (
    <Flex bg="white" h="100vh" color="#243241">
      {/* <Flex flexDirection="row" h="100%" color="white" p="2rem" bg="#2B3E4F" w="18em">Dashboard layout</Flex> */}
      <Sidebar />
      <Box
        ml="260px"
        mt="1rem"
        p="2rem"
        w="60vw"
        h="1000vh"
        // bg="#02B2AF"
        borderRadius="1rem"
        // border="2px solid #02B2AF"
        pos="sticky"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default UserLayout;
