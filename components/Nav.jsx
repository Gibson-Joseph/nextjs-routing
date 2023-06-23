import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full bg-slate-100 flex justify-between px-5 py-3">
      <h1 className="text-center">Nav Component</h1>
      <div className="">
        <ul className="flex gap-5">
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/">Home</Link>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link
              href={{
                pathname: "/shop/[id]",
                query: { id: 77 },
              }}
            >
              Post
            </Link>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/shop/1">Shop</Link>
          </li>
          <li className="border hover:scale-110 hover:bg-slate-200 py-1 px-2 rounded-lg hover:shadow-md">
            <Link href="/products/laptop/mobile">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
