import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./peopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    yield delay(1000);
    const popularPeople = yield call(getPopularPeople, pageNumber);
    yield put(fetchPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
}
