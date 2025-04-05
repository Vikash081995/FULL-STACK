import { configureStore } from "./configureStore";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});


export * from './thunks/fetchUsers'