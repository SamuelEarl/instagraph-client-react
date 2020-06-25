import gql from 'graphql-tag';

export const REGISTER = gql`
  mutation CreateAuthor($firstName: String!, $lastName: String!, $email: String!, $password: String!, $sessionId: String!) {
    addAuthor(input: [
      {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        sessionId: $sessionId
      }
    ])
    {
      author {
        id
        firstName
        lastName
        email
        password
        sessionId
      }
    }
  }
`;


export const SIGN_IN = gql`
  mutation UpdateAuthorSessionId($email: String!, $password: String!, $sessionId: String!) {
    updateAuthor(input: {
      filter: {
        email: { eq: $email }
        password: { eq: $password }
      },
      set: {
        sessionId: $sessionId
      }
    })
    {
      author {
        id
        firstName
        lastName
        email
        password
        sessionId
      }
    }
  }
`;

export const SIGN_OUT = gql`
  mutation ClearAuthorSessionId($id: ID!) {
    updateAuthor(input: {
      filter: {
        id: [$id]
      },
      set: {
        sessionId: ""
      }
    })
    {
      author {
        id
        firstName
        lastName
        email
        password
        sessionId
      }
    }
  }
`;

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
