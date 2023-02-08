import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: false,
    error: false,
    page: 1,
    lastPage: 500,
  },
  reducers: {
    fetchPeople: (state, { payload: pageNumber }) => {
      state.loading = true;
      state.page = pageNumber;
    },

    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.error = false;
      state.people = people.results;
      state.page = people.page;
      state.lastPage = people.total_pages < 500 ? people.total_pages : 500;
    },
    fetchPeopleError: (state) => {
      state.error = true;
    },
  },
});

export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError } =
  peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectError = (state) => selectPeopleState(state).error;
export const selectPage = (state) => selectPeopleState(state).page;
export const selectLastPage = (state) => selectPeopleState(state).lastPage;

export const peopleReducer = peopleSlice.reducer;
