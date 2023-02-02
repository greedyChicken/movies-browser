import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovie, getMovieCredits } from "../moviesAPI";
import {
  fetchMovieCreditsSuccess,
  fetchMovieId,
  fetchMovieError,
  fetchMovieSuccess,
} from "./movieSlice";

function* fetchMovieHandler({ payload: movieId }) {
  try {
    yield delay(200);
    const movie = yield call(getMovie, movieId);
    const movieCredits = yield call(getMovieCredits, movieId);
    yield put(fetchMovieSuccess(movie));
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieError());
  }
}

export function* watchFetchMovie() {
  yield takeLatest(fetchMovieId.type, fetchMovieHandler);
}
