// Redux reducer with actions defined within
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    moneygen: 0,
    bigmoneygen: 0,
    rank: 0,
    rank_points: 0,
    multiplier: 1,
    mps: 0,
  },
  reducers: {
    incrementMoneygen: (state) => {
      state.moneygen += 1;
    },
    incrementBigMoneygen: (state) => {
      state.bigmoneygen += 1;
    },
    incrementRank: (state) => {
        state.rank += 1
        state.rank_points += 1
        state.multiplier *= 2
        state.mps = 0
    },
    resetMoneyGen: (state) => {
        state.moneygen = 0
    },
    decrementRankPoints: (state, action: PayloadAction<number>) => { 
        state.rank_points -= action.payload
    },
    incrementMoneygenbyamount: (state, action: PayloadAction<number>) => {
        state.moneygen += action.payload
    },
    resetEverything: (state) => {
      state.rank = 0
      state.rank_points = 0
      state.moneygen = 0
      state.bigmoneygen = 0
      state.multiplier = 1
      state.mps = 0 
    },
    increaseMPS: (state) => {
      state.mps += state.moneygen * state.multiplier
    },
    increaseMPSbyamount: (state, action: PayloadAction<number>) => {
      state.mps += state.moneygen*action.payload*state.multiplier
    }

  },
});

export const { incrementMoneygen, incrementBigMoneygen,incrementRank,resetMoneyGen,decrementRankPoints,incrementMoneygenbyamount,resetEverything,increaseMPS,increaseMPSbyamount } = counterSlice.actions;
export default counterSlice.reducer;