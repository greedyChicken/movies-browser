import { delay, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genresSlice";
import { getGenres } from "./movies/moviesAPI";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
