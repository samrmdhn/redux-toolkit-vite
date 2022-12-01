import { createSlice } from "@reduxjs/toolkit";export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const cloneState = [...state.cart];

      const { id } = action.payload;

      const selectedItem = cloneState.find((item) => {
        return item.id == id;
      });

      if (selectedItem) {
        selectedItem.quantity++;
      } else {
        cloneState.push(action.payload);
      }

      state.cart = cloneState;
    },

    deleteItem: (state, action) => {
      const cloneState = [...state.cart];

      const { id } = action.payload;

      const filteredItem = cloneState.filter((item) => {
        return item.id != id;
      });

      state.cart = filteredItem;
    },

    incrementQuantity: (state, action) => {
      const cloneState = [...state.cart];

      const { id } = action.payload;

      const selectedItem = cloneState.find((item) => {
        return item.id == id;
      });

      if (selectedItem) selectedItem.quantity++;

      state.cart = cloneState;
    },

    decrementQuantity: (state, action) => {
      const cloneState = [...state.cart];

      const { id } = action.payload;

      const selectedItem = cloneState.find((item) => {
        return item.id == id;
      });

      if (selectedItem.quantity == 1) {
        selectedItem.quantity = 1;
      } else {
        selectedItem.quantity--;
      }

      state.cart = cloneState;
    },
  },
});

export const { addItem, deleteItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
