import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuoteList from "../../components/quotes/QuoteList";
import { Fragment } from "react";
import { fetchQuotes } from "../../store/quotes-actions";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const QuotesIndex = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  const isLoading = useSelector((state) => state.ui.isLoading);
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {quotes.length > 0 && <QuoteList quotes={quotes} />}
    </Fragment>
  );
};

export default QuotesIndex;
