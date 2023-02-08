import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: true,
    error: false,
    movie: null,
    movieCredits: null,
  },

  reducers: {
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.loading = false;
      state.error = false;
      state.movie = movie;
    },
    fetchMovieError: (state) => {
      state.error = true;
    },
    fetchMovie: (state) => {
      state.loading = true;
    },
    fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => {
      state.loading = false;
      state.error = false;
      state.movieCredits = movieCredits;
    },
  },
});

export const {
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovie,
  fetchMovieCreditsSuccess,
} = movieSlice.actions;

const selectMovieState = (state) => state.movie;

export const selectLoading = (state) => selectMovieState(state).loading;
export const selectError = (state) => selectMovieState(state).error;
export const selectMovie = (state) => selectMovieState(state).movie;
export const selectMovieCredits = (state) =>
  selectMovieState(state).movieCredits;

export const movieReducer = movieSlice.reducer;
