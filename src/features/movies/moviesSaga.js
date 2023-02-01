import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "./moviesAPI";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(1000);
    const popularMovies = yield call(getPopularMovies);
    yield put(fetchMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesHandler);
}
