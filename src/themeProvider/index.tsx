import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import appTheme from './theme';

const ThemeProvider: React.FC<{children:React.ReactNode}> = ({ children }) => (
  <MuiThemeProvider theme={appTheme}>
    {children}
    </MuiThemeProvider>
);

export default ThemeProvider;