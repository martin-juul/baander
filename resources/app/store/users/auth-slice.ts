import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface BearerToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: 'Bearer';
}

export interface UserModel {
  name: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UserSliceState {
  authenticated: boolean;
  token: BearerToken | null;
  user: UserModel | null;
}

const initialState: UserSliceState = {
  authenticated: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'users-auth',
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.authenticated = action.payload;
    },
    setToken(state, action: PayloadAction<BearerToken>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const {
  setIsAuthenticated,
  setToken,
  removeToken,
  setUser,
  removeUser
} = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.authSlice.authenticated;
export const selectToken = (state: RootState) => state.authSlice.token;
export const selectUser = (state: RootState) => state.authSlice.user;

export default authSlice.reducer;
