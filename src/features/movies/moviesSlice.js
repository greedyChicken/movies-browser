import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: false,
    page: 1,
  },

  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.movies = movies.results;
      state.page = movies.page;
    },
    fetchMoviesError: (state) => {
      state.error = true;
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;

export const moviesReducer = moviesSlice.reducer;
