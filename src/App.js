import React, { useState } from 'react';
import Routes from './routes';
import { auth } from '@/init-firebase.js';
import AppLoading from '@/components/AppLoading.js';


// If a user refreshes the browser, then get the currently logged in user. When this component first loads, query for the user.
  // TODO: Update my server-side schema to include a query to get user by session ID. I probably need to add an @id directive to the sessionId field, if possible. If that is not possible, then I need to save the user's email address in localStorage and get the user by email or I could just get the user by ID.
  // const { data } = useQuery(GET_USER_BY_SESSION_ID, {
  //   variables: {
  //     id: localStorage.getItem("sessionId")
  //   }
  // });

const App = () => {
  const [firebaseLoading, setFirebaseLoading] = useState(true);


  auth.onAuthStateChanged((user) => {
    try {
      setFirebaseLoading(false);
    }
    catch(err) {
      console.error("onAuthStateChanged Error:", err);
    }
  });

    // try {



      // // If the user is logged in, then fetch their profile data and save it to the Apollo Cache
      // if (user) {
      //   // Retrieve the user from Dgraph. `user.uid` is the user ID from Firebase Auth.
      //   const userProfile = await getUser({
      //     variables: {
      //       // NOTE: You can comment one of these fields out to throw an error and test for errors.
      //       userId: user.uid,
      //       email: user.email // TODO: Remove this after `useLazyQuery` gets fixed. Ugh. See my comment in the `client-react/src/graphql/server/api.js` file.
      //     },
      //     // onCompleted: data => {
      //     //   console.log("REFRESH DATA:", data);
      //     // }
      //   });
      //   console.log("USER RETRIEVED FROM DGRAPH ON BROWSER REFRESH:", userProfile);

      //   // // If the user successfully logs in, then store the user object from the response in ApolloClient's cache and set `isAuthenticated` to true.
      //   // if (userProfile && userProfile.data && userProfile.data.updateUser && userProfile.data.updateUser.user.length > 0) {
      //   //   const userObj = userProfile.data.updateUser.user[0];
      //   //   client.writeData({
      //   //     data: {
      //   //       user: userObj,
      //   //       isAuthenticated: true
      //   //     }
      //   //   });
      //   //   console.log("APOLLO CACHE (REFRESH):", client.cache.data.data["$ROOT_QUERY.user"]);
      //   // }
      // }

  return (
    <div>
      {
        firebaseLoading ?
        <AppLoading /> :
        <Routes />
      }
    </div>
  );
};

export default App;
