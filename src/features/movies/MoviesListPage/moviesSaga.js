import { call, debounce, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies, getSearchResults } from "../moviesAPI";
import {
  fetchGenres,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchSearchResults,
  fetchSearchResultsSuccess,
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

function* fetchSearchResultsHandler({ payload: { query, page } }) {
  console.log("halo");
  try {
    const searchResults = yield call(getSearchResults, query, page);
    yield put(fetchSearchResultsSuccess(searchResults));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesHandler);
  yield debounce(200, fetchSearchResults.type, fetchSearchResultsHandler);
}
