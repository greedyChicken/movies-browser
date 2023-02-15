import { call, debounce, delay, put, takeLatest } from "redux-saga/effects";
import { getMoviesSearchResults, getPopularMovies } from "../moviesAPI";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesSearchResults,
  fetchMoviesSearchResultsSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    yield delay(450);
    const popularMovies = yield call(getPopularMovies, pageNumber);
    yield put(fetchMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

function* fetchMoviesSearchResultsHandler({ payload: { query, page } }) {
  try {
    const searchResults = yield call(getMoviesSearchResults, query, page);
    yield put(fetchMoviesSearchResultsSuccess(searchResults));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesHandler);
  yield debounce(
    400,
    fetchMoviesSearchResults.type,
    fetchMoviesSearchResultsHandler
  );
}
