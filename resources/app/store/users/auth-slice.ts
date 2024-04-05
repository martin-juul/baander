import { User } from '@/graphql/__generated__/graphql.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface UserSliceState {
  token: User | null;
  user: User | null;
}

const initialState: UserSliceState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'users-auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.authSlice.user;

export default authSlice.reducer;
