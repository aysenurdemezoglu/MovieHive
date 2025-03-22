import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoritesReducer,
  },
});
