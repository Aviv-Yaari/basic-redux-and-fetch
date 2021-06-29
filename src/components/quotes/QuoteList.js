import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const [sortType, setSortType] = useState(search.get("sort"));

  const sortQuotes = (quotes, sortType) => {
    if (sortType === null) return quotes;
    return quotes.sort((quoteA, quoteB) => {
      if (sortType) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const quotes = sortQuotes([...props.quotes], sortType);
  console.log(quotes);

  const sortHandler = () => {
    setSortType(!sortType);
    history.push(`/quotes?sort=${(sortType && "desc") || "asc"}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>
          Sort {(sortType && "descending") || "ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
