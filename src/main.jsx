import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

import './styles.css';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider
      autoHideDuration={2300}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
