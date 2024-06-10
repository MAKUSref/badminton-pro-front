import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TournamentStatus } from '../types/common';

interface Account {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type ThemeMode = 'light' | 'dark';

export interface CurrentSessionContext {
  tournamentStatus: TournamentStatus;
  sessionToken?: string;
  accounts?: (Account & { id: string })[];
}

const initialState: CurrentSessionContext = {
  tournamentStatus: TournamentStatus.ADDING_PLAYERS_GROUPS,
  accounts: [
    {
      id: crypto.randomUUID(),
      email: 'admin',
      password: 'admin',
      firstName: 'Admin',
      lastName: 'Admin'
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
    }
  }
});

export const { setTournamentStatus, setToken, logout, registerAccount } =
  currentSessionSlice.actions;
export default currentSessionSlice.reducer;
