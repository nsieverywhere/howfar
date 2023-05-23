// fetch data on the client side using swr
"use client";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
};

const Chat = () => {
  const { data, error, isLoading } = useSWR("/api/chat", fetcher);
  if (error)
    return <div>An error has occured, check your internet connection.</div>;
  if (isLoading) return <div>loading...</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Chat;
