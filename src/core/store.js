import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { genresReducer } from "../features/genresSlice";
import { movieReducer } from "../features/movies/MoviePage/movieSlice";
import { moviesReducer } from "../features/movies/MoviesListPage/moviesSlice";
import { peopleReducer } from "../features/people/peopleSlice";
import { personReducer } from "../features/people/ProfilePage/personSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    person: personReducer,
    movie: movieReducer,
    genres: genresReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
