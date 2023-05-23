"use client";
import useSWR from "swr";
import { Card, Flex } from "@chakra-ui/react";
import Postcard from "../../../../component/postcard";
import axios from "axios";

const fetcher = () =>
  axios
    .post("/api/dashboard", {
      params: {username: "nsiboss"},
    })
    .then((res) => res.data);

const Dashboard = () => {
  const { data, error, isLoading } = useSWR("/api/dashboard", fetcher);

  if (error)
    return <div>An error has occured, check your internet connection.</div>;
  if (isLoading) return <div>loading...</div>;
  if (data==undefined) return <div>loading...</div>;
  return <>
  <Flex>
    <Flex flexDir="column">
      {data.data.reverse().map((item) => {
        return (
          <Postcard  key={item.id}
            post={item.post}
            owner={item.username}
            time={item.created_at}
          />
        );
      })}
    </Flex>
  </Flex>
</>;
};

export default Dashboard;
