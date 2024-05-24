import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    articleDetails: [],
  },
  reducers: {
    setArticleDetails: (state, action) => {
      state.articleDetails = action.payload;
    },
  },
});

export const { setArticleDetails } = articleSlice.actions;
export default articleSlice.reducer;
