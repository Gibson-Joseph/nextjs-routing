import React from "react";
import { useRouter } from "next/router";
const post = ({ item }) => {
  const route = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>post: {route.query.id}</h1>
      <div>
        <h2>{item.title}</h2>
        <img src={item.image} width={200} height={200} />
        <p>{item.description}</p>
        <p>price: {item.price}</p>
      </div>
    </div>
  );
};

export default post;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  console.log(params);
  console.log(data);
  return {
    props: { item: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const prod = await res.json();
  return {
    paths: prod.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: true,
  };
};
