// This file is the accumulated state from all of the store modules, which is similar to how Vuex
// works. This file gets imported into the index.js file to provide the default state for
// client-side GraphQL queries (i.e. getters).

import { authState } from './auth';

export default state = {
  ...authState,
};
