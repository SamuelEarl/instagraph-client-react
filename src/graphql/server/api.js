import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation CreateUser($userId: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    addUser(input: [
      {
        id: $userId
        firstName: $firstName
        lastName: $lastName
        email: $email
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


// export const LOG_IN = gql`
//   mutation LogIn($email: String!, $password: String!, $sessionId: String) {
//     updateUser(input: {
//       filter: {
//         email: { eq: $email }
//         password: { eq: $password }
//       },
//       set: {
//         sessionId: $sessionId
//       }
//     })
//     {
//       user {
//         id
//         firstName
//         lastName
//         email
//         sessionId
//       }
//     }
//   }
// `;

// export const LOG_OUT = gql`
//   mutation LogOut($id: ID!) {
//     updateUser(input: {
//       filter: {
//         id: [$id]
//       },
//       set: {
//         sessionId: ""
//       }
//     })
//     {
//       user {
//         id
//         email
//       }
//     }
//   }
// `;

export const GET_USER = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

// export const GET_USER_BY_USER_ID = gql`
//   query GetUserByUserId($userId: String!) {
//     getUser(userId: $userId) {
//       id
//       userId
//       firstName
//       lastName
//       email
//     }
//   }
// `;

// // TODO: Delete this query because I will not be using it.
// export const GET_USER_BY_SESSION_ID = gql`
//   query GetUserBySessionID($sessionId: String!) {
//     getUser(sessionId: $sessionId) {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
// `;

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
