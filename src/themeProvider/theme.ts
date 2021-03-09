import { createMuiTheme } from '@material-ui/core';
import THEME from './themeColors';

const appTheme = createMuiTheme({
  spacing: THEME.spacing,
  palette: {
    primary: {
      light: THEME.palette.primary.light,
      main: THEME.palette.primary.main,
      dark: THEME.palette.primary.dark
    },
    secondary: {
      light: THEME.palette.secondary.light,
      main: THEME.palette.secondary.main,
      dark: THEME.palette.secondary.dark
    },
    text: {
      primary: THEME.palette.text.primary,
      secondary: THEME.palette.text.secondary
    },
  },
  overrides: {
    MuiList: {
      padding: {
        paddingTop: '0px'
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: THEME.palette.primary.main,
          color: 'white',
          "&:hover": {
            backgroundColor: THEME.palette.primary.light,
          },
        },
      },
      button: {
        "&:hover": {
          backgroundColor: THEME.palette.primary.light,
        },
      },
    },
    MuiListItemIcon:{
      root:{
        minWidth:'35px',
        color:''
      }
    }
  }
})
export default appTheme;