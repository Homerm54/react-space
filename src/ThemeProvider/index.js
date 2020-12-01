import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NunitoFont from 'assets/font/Nunito-Regular.ttf';


const Nunito = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Nunito'),
    url(${NunitoFont}) format('truetype')

  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',

}


function customMuiTheme() {

  return createMuiTheme({ // Check time? or user set?
    palette: {
      type: 'dark',
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#607d8b'
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [Nunito],
          body: { 'background-color': '#000', },
        },
      },
    },
    typography: {
      h1: {
        fontFamily: 'Nunito, Roboto',
        fontSize: '1.15rem',
        '@media (min-width:600px)': {
          fontSize: '1.3rem',
        },
        "@media (min-width:720px)": {
          fontSize: '1.5rem',
        },
      },
      h4: {
        fontSize: '1.3rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        "@media (min-width:720px)": {
          fontSize: '1.65rem',
        },
      },
      h5: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.4rem',
        },
        "@media (min-width:720px)": {
          fontSize: '1.5rem',
        },
      },
      subtitle1: {
        fontSize: '0.80rem',
        '@media (min-width:600px)': {
          fontSize: '1rem',
        },
        "@media (min-width:720px)": {
          fontSize: '1.15rem',
        }
      },
    }
  })
}


export default function ThemeProviderHOC({ children }) {

  // Creating a new Theme on every render is bad for performance
  const theme = useMemo(() => customMuiTheme(), [/* Dependencies here! */]);



  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}