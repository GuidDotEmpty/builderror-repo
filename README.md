How to reconstruct the problem

First 'npm install'
Then 'npm run build'

```
> next build --turbopack

   ▲ Next.js 15.5.2 (Turbopack)

   Creating an optimized production build ...
 ✓ Finished writing to disk in 32ms
 ✓ Compiled successfully in 1660ms
 ✓ Linting and checking validity of types
 ✓ Collecting page data
Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: fetch failed
    at async c (C:\temp\my-app\.next\server\chunks\ssr\[root-of-the-server]__159e24b3._.js:1:5751)
    at async e (C:\temp\my-app\.next\server\chunks\ssr\[root-of-the-server]__159e24b3._.js:1:5852) {
  digest: '2461942061',
  [cause]: [Error: unknown scheme]
}
Export encountered an error on /page: /, exiting the build.
```
