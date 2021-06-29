import QuotesIndex from "./pages/quotes/index";
import QuotesAdd from "./pages/quotes/add";
import QuotesShow from "./pages/quotes/show";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "./components/UI/Container";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <QuotesIndex />
          </Route>
          <Route path="/quotes/add">
            <QuotesAdd />
          </Route>
          <Route path="/quotes/:id">
            <QuotesShow />
          </Route>
          <Route path="*">
            <p>Page does not exist :(</p>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
