import { all } from "redux-saga/effects";
import { watchFetchGenres } from "../features/genresSaga";
import { watchFetchMovie } from "../features/movies/MoviePage/movieSaga";
import { watchFetchMovies } from "../features/movies/MoviesListPage/moviesSaga";
import { watchFetchPopularPeople } from "../features/people/peopleSaga";
import { watchFetchPerson } from "../features/people/ProfilePage/personSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchPopularPeople(),
    watchFetchMovie(),
    watchFetchPerson(),
    watchFetchGenres(),
  ]);
}
