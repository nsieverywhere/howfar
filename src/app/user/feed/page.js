"use client";
import useSWR from "swr";
import { Card, Flex } from "@chakra-ui/react";
import Postcard from "../../../../component/postcard";
// import { supabase } from "../../../../util/supabaseClient";


const Feed = async () => {

  return (
    <Flex>
      <Flex flexDir="column">
        <Postcard />
        <Postcard />
      </Flex>
    </Flex>
  );
};

export default Feed;
