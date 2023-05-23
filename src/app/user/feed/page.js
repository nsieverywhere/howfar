"use client";
import useSWR from "swr";
import { Card, Flex } from "@chakra-ui/react";
import Postcard from "../../../../component/postcard";

const fetcher = async () => {
  const userdata = {
    username: "nsiboss",
  };
  const response = await fetch("/api/feed", {
    method: "POST",
    body: JSON.stringify(userdata),
  });

  
  const data = await response.json();
  return data;
};

const Feed = () => {
  const { data, error, isLoading } = useSWR("/api/feed", fetcher);

  if (error)
    return <div>An error has occured, check your internet connection.</div>;
  if (isLoading) return <div>loading...</div>;
  if (data.data == undefined) return <div> check your internet connection.</div>;
  else {
    return (
      <>
        <Flex>
          <Flex flexDir="column">
            {data.data.reverse().map((item) => {
              return (
                <Postcard
                  key={item.id}
                  post={item.post}
                  owner={item.username}
                  time={item.created_at}
                />
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  }
};

export default Feed;
