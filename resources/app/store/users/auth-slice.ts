import { User } from '@/graphql/__generated__/graphql.ts';
import { createSlice } from '@reduxjs/toolkit';
export interface UserSliceState {
  token?: User | null;
  user?: User | null;
}

const initialState: UserSliceState = {
  token: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'users-auth',
  initialState,
  reducers: {

  }
});
