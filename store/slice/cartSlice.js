import { createSlice } from "@reduxjs/toolkit";


const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productID === action.payload.productID
  );

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload });
      }
    },
    removeItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decreaseItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity == 0) {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});

export default slice.reducer;

export const {
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} = slice.actions;
