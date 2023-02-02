import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./common/Header";
import MoviesListPage from "./features/movies/MoviesListPage";
import PeopleListPage from "./features/people/PeopleListPage";
import MoviePage from "./features/movies/MoviePage";

const App = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path={"/movies/:id"}>
        <MoviePage />
      </Route>
      <Route path={"/movies"}>
        <MoviesListPage />
      </Route>
      <Route path={"/people"}>
        <PeopleListPage />
      </Route>
      <Route>
        <Redirect to={"/movies"} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
