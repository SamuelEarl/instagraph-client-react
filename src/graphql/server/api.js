import gql from 'graphql-tag';

export const REGISTER = gql`
  mutation Register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(input: [
      {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ])
    {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;


export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!, $sessionId: String) {
    updateUser(input: {
      filter: {
        email: { eq: $email }
        password: { eq: $password }
      },
      set: {
        sessionId: $sessionId
      }
    })
    {
      user {
        id
        firstName
        lastName
        email
        sessionId
      }
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut($id: ID!) {
    updateUser(input: {
      filter: {
        id: [$id]
      },
      set: {
        sessionId: ""
      }
    })
    {
      user {
        id
        email
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_USER_BY_SESSION_ID = gql`
  query GetUserBySessionID($sessionId: String!) {
    getUser(sessionId: $sessionId) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    queryPost {
      id
      user {
        firstName
        lastName
      }
      createdAt
      content
      comments { # I want to return the total number of comments. This would be done with a custom resolver function. https://stackoverflow.com/questions/34321688/can-graphql-return-aggregate-counts
        content
      }
      likes # I want to return the total number of likes. This would be done with a custom resolver function. https://stackoverflow.com/questions/34321688/can-graphql-return-aggregate-counts
    }
  }
`;
