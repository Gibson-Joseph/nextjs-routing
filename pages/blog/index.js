import React from "react";

const BlogComponent = ({ product }) => {
  console.log("product", product);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Welcome to My blog gallery ssg</h1>
      <div className="flex">
        {product.map((item) => (
          <div key={item.id} className="w-1/5 border p-5 m-4">
            <a>
              <h3 className="py-4">{item.title}</h3>
              <hr className="my-2" />
            </a>
            <img src={item.image} height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;

// getServerSideProps
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data = await res.json();
  console.log(data);
  return {
    props: { product: data },
  };
};
