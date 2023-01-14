import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setLogout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
    },
  },
});

export const { setLoggedUser, setLogout } = userSlice.actions;
export default userSlice.reducer;
