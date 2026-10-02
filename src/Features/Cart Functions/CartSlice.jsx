import { createSlice } from "@reduxjs/toolkit";

const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: cartData,

    reducers: {
        ADD: (state, action) => {
            const item = action.payload;
            const addQty = Number(item.quantity) || 1;

            const existingItem = state.find(
                (pro) => pro.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += addQty;
            } else {
                state.push({
                    ...item,
                    quantity: addQty,
                });
            }

            localStorage.setItem("cartData", JSON.stringify(state));
        },

        INC: (state, action) => {
            const id = typeof action.payload === "object" && action.payload !== null ? action.payload.id : action.payload;
            const existingItem = state.find((pro) => pro.id == id);
            if (existingItem) existingItem.quantity += 1;
            localStorage.setItem("cartData", JSON.stringify(state));
        },

        DEC: (state, action) => {
            const id = typeof action.payload === "object" && action.payload !== null ? action.payload.id : action.payload;
            const existingItem = state.find((pro) => pro.id == id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
            localStorage.setItem("cartData", JSON.stringify(state));
        },

        REMOVE: (state, action) => {
            const id = typeof action.payload === "object" && action.payload !== null ? action.payload.id : action.payload;
            const updated = state.filter((pro) => pro.id != id);
            localStorage.setItem("cartData", JSON.stringify(updated));
            return updated;
        },

        CLEAR: () => {
            localStorage.removeItem("cartData");
            return [];
        },
    },
});

export const { ADD, INC, DEC, REMOVE, CLEAR } = cartSlice.actions;
export default cartSlice.reducer;