import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SettingsState = {
  darkMode: boolean;
  useSystemTheme: boolean;
  autoFormat: boolean;
};

const settingsState: SettingsState = {
  darkMode: true,
  useSystemTheme: false,
  autoFormat: true,
};

const slice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<SettingsState['darkMode']>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme } = slice.actions;

export default slice.reducer;
