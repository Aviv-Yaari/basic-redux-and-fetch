import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {
    load: (state, action) => {
      state.quotes = [];
      const quotes = action.payload;
      for (const id in quotes) {
        const quote = quotes[id];
        state.quotes.push({ id, ...quote });
      }
      console.log(state.quotes);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { load } = quotesSlice.actions;

export default quotesSlice.reducer;
