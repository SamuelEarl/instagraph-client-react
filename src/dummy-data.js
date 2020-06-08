/**
 * Once a user is logged in, they should see all posts from all users on their dashboard. You could
 * implement pagination to show only a certain number of posts at a time, but I won't implement
 * pagination in this app.
 *
 * Dgraph has a dateTime scalar type that uses RFC 3339 format
 * (https://dgraph.io/docs/query-language/#schema-types), so we need to convert our timestamps for
 * the createdAt fields into RFC 3339 format before sending those timestamps to Dgraph. This is how
 * you convert a JavaScript date object into RFC 3339 format:
 * https://codetogo.io/how-to-create-date-in-rfc3339-format-in-javascript/.
 */
// export const postsArray = [];
export const postsArray = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    createdAt: (new Date()).toISOString(),
    content: "Content string...",
    likes: 2,
    comments: [
      {
        id: "1",
        firstName: "James",
        lastName: "Howard",
        createdAt: (new Date()).toISOString(),
        content: "This is James' comment...",
      },
      {
        id: "2",
        firstName: "Bill",
        lastName: "Smith",
        createdAt: (new Date()).toISOString(),
        content: "This is Bill's comment...",
      },
      {
        id: "3",
        firstName: "Mary",
        lastName: "Taylor",
        createdAt: (new Date()).toISOString(),
        content: "This is Mary's comment...",
      },
      {
        id: "4",
        firstName: "Betty",
        lastName: "Johnson",
        createdAt: (new Date()).toISOString(),
        content: "This is Betty's comment...",
      },
      {
        id: "5",
        firstName: "David",
        lastName: "Garrison",
        createdAt: (new Date()).toISOString(),
        content: "This is David's comment...",
      }
    ]
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    createdAt: (new Date()).toISOString(),
    content: "Another content string...",
    likes: 1,
    comments: [
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        createdAt: (new Date()).toISOString(),
        content: "Another comment goes here...",
      }
    ]
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    createdAt: (new Date()).toISOString(),
    content: "Content string...",
    likes: 1,
    comments: [
      {
        id: "3",
        firstName: "James",
        lastName: "Howard",
        createdAt: (new Date()).toISOString(),
        content: "Comment goes here...",
      }
    ]
  },
  {
    id: "4",
    firstName: "John",
    lastName: "Doe",
    createdAt: (new Date()).toISOString(),
    content: "Content string...",
    likes: 1,
    comments: [
      {
        id: "4",
        firstName: "James",
        lastName: "Howard",
        createdAt: (new Date()).toISOString(),
        content: "Comment goes here...",
      }
    ]
  }
];
