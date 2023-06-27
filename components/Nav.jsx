import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const handleUseRouter = () => {
    router.push("/");
  };

  const handleShallowRouting = () => {
    // router.push(
    //   { pathname: "/shop/18", query: { param: "value" } },
    //   undefined,
    //   { shallow: true }
    // );

    router.push("/?counter=10", "/shop/18?counter=10", { shallow: true });
  };
  return (
    <div className="w-full bg-slate-100 flex justify-between px-5 py-3">
      <h1 className="text-center">Nav Component</h1>
      <div className="">
        <ul className="flex gap-5">
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            {/* <Link href="/">Home</Link> */}
            <button onClick={() => handleUseRouter()}>Home</button>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            {/* In this scenario application reload */}
            <Link
              href={{
                pathname: "/post",
                // query: { id: 77 },
              }}
              // shallow={true}
            >
              Post
            </Link>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            {/* <Link href="/shop/1">Shop</Link> */}
            <button onClick={() => handleShallowRouting()}>Shop</button>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/products/laptop/mobile">Products</Link>
          </li>
          {/* albums */}
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/albums">Albums</Link>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/blog">Blog</Link>
          </li>
          {/* Users */}
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
