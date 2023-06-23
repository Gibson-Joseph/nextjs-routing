Video Ref: https://www.youtube.com/watch?v=GJNlfNKhj6g

Docs: Ref: https://nextjs.org/docs/pages/building-your-application/routing

Pages and layout:

When a file is added to the Pages folder that is automatically available as a route.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a15f2d3-b469-4a95-875a-180df53bb0e2/Untitled.png)

****[Index routes](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes):**

The index.js file is route as a this parent directory.

Ex:

• `pages/index.js` → `/` 

Nested Route:

The NextJs support the Nested route, if we want to create a next route simply we have to create a multipe file in the parent directory, Now that will react as a nested route.

- `pages/blog/index.js → /blog`
- `pages/blog/first-post.js → /blog/first-post`

****Dynamic Routes:****

Nextjs support the Dynamic route, If you want to create the dynamic route, we should create the route folder look like the following path `pages/posts/[id].js` . Then you can access the following route like this `posts/1` and `posts/2` and etc…

**Access the Dynamic segmet:**

We can access the dynamic  segmet using the `useRouter()` Hook.

In this case our dunamic route path is `pages/posts/[id].js` . The id is called segment.

```jsx
import React from "react";
import { useRouter } from "next/router";
const post = () => {
  const route = useRouter();

  return (
    <div>
      <h1>post: {route.query.id}</h1>
    </div>
  );
};

export default post;
```

Route: 

`posts/[id].js`

Example URL: 

`posts/7`

Parms: 

`{ id: 7 }`

**Catch-all Segments:**

`[...folderName]` this file name help us to catch all subsequent segments from our route URL. For example `pages/shop/[...id].js` this path will match `/shop/a` or `/shop/b` or `/shop/c` and etc.. This will return the array of subsequent segments.

But This is not match the `/shop`

Route:

`/shop/[...id].js`

`/shop/[...id].js`

Example URL:

`/shop/a`

`/shop/a/b`

Parms:

`{ id: [ a ] }` 

`{ id: [ a, b ] }` 

```jsx
const Shop = () => {
  const router = useRouter();
  return (
    <div>
      Shop Item:
      {router.query?.id?.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f29e30b1-9b7c-4b43-8d11-ecd581299c66/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c64ba055-5da5-4019-906a-bd1094322580/Untitled.png)

****Optional Catch-all Segments:****

Catch-all Segments can be made **optional** by including the parameter in double square brackets: `[[...folderName]]`.

The difference between **catch-all** and **optional catch-all** segments is that with optional, the route without the parameter is also matched (`/products` in the example above).

Route: 

`/products/[[...id]].js`

`/products/[[...id]].js`

Example URL:

`/products`

`/products/a/b`

Parms: 

`{ id: { } }`

`{ id: [ a, b ] }` 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fb2fa444-e155-4e09-95c8-2792f79bb122/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84d2e8dd-077c-4ca0-a194-1e430fdc6f79/Untitled.png)

****Layout Pattern:****

`components/Layout.jsx`

```jsx
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
```

****Single Shared Layout with Custom App:****

If you only have one layout for your entire application, you can create a Custom App and wrap your application with the layout.

`_app.js`

```jsx
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

****Per-Page Layouts:****

Ref: [https://www.codeconcisely.com/posts/nextjs-multiple-layouts](https://www.codeconcisely.com/posts/nextjs-multiple-layouts/)

****Linking and Navigating:****

In Next.js, you can use the `Link` Component `next/link` to link between pages in your application. The `<Link>` allows you to do client-side navigation.

`Nav.jsx`

```
	<ul className="flex gap-5">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/post/1">Post</Link>
      </li>
      <li>
        <Link href="/shop/1">Shop</Link>
      </li>
      <li>
        <Link href="/products/laptop/mobile">Products</Link>
      </li>
   </ul>
```

`/` → `pages/index.js`

`/post/1` → `pages/post/[id].js`

`/shop/1` →`pages/shop/[...id].js`

`/products/laptop/mobile` → `pages/products/[[...id]].js`

**Alternatively, using a URL Object:**

```jsx
<Link
    href={{
      pathname: "/shop/[id]",
      query: { id: 77 },
    }}>
    Post
</Link>
```