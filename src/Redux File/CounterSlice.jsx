import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: 0,

  reducers: {
    INC: (count) => count + 1,
    DEC: (count) => count - 1,
  },
});

export const { INC, DEC } = counterSlice.actions;
export default counterSlice.reducer;