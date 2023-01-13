import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";
import noteReducer from "./noteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    notes: noteReducer,
  },
});
