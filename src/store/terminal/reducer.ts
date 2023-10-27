import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TerminalHistory, TerminalHistoryItem } from '../../components/Terminal/types';

export type TerminalState = {
  history: TerminalHistory;
};

const terminalState: TerminalState = {
  history: [],
};

const slice = createSlice({
  name: 'terminal',
  initialState: terminalState,
  reducers: {
    uptadeHistory: (state, action: PayloadAction<TerminalHistoryItem>) => {
      state.history = [...state.history, action.payload];
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { uptadeHistory, clearHistory } = slice.actions;

export default slice.reducer;
