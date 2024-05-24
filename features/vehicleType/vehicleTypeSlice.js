import { createSlice } from "@reduxjs/toolkit";

const vehicleTypeSlice = createSlice({
  name: "vehicle",
  initialState: {
    vehicleType: [],
  },
  reducers: {
    setVehiclesType: (state, action) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { setVehiclesType } = vehicleTypeSlice.actions;
export default vehicleTypeSlice.reducer;
