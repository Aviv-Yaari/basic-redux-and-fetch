import HighlightedQuote from "../../components/quotes/HighlightedQuote";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Route, useRouteMatch, Link } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../../store/quotes-actions";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const QuotesShow = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    const loadQuote = async () => {
      setQuote(await dispatch(fetchQuote(id)));
    };
    loadQuote();
  }, [dispatch, id]);

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading && <LoadingSpinner />}
      {quote && <HighlightedQuote text={quote.text} author={quote.author} />}
      <Route exact path={match.url}>
        {quote && (
          <button className="btn">
            <Link to={`${match.url}/comments`}>Load Comments</Link>
          </button>
        )}
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuotesShow;
