import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNotes: [],
  archivedNotes: [],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setActiveNotes: (state, action) => {
      state.activeNotes = action.payload;
    },
    setArchivedNotes: (state, action) => {
      state.archivedNotes = action.payload;
    },
  },
});

export const { setActiveNotes, setArchivedNotes } = noteSlice.actions;
export default noteSlice.reducer;
