import { call, debounce, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getSearchResults } from "./peopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchSearchResults,
  fetchSearchResultsSuccess,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    yield delay(200);
    const popularPeople = yield call(getPopularPeople, pageNumber);
    yield put(fetchPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

function* fetchSearchResultsHandler({ payload: { query, page } }) {
  try {
    const searchResults = yield call(getSearchResults, query, page);
    yield put(fetchSearchResultsSuccess(searchResults));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
  yield debounce(200, fetchSearchResults.type, fetchSearchResultsHandler);
}
