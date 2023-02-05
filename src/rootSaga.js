import { all } from "redux-saga/effects";
import { watchFetchMovie } from "./features/movies/MoviePage/movieSaga";
import { watchFetchMovies } from "./features/movies/MoviesListPage/moviesSaga";
import { watchFetchPopularPeople } from "./features/people/peopleSaga";

export default function* rootSaga() {
  yield all([watchFetchMovies(), watchFetchPopularPeople(), watchFetchMovie()]);
}
