import { configureStore } from '@reduxjs/toolkit';

import settingsReduder from './settings/reducer';

const store = configureStore({
  reducer: {
    settingsReduder,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
