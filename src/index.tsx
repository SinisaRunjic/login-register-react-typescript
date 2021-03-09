import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './Store';
import 'translations/i18n';
import ThemeProvider from './themeProvider';
import Routes from 'components/routes';

ReactDOM.render(
    <ThemeProvider>
  <StoreProvider>
     <Routes />
  </StoreProvider>
     </ThemeProvider>
  ,document.getElementById('root')
);
