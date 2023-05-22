// fetch data on the client side using swr
"use client"
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
};

const Chat = () => {
  const { data, error } = useSWR("chat", fetcher);

  if (error) return "An error has occured, check your internet connection."
  if(!data) return "loading..."

  return (
    <>
      {data.map(item => {
        return (<div key={item.id}>{item.title}</div>)
         
     })}
    </>
  );
};

export default Chat;
