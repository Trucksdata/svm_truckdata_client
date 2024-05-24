import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    {
      id: 1,
      name: "Manufacturer",
      icon: "/icons/manufacture.png",
      iconWidth: "40px",
    },
    {
      id: 3,
      name: "Application",
      icon: "/icons/pick-up-truck.png",
      iconWidth: "40px",
    },
    { id: 4, name: "G V W", icon: "/icons/weight.png", iconWidth: "40px" },
    {
      id: 5,
      name: "Power Source",
      icon: "/icons/diesel.png",
      iconWidth: "40px",
    },
  ],
  currentTab: "Manufacturer",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
