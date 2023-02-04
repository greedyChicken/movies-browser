import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "../moviesAPI";
import {
  fetchGenres,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    yield delay(200);
    const popularMovies = yield call(getPopularMovies, pageNumber);
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
