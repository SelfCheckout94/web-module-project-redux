import {
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  console.log(state.favorites);
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !action.payload,
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
