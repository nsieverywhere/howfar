import { Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbtn = ({ title, icon, linkto }) => {
  return (
    <Link
      href={{
        pathname: `${linkto}`,
      }}
    >
      <Flex
        _hover={{
          background: "#FA8769",
          boxShadow: "0 4px 12px 0 rgba(0,0,0,0.2)",
        }}
        borderRadius=".5rem"
        bg="#02B2AF"
        width="100%"
        flexDir="row"
        h="3.5rem"
        mb=".5rem"
      >
        <IconButton
          background="none"
          mt={5}
          m="auto"
          _hover={{ background: "none" }}
          icon={icon}
          onClick={() => {}}
        />
        <Text m="auto" pr="10rem">
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default Navbtn;
