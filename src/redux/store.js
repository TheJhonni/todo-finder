import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./Authentications/authReducer";
import favoriteReducer from "./Favourites/favReducer";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    loading: false,
    currentUser: null,
    error: null,
  },
  favorites: {
    favoritePosts: [],
    favoritesFail: null,
  },
};

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const bigReducers = combineReducers({
  user: userReducer,
  favorites: favoriteReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, bigReducers);

export let store = createStore(
  persistedReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
