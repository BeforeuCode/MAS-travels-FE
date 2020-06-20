import { createMuiTheme, Theme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: 'Work Sans, sans serif',
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#3C6EF6',
      dark: '#192044',
      contrastText: '#1B1B1B',
    },
    secondary: {
      light: '#EAEEF1',
      main: '#A9B3BB',
    },
    error: {
      main: '#FA4E61',
      light: '#F8F0F0',
    },
    background: {
      default: '#F8F9FC',
      paper: '#fff',
    },
  },
  spacing: (factor) => `${factor}rem`,
  overrides: {
    MuiButton: {
      root: {
        height: '5.5rem',
        margin: '0.5rem',
        fontSize: '1.4rem',
        fontFamily: 'Work Sans, sans-serif',
        padding: '1.1rem 3.2rem',
        textTransform: 'none',
      },
      containedPrimary: {
        color: '#fff',
      },
      containedSecondary: {
        color: '#fff',
      },
      label: {
        textTransform: 'capitalize',
      },
      contained: {
        boxShadow: 'none !important',
      },
      sizeSmall: {
        height: '3.3rem',
        fontSize: '1.4rem',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.4rem',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#A9B3BB',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '1.4rem',
      },
      input: {
        fontSize: '1.4rem',
      },
    },
    MuiInputLabel: {
      outlined: {
        '&$shrink': {
          color: '#1B1B1B',
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1.4rem',
        backgroundColor: '#192044',
      },
    },
  },
});

export const muiTheme: Theme = theme;
