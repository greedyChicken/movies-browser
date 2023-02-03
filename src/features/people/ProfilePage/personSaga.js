import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPerson, getPersonCredits } from "../personsAPI";
import {
  fetchPersonCreditsSuccess,
  fetchPersonId,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

function* fetchPersonHandler({ payload: personId }) {
  try {
    yield delay(200);
    const person = yield call(getPerson, personId);
    const personCredits = yield call(getPersonCredits, personId);
    yield put(fetchPersonSuccess(person));
    yield put(fetchPersonCreditsSuccess(personCredits));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPerson() {
  yield takeLatest(fetchPersonId.type, fetchPersonHandler);
}
