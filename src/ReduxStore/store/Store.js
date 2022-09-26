import { configureStore } from "@reduxjs/toolkit";
import randomUserSlice from "../Reducer/randomUserSlice";

export default configureStore({
  reducer: {
    user: randomUserSlice
  }
});
