import {
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      const movieId = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== movieId),
      };
    default:
      return state;
  }
};

export default reducer;
