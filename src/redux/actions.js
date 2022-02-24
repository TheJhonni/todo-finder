import * as types from "./actionTypes";
import { auth } from "../firebase";

// CALLING TYPES FROM ACTION TYPES AND SETTING THE TYPE AND PAYLOAD

// types & payloads FOR REGISTERSCREEN
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

// types & payloads FOR LOGINSCREEN
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

// types & payloads FOR LOGOUT
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

// CALLING EACH CONST FOR REGISTERING USER
export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password) //create function
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

// CALLING EACH CONST FOR LOGGING USER
export const loginInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password) //sign in function
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

// CALLING EACH CONST FOR LOGOUT
export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut() //sign in function
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};
