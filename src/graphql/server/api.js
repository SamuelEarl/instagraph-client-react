import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation CreateUser($userId: String!, $firstName: String!, $lastName: String!, $email: String!) {
    addUser(input: [
      {
        userId: $userId
        firstName: $firstName
        lastName: $lastName
        email: $email
        # randomField: "randomValue"
      }
    ])
    {
      user {
        userId
        firstName
        lastName
        email
      }
    }
  }
`;

// `useLazyQuery` does not work as it should: https://github.com/apollographql/react-apollo/issues/3499.
// Some people suggested using a mutation instead of query for things like querying a user or session token because mutations return promises. So I will use this mutation for now in place of the query that is listed after it until `useLazyQuery` works properly.
export const GET_USER = gql`
  mutation GetUser($userId: String!, $email: String!) {
    updateUser(input: {
      filter: {
        userId: { eq: $userId }
      },
      set: {
        email: $email
      }
    })
    {
      user {
        userId
        firstName
        lastName
        email
      }
    }
  }
`;
// When `useLazyQuery` is fixed, then I will use this query instead of the one above. See my comment above.
// export const GET_USER = gql`
//   query GetUser($userId: String!) {
//     getUser(userId: $userId) {
//       userId
//       firstName
//       lastName
//       email
//     }
//   }
// `;


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
      userId
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
