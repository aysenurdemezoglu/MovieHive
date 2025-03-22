import { createSlice } from "@reduxjs/toolkit";

// localStorage'dan favorileri al
const getFavoritesFromStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// localStorage'a favorileri kaydet
const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: getFavoritesFromStorage(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const isAlreadyFavorite = state.favorites.some(
        (favMovie) => favMovie.imdbID === movie.imdbID
      );

      if (!isAlreadyFavorite) {
        state.favorites.push(movie);
        saveFavoritesToStorage(state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      const imdbID = action.payload;
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== imdbID
      );
      saveFavoritesToStorage(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
