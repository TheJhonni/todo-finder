import * as types from "../actionTypes";
import { initialState } from "../store";

const favoriteReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case types.ADD_TO_FAV:
      return {
        ...state,
        favoritePosts: [...state.favoritePosts, action.payload],
      };
    case types.ADD_TO_FAV_FAIL:
      return { ...state, favoritesFail: true };

    case types.REMOVE_FROM_FAV:
      return {
        ...state,
        favoritePosts: [
          ...state.favoritePosts.filter((post) => post.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
