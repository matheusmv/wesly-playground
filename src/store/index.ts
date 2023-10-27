import { configureStore } from '@reduxjs/toolkit';

import editorReducer from './editor/reducer';
import settingsReduder from './settings/reducer';
import terminalReduder from './terminal/reducer';

const store = configureStore({
  reducer: {
    settingsReduder,
    editorReducer,
    terminalReduder,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
