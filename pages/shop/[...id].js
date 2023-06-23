import { useRouter } from "next/router";
import React from "react";

const Shop = () => {
  const router = useRouter();
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
