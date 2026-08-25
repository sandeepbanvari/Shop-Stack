import { createSlice } from "@reduxjs/toolkit";

const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: cartData,

    reducers: {
        ADD: (state, action) => {
            const item = action.payload;

            const existingItem = state.find(
                (pro) => pro.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({
                    ...item,
                    quantity: 1,
                });
            }

            localStorage.setItem("cartData", JSON.stringify(state)
            );
        },

        INC: (state, action) => {
            let item = action.payload
            let existingItem = state.find(pro => pro.id == item)
            if (existingItem) existingItem.quantity += 1
            localStorage.setItem('cartData', JSON.stringify(state))
        },

        DEC: (state, action) => {
            let item = action.payload
            let existingItem = state.find(pro => pro.id == item)
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1
            }
            localStorage.setItem('cartData', JSON.stringify(state))
        },




    },
});

export const { ADD, INC, DEC } = cartSlice.actions;
export default cartSlice.reducer;