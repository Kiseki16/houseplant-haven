<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],        // items in the cart
  totalQuantity: 0, // total items count
  totalPrice: 0     // total price
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // add item logic
    },
    incrementQty: (state, action) => {
      // increment quantity logic
    },
    decrementQty: (state, action) => {
      // decrement quantity logic
    },
    removeItem: (state, action) => {
      // remove item logic
    },
  },
});

export const { addItem, incrementQty, decrementQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],        // items in the cart
  totalQuantity: 0, // total items count
  totalPrice: 0     // total price
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // add item logic
    },
    incrementQty: (state, action) => {
      // increment quantity logic
    },
    decrementQty: (state, action) => {
      // decrement quantity logic
    },
    removeItem: (state, action) => {
      // remove item logic
    },
  },
});

export const { addItem, incrementQty, decrementQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
>>>>>>> 2e02c47a8d4fa77067fb03a8d17ea976987e284f
