# GraphQL APIs
If either the `client/api.js` or `server/api.js` file gets too big, then you can create `client/modules/` and `server/modules/` directories and group related Queries and Mutations into their own files. For example:

```
client/
    modules/
        auth.js
        posts.js
```

```
server/
    modules/
        auth.js
        posts.js
```
