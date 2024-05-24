import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    vehicles: [],
  },
  reducers: {
    addToCompare: (state, action) => {
      if (state.vehicles.length <= 2) {
        state.vehicles.push(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    },
    clearAllCompare: (state) => {
      state.vehicles = [];
    },
  },
});

export const { addToCompare, removeFromCompare, clearAllCompare } = compareSlice.actions;
export default compareSlice.reducer;
