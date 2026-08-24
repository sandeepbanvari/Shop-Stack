import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./CounterSlice"

const Store = configureStore({
    reducer:{
        count: counterReducer,
    },
});

export default Store;