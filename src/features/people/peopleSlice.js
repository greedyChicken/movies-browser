import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: false,
    error: false,
    page: 1,
    lastPage: 500,
    peopleCount: null,
  },
  reducers: {
    fetchPeople: (state, { payload: pageNumber }) => {
      state.loading = true;
      state.page = 1;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.error = false;
      state.people = people.results;
      state.page = people.page;
      state.lastPage = people.total_pages < 500 ? people.total_pages : 500;
      state.peopleCount = people.total_results;
    },
    fetchPeopleError: (state) => {
      state.error = true;
    },
    fetchPeopleSearchResults: (state, { payload: { page } }) => {
      state.loading = true;
    },
    fetchPeopleSearchResultsSuccess: (state, { payload: results }) => {
      state.loading = false;
      state.error = false;
      state.people = results.results;
      state.page = results.page;
      state.lastPage = results.total_pages < 500 ? results.total_pages : 500;
      state.peopleCount = results.total_results;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  fetchPeopleSearchResults,
  fetchPeopleSearchResultsSuccess,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectError = (state) => selectPeopleState(state).error;
export const selectPage = (state) => selectPeopleState(state).page;
export const selectLastPage = (state) => selectPeopleState(state).lastPage;
export const selectPeopleCount = (state) =>
  selectPeopleState(state).peopleCount;

export const peopleReducer = peopleSlice.reducer;
