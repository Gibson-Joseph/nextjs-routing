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

****Injecting the router:****

To access the **router object** in a React component you can use **useRouter** or **withRouter**.

The following example shows how to do basic page navigations with **useRouter().**

```jsx
import { useRouter } from 'next/router'
 
export default function ReadMore() {
  const router = useRouter()
 
	  return (
	    <button onClick={() => router.push('/about')}>
	      Click here to read more
	    </button>
	  )
	}
```

****Shallow Routing:****

In Next.js, shallow routing is a feature that allows you to update the URL of a page without triggering a full page refresh. It's useful when you want to modify the URL query parameters or hash without fetching new data or re-rendering the entire page.

shallow routing refers to navigating to the same page but no calls to getServerSideProps, getStaticProps, and getInitialProps methods.

```jsx
const handleShallowRouting = () => {
    router.push(
      { pathname: "/shop/18", query: { param: "value" } },
      undefined,
      { shallow: true }
    );
  };

<button onClick={() => handleShallowRouting()}>Shop</button>
```

**getServerSideProps:**

It is used to **fetch** **data** on the **server side** before rendering a page, enabling you to prepopulate the page with data before it is sent to the client.

When you define a **getServerSideProps** function in a Next.js page component, it runs on the server every time a request is made to that page. 

The function **must be exported** from the page component module.

```jsx
export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}
```

```jsx
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
```

### **Middleware:**

****Custom Document:****

**Ref**: https://www.geeksforgeeks.org/next-js-custom-document/

A custom document is a functionality that allows gives us access to setting up the metadata globally giving us an upper hand in **search engine optimization**. 

It can also be used to give styling globally.

This file allows you to override the default **`Document`** component provided by Next.js and customize the HTML document rendered on the server.

By customizing the **`_document.js`** file, you can add custom meta tags, stylesheets, and scripts.

The Document is like the top-level HTML structure of your Next.js application. By default, it looks like this:

In the following code, we ware add the SEO globally.

**`_document.js`**

```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A site for demonstrating use of _document file"
        />
        <meta name="gibson" content="test_custom_documents" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99476de4-f2b9-428e-8356-20d114fce696/Untitled.png)

### ****Data Fetching****

**Ref:** https://wallis.dev/blog/nextjs-serverside-data-fetching

**Ref:** https://www.geeksforgeeks.org/next-js-data-fetching-methods/

**Ref:** https://blog.openreplay.com/data-fetching-in-next-js/ 

****Methods of Fetching Data in Next.js:****

- `useEffect` and `useState` hook for client-side data fetching.
- `getServerSideProps` for server-side data fetching
- `getStaticProps` for static-site generation
- `getStaticPath` for the static-site generation, which uses dynamic routes.

**Server-side data fetching**:

The **`getServerSideProps`** method fetches data each time a user requests the page.

Every time data is added or updated, the UI asks for all the data again, which means that on every browser refresh, the data is fetched again before rendering it to the user.

If the client makes a subsequent request, the data will be fetched again.

```jsx
import React from "react";

const BlogComponent = ({ product }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Welcome to My blog gallery ssg</h1>
      {product.map((item) => (
        <div key={item.id}>
          <a>
            <h3>{item.title}</h3>
          </a>
          <img src={item.url} />
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;

// getServerSideProps
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=3");
  const data = await res.json();
  console.log(data);
  return {
    props: { product: data },
  };
};
```

****static-site generation:****

`**getStaticProps:**`

In this section, you will learn how to use the `getStaticProps` and `getStaticPaths` for a static-site generation.

It enables the page to be statically generated and will produce fast load times for all the data-fetching methods.

the `getServerSideProps` in which the page has to be refreshed from the browser to show the updated data.

This is one difference between server-side rendering and static-site generation.

```jsx
import React from "react";

const Albums = ({ blog }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>All Albums</h1>
      <h1> Welcome to My blog gallarey ssg</h1>
      <div className="flex">
        {blog.map((item) => (
          <div key={item.id} className="w-1/5">
            <img src={item.image} width={200} height={200} />
            <div>
              <a>
                <h3>{item.title}</h3>
              </a>
              <p> {item.description}</p>
              <h3> ${item.price} </h3>
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
```

`**getStaticPath:**`

If a page uses `getStaticProps` and has Dynamic Routes, it must define a list of paths that will be statically produced.

When you export the `getStaticPaths` (Static Site Generation) function from a page that uses dynamic routes, Next.js statically pre-renders all the paths provided by ****`getStaticPaths`.

```jsx
import React from "react";
import { useRouter } from "next/router";
const post = ({ item }) => {
  const route = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>post: {route.query.id}</h1>
      <div>
        <h2>{item.title}</h2>
        <img src={item.image} width={200} height={200} />
        <p>{item.description}</p>
        <p>price: {item.price}</p>
      </div>
    </div>
  );
};

export default post;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  console.log(params);
  console.log(data);
  return {
    props: { item: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const prod = await res.json();
  return {
    paths: prod.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: true,
  };
};
```