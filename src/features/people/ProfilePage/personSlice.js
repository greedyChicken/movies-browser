import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    loading: true,
    error: false,
    person: null,
    personId: null,
    personCredits: null,
    // personBiography: null,
  },

  reducers: {
    fetchPersonSuccess: (state, { payload: person }) => {
      state.loading = false;
      state.error = false;
      state.person = person;
    },
    fetchPersonError: (state) => {
      state.error = true;
    },
    fetchPersonId: (state, { payload: personId }) => {
      state.loading = true;
      state.personId = personId;
    },
    fetchPersonCreditsSuccess: (state, { payload: personCredits }) => {
      state.loading = false;
      state.error = false;
      state.personCredits = personCredits;
    },
  },
});

export const {
  fetchPersonSuccess,
  fetchPersonError,
  fetchPersonId,
  fetchPersonCreditsSuccess,
} = personSlice.actions;

const selectPersonState = (state) => state.person;

export const selectLoading = (state) => selectPersonState(state).loading;
export const selectError = (state) => selectPersonState(state).error;
export const selectPerson = (state) => selectPersonState(state).person;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectPersonCredits = (state) =>
  selectPersonstate(state).personCredits;

export const personReducer = personSlice.reducer;
