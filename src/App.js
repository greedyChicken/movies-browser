import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./common/Header";
import MoviesListPage from "./features/movies/MoviesListPage";
import PeopleListPage from "./features/people/PeopleListPage";
import MoviePage from "./features/movies/MoviePage";

const App = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path={"/movies/:page/:id"}>
        <MoviePage />
      </Route>
      <Route path={"/movies/:page"}>
        <MoviesListPage />
      </Route>
      <Route path={"/people/:page"}>
        <PeopleListPage />
      </Route>
      <Route path={"/people"}>
        <Redirect to={"/people/1"} />
      </Route>
      <Route>
        <Redirect to={"/movies/1"} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
