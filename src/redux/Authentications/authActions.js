import * as types from "../actionTypes";
import { auth, facebookAuthProvider, googleAuthProvider } from "../../firebase";

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

// types & payloads FOR GOOGLE
const googleStart = () => ({
  type: types.GOOGLE_START,
});

const googleSuccess = (user) => ({
  type: types.GOOGLE_SUCCESS,
  payload: user,
});

const googleFail = (error) => ({
  type: types.GOOGLE_FAIL,
  payload: error,
});

// types & payloads FOR FB
const fbStart = () => ({
  type: types.FB_START,
});

const fbSuccess = (user) => ({
  type: types.FB_SUCCESS,
  payload: user,
});

const fbFail = (error) => ({
  type: types.FB_FAIL,
  payload: error,
});

// CALLING EACH CONST FOR REGISTERING USER
export const registerInitiate = (email, password, displayName, role) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password) //create function
      .then(({ user }) => {
        user.updateProfile({
          displayName,
          role,
        });
        dispatch(
          registerSuccess(user),
          alert("Congrats! You've just registered")
        );
      })
      .catch((error) =>
        dispatch(registerFail(error.message), alert("Hops" + error.message))
      );
  };
};

// CALLING EACH CONST FOR LOGGING USER
export const loginInitiate = (email, password, displayName, role) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password) //sign in function
      .then(({ user }) => {
        user.updateProfile({
          displayName,
          role,
        });
        console.log("USER: ", user);
        dispatch(loginSuccess(user._delegate));
        alert("Yes, you've just logged in!");
      })

      .catch((error) => {
        dispatch(loginFail(error.message));
        alert("Hops" + error.message);
      });
  };
};

// CALLING EACH CONST FOR LOGOUT
export const logoutInitiate = (navigateFunction) => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut() //sign in function
      .then(() => {
        dispatch(logoutSuccess());
        // navigare al login!
        navigateFunction("/login");
      })
      .catch((error) => {
        dispatch(logoutFail(error.message));
        alert("Hops" + error.message);
      });
  };
};

// CALLING USER FOR GLOBAL READING
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

// CALLING EACH CONST FOR GOOGLE
export const googleInitiate = () => {
  return function (dispatch) {
    dispatch(googleStart());
    auth
      .signInWithPopup(googleAuthProvider) //sign in function
      .then(({ user }) => {
        dispatch(googleSuccess(user));
        alert("Congrats, You have just logged in!");
      })
      .catch((error) => {
        dispatch(googleFail(error.message));
        alert("Hops" + error.message);
      });
  };
};

// CALLING EACH CONST FOR FACEBOOK
export const fbInitiate = () => {
  return function (dispatch) {
    dispatch(fbStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email")) //sign in function
      .then(({ user }) => {
        dispatch(fbSuccess(user));
        alert("Congrats, You have just logged in!");
      })
      .catch((error) => {
        dispatch(fbFail(error.message));
        alert("Hops" + error.message);
      });
  };
};
