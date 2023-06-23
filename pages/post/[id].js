import React from "react";
import { useRouter } from "next/router";
const post = () => {
  const route = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>post: {route.query.id}</h1>
    </div>
  );
};

export default post;
