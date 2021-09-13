import { createGlobalStyle } from 'styled-components';
import Neucha from './fonts/neucha-v12-latin-regular.woff';
import Neucha2 from './fonts/neucha-v12-latin-regular.woff2';
import Ranchers from './fonts/ranchers-v8-latin-regular.woff';
import Ranchers2 from './fonts/ranchers-v8-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Neucha';
  src: url(${Neucha2}) format('woff2'),
       url(${Neucha}) format('woff');
}

@font-face {
    font-family: 'Ranchers';
    src: url(${Ranchers2}) format('woff2'),
       url(${Ranchers}) format('woff');
}

body{
    font-family: Neucha; 
    font-size: 1.2rem; 
}

`;

export default GlobalStyle;
