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
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !action.payload,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state, action.payload],
      };
    case REMOVE_FAVORITE:
      return state;
    default:
      return state;
  }
};

export default reducer;
