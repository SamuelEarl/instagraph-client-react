import { gql } from 'apollo-boost';

export const GET_AUTHOR = gql`
  query RetrieveAuthor($id: ID!) {
    getAuthor(id: $id) {
      firstName
      lastName
      password
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    queryPost {
      id
      author {
        firstName
        lastName
      }
      createdAt
      content
      comments { # I want to return the total number of comments. This would be done with a custom resolver function.
        content
      }
      likes # I want to return the total number of likes. This would be done with a custom resolver function.
    }
  }
`;
