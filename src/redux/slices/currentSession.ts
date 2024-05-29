import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TournamentStatus } from '../types/common';

export type ThemeMode = 'light' | 'dark';

export interface CurrentSessionContext {
  tournamentStatus: TournamentStatus;
  sessionToken?: string;
}

const initialState: CurrentSessionContext = {
  tournamentStatus: TournamentStatus.ADDING_PLAYERS_GROUPS
};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setTournamentStatus(state, action: PayloadAction<TournamentStatus>) {
      state.tournamentStatus = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.sessionToken = action.payload;
    },
    logout(state) {
      state.sessionToken = undefined;
    }
  }
});

export const { setTournamentStatus, setToken, logout } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
