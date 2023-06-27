import Link from "next/link";
import React from "react";

const Post = ({ products }) => {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <h2 className="text-center">Post</h2>
      <div className="w-full">
        {products.map((product) => (
          <Link href={`post/${product.id}`}>
            <div
              key={product.id}
              className="border p-5 w-1/5 shadow-lg hover:scale-105 duration-150 my-3"
            >
              <h1>{product.title}</h1>
              <p>{[product.description]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;

//getStaticProps
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    props: { products: data },
    revalidate: 20,
  };
};
