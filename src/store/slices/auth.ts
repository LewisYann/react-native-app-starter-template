import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  token: string | null;
  refreshToken: string | null;
  account: unknown;
};

const initialState: State = {
  token: null,
  refreshToken: null,
  account: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens(
      state: State,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
      }>,
    ) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },
    setAccount(state: State, action: PayloadAction<{account: unknown}>) {
      state.account = action.payload.account;
    },
    logout(state: State) {
      state.token = null;
      state.refreshToken = null;
      state.account = null;
    },
  },
});

export default authSlice;
