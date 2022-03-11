import * as types from "../actionTypes";

export const addToFavsAction = (post) => ({
  type: types.ADD_TO_FAV,
  payload: post,
});

export const removeFromFavsAction = (id) => ({
  type: types.REMOVE_FROM_FAV,
  payload: id,
});

export const ToggleFav = (post) => {
  return async (dispatch, getState) => {
    if (getState().favorites.favoritePosts) {
      setTimeout(() => {
        dispatch({
          type: types.ADD_TO_FAV,
          payload: post,
        });
      }, 500);
    } else {
      dispatch({
        type: types.ADD_TO_FAV_FAIL,
      });
    }
  };
};
