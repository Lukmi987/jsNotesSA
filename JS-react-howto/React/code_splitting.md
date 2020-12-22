Pozn: "chunkování" je asi nesmyslný termín, správný je "code splitting" a "chunks" jsou
výsledné rozdělené části.

https://reactjs.org/docs/code-splitting.html

Bundling:

- process of following imported files and merging them into a single file
- bundling is great, but as your app grows, your bundle will grow too, especially
  if you are including large third-party libraries

Code splitting:

- a feature supported by bundlers like Webpack which can create multiple bundles/chunks
  that can be dynamically loaded at runtime
- helps you to “lazy-load” just the things that are currently needed by the user,
  which can dramatically improve the performance of your app
- while you haven’t reduced the overall amount of code in your app, you’ve avoided
  loading code that the user may never need, and reduced the amount of code needed during the initial load

A) DYNAMIC IMPORT:

import("./math").then(math => {
console.log(math.add(16, 26));
});

- its needed to set webpack and babel properly

B) React.lazy and suspense

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}


C) Webpack plugin for chunkování, pomocí entry pointu v configu
