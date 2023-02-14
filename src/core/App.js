import { HashRouter, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import MoviesListPage from "../features/movies/MoviesListPage";
import PeopleListPage from "../features/people/PeopleListPage";
import ProfilePage from "../features/people/ProfilePage";
import MoviePage from "../features/movies/MoviePage";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../features/genresSlice";
import { useEffect } from "react";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesListPage />
        </Route>
        <Route path={toPerson()}>
          <ProfilePage />
        </Route>
        <Route path={toPeople()}>
          <PeopleListPage />
        </Route>
        <Route path={toMovies()}>
          <MoviesListPage />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
