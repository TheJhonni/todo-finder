import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// const __logout = async () => {
//   const auth = getAuth();
//   await signOut(auth);
//   window.location.pathname !== "/login" && window.location.assign("/login");
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       __logout();
//     },
//   },
// });

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
