import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import MoviesListPage from "../features/movies/MoviesListPage";
import PeopleListPage from "../features/people/PeopleListPage";
import ProfilePage from "../features/people/ProfilePage";
import MoviePage from "../features/movies/MoviePage";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../features/genresSlice";
import { useEffect } from "react";
import {
  toFirstPageMovies,
  toFirstPagePeople,
  toMainPagePeople,
  toMovie,
  toMovies,
  toPeople,
  toPerson,
} from "./routes";

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
        <Route path={toMainPagePeople()}>
          <Redirect to={toFirstPagePeople()} />
        </Route>
        <Route>
          <Redirect to={toFirstPageMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
