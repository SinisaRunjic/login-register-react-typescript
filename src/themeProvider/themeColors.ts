interface ITHEME {
  spacing: number;
  palette: {
    primary: {
      light: string;
      main: string;
      dark: string;
    },
    secondary: {
      light: string;
      main: string;
      dark: string;
    },
    text: {
      primary: string;
      secondary: string;
    },
  },
}


const THEME: ITHEME={
  spacing: 5,
  palette: {
    primary: {
      light: '#9162e4',
      main: '#5e35b1',
      dark: '#280680'
    },
    secondary: {
      light: '#48a999',
      main: '#00796b',
      dark: '#004c40'
    },
    text: {
      primary: '#000000',
      secondary:'#ffffff'
    },
  },
}

export default THEME