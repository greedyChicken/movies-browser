import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "./moviesAPI";
import {
  fetchGenres,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(1000);
    const popularMovies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(fetchMoviesSuccess(popularMovies));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesHandler);
}
