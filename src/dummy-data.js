/**
 * Once a user is signed in, they should see all posts from all users on their dashboard. You could
 * implement pagination to show only a certain number of posts at a time, but I won't implement
 * pagination in this app.
 *
 * Dgraph has a dateTime scalar type that uses RFC 3339 format
 * (https://dgraph.io/docs/query-language/#schema-types), so we need to convert our timestamps for
 * the createdAt fields into RFC 3339 format before sending those timestamps to Dgraph. This is how
 * you convert a JavaScript date object into RFC 3339 format:
 * https://codetogo.io/how-to-create-date-in-rfc3339-format-in-javascript/.
 */

export const author = {
  firstName: "Ryan",
  lastName: "Clark",
  email: "ryan@example.com",
  password: "password123"
}

// export const postsArray = [];
export const postsArray = [
  {
    id: "1",
    firstName: "Kade",
    lastName: "Peterson",
    createdAt: new Date().toISOString(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
    likes: 2,
    comments: [
      {
        id: "1",
        firstName: "James",
        lastName: "Howard",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      },
      {
        id: "2",
        firstName: "Bill",
        lastName: "Smith",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      },
      {
        id: "3",
        firstName: "Mary",
        lastName: "Taylor",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      },
      {
        id: "4",
        firstName: "Betty",
        lastName: "Johnson",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      },
      {
        id: "5",
        firstName: "David",
        lastName: "Garrison",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      }
    ]
  },
  {
    id: "2",
    firstName: "Ronald",
    lastName: "Jenkins",
    createdAt: new Date().toISOString(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
    likes: 1,
    comments: [
      {
        id: "2",
        firstName: "Jane",
        lastName: "Williams",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      }
    ]
  },
  {
    id: "3",
    firstName: "Brad",
    lastName: "West",
    createdAt: new Date().toISOString(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
    likes: 1,
    comments: [
      {
        id: "3",
        firstName: "James",
        lastName: "Howard",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      }
    ]
  },
  {
    id: "4",
    firstName: "Tom",
    lastName: "Miller",
    createdAt: new Date().toISOString(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
    likes: 1,
    comments: [
      {
        id: "4",
        firstName: "James",
        lastName: "Howard",
        createdAt: new Date().toISOString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur tristique odio ac mattis. Duis augue nisi, consequat vitae nulla sed, gravida luctus odio. Etiam vitae placerat metus, at pulvinar orci. Quisque eu dui quis nibh interdum aliquet in in elit. Sed neque metus, vulputate id ante ac, laoreet gravida felis. Nunc turpis ante, posuere tempus commodo in, rutrum et mi. Duis nec urna vestibulum, suscipit elit vel, tincidunt metus. Aenean volutpat convallis risus nec ullamcorper. Proin tempus orci quis mi consequat, non commodo ante semper. Pellentesque quis nisl sapien. Ut eu ullamcorper ligula. Morbi finibus ante vel dolor lacinia interdum. Maecenas quis malesuada tortor.",
      }
    ]
  }
];
