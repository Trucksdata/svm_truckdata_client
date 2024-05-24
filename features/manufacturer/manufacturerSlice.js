import { createSlice } from "@reduxjs/toolkit";

const manufacturerSlice = createSlice({
  name: "manufacturer",
  initialState: {
    manufacturerDetails: [],
  },
  reducers: {
    setManufacturer: (state, action) => {
      state.manufacturerDetails = action.payload;
    },
  },
});

export const { setManufacturer } = manufacturerSlice.actions;
export default manufacturerSlice.reducer;