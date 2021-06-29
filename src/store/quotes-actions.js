import { load } from "./quotes-slice";
import { setLoading } from "./ui-slice";

export const fetchQuotes = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await fetch(
      "https://aviv-database-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"
    );
    const quotes = await response.json();
    dispatch(setLoading(false));
    dispatch(load(quotes));
  };
};

export const fetchQuote = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await fetch(
      `https://aviv-database-default-rtdb.europe-west1.firebasedatabase.app/quotes/${id}.json`
    );
    const data = await response.json();
    dispatch(setLoading(false));
    return data;
  };
};

export const addQuote = (quote) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await fetch(
      "https://aviv-database-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
      }
    );
    dispatch(setLoading(false));
  };
};
