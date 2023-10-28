import './index.css';

import { initializeIcons } from '@fluentui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { registerServiceWorker } from './serviceWorker.ts';

initializeIcons();
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
