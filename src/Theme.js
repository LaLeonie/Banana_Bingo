import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#050506',
    white: '#fff',
    neutrals: {
      50: '#F4FAFF',
      100: '#BDC3C7',
      200: '#898E93',
      300: '#585D61',
      400: '#2B3034',
      500: '#151618',
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
        lightest: '#b6cfff',
        light: '#95B9FE',
        main: '#4082FE',
        dark: '#005adf',
        darkest: '#012261',
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
