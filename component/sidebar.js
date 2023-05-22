import {
  Avatar,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdSpaceDashboard, MdFeed } from "react-icons/Md";
import { AiOutlineSetting } from "react-icons/ai";
import { BsChatSquareTextFill } from "react-icons/bs";
import Navbtn from "./navbtn";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <Flex
      pos="fixed"
      //   left="5"
      h="100vh"
      //   mt="2.5vh"
      w="250px"
      bg="#2B3E4F"
      borderTopRightRadius="1rem"
      borderBottomRightRadius="1rem"
      color="white"
      p="1rem"
      pt="5rem"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Heading fontSize="2xl" mb="1rem">
          Welcome Nsikan,
        </Heading>

        <Navbtn icon={<MdFeed size="1.5rem" />} title="Feed" linkto="/user/feed" />
        <Navbtn icon={<BsChatSquareTextFill  size="1.5rem" />} title="Chat" linkto="/user/chat" />
        <Navbtn icon={<MdSpaceDashboard size="1.5rem" />} title="Dashboard" linkto="/user/dashboard"  />
        <Navbtn icon={<AiOutlineSetting size="1.5rem" />} title="Settings" linkto="/user/settings" />
      </Flex>
      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb="4">
        <Divider />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="/profile/nsi.png" />
          <Flex flexDir="column" ml="4">
            <Heading as="h3" size="sm">
              Nsikan Simon
            </Heading>
            <Text color="gray.400" fontSize=".8rem">
              Admin
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
