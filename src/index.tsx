import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import 'translations/i18n';

ReactDOM.render(
  <StoreProvider>
      <App />
  </StoreProvider>,
  document.getElementById('root')
);
