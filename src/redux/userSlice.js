import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "hemanth",
  },
  reducers: {},
  extraReducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
