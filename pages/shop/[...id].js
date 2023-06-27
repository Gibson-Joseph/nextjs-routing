import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Shop = (props) => {
  const router = useRouter();
  console.log("query", router.query);
  console.log("props", props);

  useEffect(() => {
    console.log("Shop component is called");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h3>Shop Item: </h3>
        {router.query?.id?.map((item, index) => (
          <span key={index} className="px-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Shop;

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}
