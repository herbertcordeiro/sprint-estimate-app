import { createGlobalStyle } from 'styled-components';

import LightFont from '../assets/fonts/LexendDeca-Light.ttf';
import MediumFont from '../assets/fonts/LexendDeca-Medium.ttf';
import RegularFont from '../assets/fonts/LexendDeca-Regular.ttf';
import ExtraBoldFont from '../assets/fonts/LexendDeca-ExtraBold.ttf';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  @font-face {
    font-family: 'LexendDeca-Light';
    src: local('LexendDeca-Light'), local('LexendDeca-Light'),
    url(${LightFont}) format('ttf');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'LexendDeca-Medium';
    src: local('LexendDeca-Medium'), local('LexendDeca-Medium'),
    url(${MediumFont}) format('ttf');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'LexendDeca-Regular';
    src: local('LexendDeca-Regular'), local('LexendDeca-Regular'),
    url(${RegularFont}) format('ttf');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'LexendDeca-ExtraBold';
    src: local('LexendDeca-ExtraBold'), local('LexendDeca-ExtraBold'),
    url(${ExtraBoldFont}) format('ttf');
    font-style: normal;
    font-display: swap;
  }

`;

export { GlobalStyles };