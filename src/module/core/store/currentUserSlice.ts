import { createSlice } from '@reduxjs/toolkit';

export interface User{
  userData: Object
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: { value: {} },
  reducers: {
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = currentUserSlice.actions;

export default currentUserSlice;
