import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (wishListItem) => wishListItem.productID === action.payload.productID
  );

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex === -1) {
        state.push({ ...action.payload });
      }
    },
    removeItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
  },
});

export default slice.reducer;
export const { addItem, removeItem } = slice.actions;
