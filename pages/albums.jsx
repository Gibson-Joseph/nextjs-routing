import React from "react";

const Albums = ({ blog }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>All Albums</h1>
      <h1> Welcome to My blog gallarey</h1>
      <div className="flex">
        {blog.map((item) => (
          <div
            key={item.id}
            className="w-1/5 border m-3 p-5 flex flex-col justify-center items-center"
          >
            <img src={item.image} width={150} height={150} className="mb-5" />
            <div>
              <a>
                <h3>{item.title}</h3>
                <hr className="mt-2" />
              </a>
              <p className="py-2"> {item.description}</p>
              <h3 className="border px-3 py-1"> $ {item.price} </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;

// getStaticProps
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=3");
  const data = await res.json();

  console.log(data);
  return {
    props: { blog: data },
  };
};
