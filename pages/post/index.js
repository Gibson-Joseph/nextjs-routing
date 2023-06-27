import React from "react";

const Post = () => {
  return (
    <div className="">
      {products.map((product) => (
        <Link href={`products/${product.id}`}>
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{[product.description]}</p>
          </div>
        </Link>
      ))}
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
