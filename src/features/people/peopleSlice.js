import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
    },

    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.error = false;
      state.people = people.results;
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

export const peopleReducer = peopleSlice.reducer;
