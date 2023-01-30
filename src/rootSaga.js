import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/popularMoviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
}
