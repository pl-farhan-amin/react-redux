import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartState: "",enteredState: "" };

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state) => {
            state.cartState = "Add"
        },
        removeFromCart: (state) => {
            state.cartState = "Remove"
        },
        checkout: (state) => {
            state.cartState = "Checkout"
        },
        checkData: (state,action) => {
            state.cartState = "Custom"
            state.enteredState = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, checkout,checkData } = CartSlice.actions;

export default CartSlice.reducer;