import { call, debounce, delay, put, takeLatest } from "redux-saga/effects";
import { getPeopleSearchResults, getPopularPeople } from "./peopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchPeopleSearchResults,
  fetchPeopleSearchResultsSuccess,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    yield delay(450);
    const popularPeople = yield call(getPopularPeople, pageNumber);
    yield put(fetchPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

function* fetchPeopleSearchResultsHandler({ payload: { query, page } }) {
  try {
    const searchResults = yield call(getPeopleSearchResults, query, page);
    yield put(fetchPeopleSearchResultsSuccess(searchResults));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
  yield debounce(
    400,
    fetchPeopleSearchResults.type,
    fetchPeopleSearchResultsHandler
  );
}
