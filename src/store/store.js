import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotes-slice";
import uiReducer from "./ui-slice";

export default configureStore({
  reducer: {
    quotes: quotesReducer,
    ui: uiReducer,
  },
});
