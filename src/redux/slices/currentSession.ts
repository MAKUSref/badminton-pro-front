import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';
export type CreateLeagueStep =
  | 'CREATE_LEAGUE'
  | 'CREATE_GROUPS'
  | 'START_REGISTRATION'
  | 'SUBMIT_PLAYERS';

export interface CurrentSessionContext {
  createLeagueStep: CreateLeagueStep;
  sessionToken?: string;
}

const initialState: CurrentSessionContext = {
  createLeagueStep: 'CREATE_LEAGUE'
};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setCreateLeagueStep(state, action: PayloadAction<CreateLeagueStep>) {
      state.createLeagueStep = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.sessionToken = action.payload;
    },
    logout(state) {
      state.sessionToken = undefined;
    }
  }
});

export const { setCreateLeagueStep, setToken, logout } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
