import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   imgUrl:""
  },
  reducers: {
  storeImgUrl:(state,actions)=>{
 state.imgUrl=actions.payload
  }
  }
});

export const { storeImgUrl } = userSlice.actions;
export const selectImgUrl = (state) => state.user.imgUrl;
export default userSlice.reducer;
