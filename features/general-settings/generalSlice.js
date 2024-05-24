import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    generalDetails: [],
  },
  reducers: {
    setGeneralDetails: (state, action) => {
      state.generalDetails = action.payload;
    },
  },
});

export const { setGeneralDetails } = generalSlice.actions;
export default generalSlice.reducer;
