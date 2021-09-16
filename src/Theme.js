import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#050506',
    white: '#fcfcfc',
    neutrals: {
      50: '#F3F6FB',
      100: '##BDC0C4',
      200: '#898C90',
      300: '#696c72',
      400: '#595B60',
      500: '#2D2F33',
      600: '#151618',
    },
    primaries: {
      red: {
        light: '#FF745E',
        main: '#FF3A1A',
        dark: '#D51E00',
      },
      orange: {
        light: '#FFAE44',
        main: '#FF9000',
        dark: '#DD7D00',
      },
      yellow: {
        light: '#FFD465',
        main: '#FFC121',
        dark: '#EDAB00',
      },
      purple: {
        light: '#D57BCA',
        main: '#C448B5',
        dark: '#A43597',
      },
      blue: {
        light: '#95B9FE',
        main: '#73A3FE',
        dark: '#4082FE',
      },
      green: {
        light: '#8EE45A',
        main: '#67D723',
        dark: '#3d7f15',
      },
    },
  },
  fonts: {
    regular: ['Neucha', 'sans-serif'],
    display: ['Ranchers', 'sans-serif'],
  },
  fontSizes: {
    small: '0.875rem',
    regular: '1rem',
    regularPlus: '1.25rem',
    medium: '3rem',
    large: '3.75rem',
    xl: '6rem',
    xxl: '10rem',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
