"use client"
import {
  Card,
  Flex,
  CardBody,
  Text,
  Button,
  CardFooter,
  Avatar,
  Box,
  Heading,
} from "@chakra-ui/react";

const Postcard = () => {
  return (
    <Flex direction={{ base: "column", sm: "row" }}>
      <Card
        mb="1rem"
        overflow="hidden"
        variant="outline"
        border="2px solid #02B2AF"
        borderRadius="1rem"
        minHeight="10rem"
        w="50vw"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
      >
        <CardBody>
          <Text>View a summary of all l your customers over the last month.</Text>
        </CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar size="sm" name="Nsikan Simon" src="/profile/nsi.png" />

            <Box>
              <Heading fontSize=".8rem">By Nsikan Simon</Heading>
              <Text fontSize=".7rem">time and date</Text>
            </Box>
          </Flex>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default Postcard;
