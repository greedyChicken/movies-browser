import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchGenres } from "../../movies/MoviesListPage/moviesSlice";
import { getGenres } from "../../movies/moviesAPI";
import { getPerson, getPersonCredits } from "../ProfilePage/personAPI";
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
    const genres = yield call(getGenres);
    yield put(fetchPersonSuccess(person));
    yield put(fetchPersonCreditsSuccess(personCredits));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPerson() {
  yield takeLatest(fetchPersonId.type, fetchPersonHandler);
}
