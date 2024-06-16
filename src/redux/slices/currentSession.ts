import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TournamentStatus } from '../types/common';

interface Account {
  email: string;
  password: string;
  organizatorName: string;
}

export type ThemeMode = 'light' | 'dark';

export interface CurrentSessionContext {
  tournamentStatus: TournamentStatus;
  sessionToken?: string;
  accounts?: (Account & { id: string })[];
  cookiesAccepted?: boolean;
}

const initialState: CurrentSessionContext = {
  tournamentStatus: TournamentStatus.ADDING_PLAYERS_GROUPS,
  accounts: [
    {
      id: crypto.randomUUID(),
      email: 'jan.kowalski@example.com',
      password: 'password123',
      organizatorName: 'Klub sportowy RelaxBad'
    }
  ]
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
    },
    registerAccount(state, action: PayloadAction<Account>) {
      state.accounts?.push({ ...action.payload, id: crypto.randomUUID() });
    },
    acceptCookies(state) {
      state.cookiesAccepted = true;
    }
  }
});

export const { setTournamentStatus, setToken, logout, registerAccount, acceptCookies } =
  currentSessionSlice.actions;
export default currentSessionSlice.reducer;
