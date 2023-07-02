import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    money: 0
  },
  reducers: {
    increment: (state) => {
      state.money += 1;
    },
    decrement: (state) => {
      state.money -= 1;
    },
    incrementByAmount: (state, action) => {
      state.money += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = moneySlice.actions;

export default moneySlice.reducer;