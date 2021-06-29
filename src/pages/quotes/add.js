import { useHistory } from "react-router-dom";
import QuoteForm from "../../components/quotes/QuoteForm";
import { addQuote } from "../../store/quotes-actions";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const QuotesAdd = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const addQuoteHandler = async (quote) => {
    await dispatch(addQuote(quote));
    history.push("/quotes");
  };
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />
    </Fragment>
  );
};

export default QuotesAdd;
