import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./popularPeopleAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler() {
  try {
    yield delay(1000);
    const popularPeople = yield call(getPopularPeople);
    yield put(fetchPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleHandler);
}
