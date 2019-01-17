import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { primary } from './Fonts';
import { backgroundColor, darkText } from './Colors';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${darkText};
    background: ${backgroundColor};
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    padding: 110px 0 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto:300,400,500');

  /* @font-face {
    font-family: 'Pembroke';
    font-style: normal;
    font-weight: 300;
    src: url('https://static.eurostar.com/shared/fonts/pembrokeweb-light.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/pembrokeweb-light.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Pembroke';
    font-style: normal;
    font-weight: 400;
    src: url('https://static.eurostar.com/shared/fonts/pembrokeweb-regular.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/pembrokeweb-regular.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Pembroke';
    font-style: normal;
    font-weight: 700;
    src: url('https://static.eurostar.com/shared/fonts/pembrokeweb-medium.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/pembrokeweb-medium.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Aspect';
    font-style: normal;
    font-weight: 300;
    src: url('https://static.eurostar.com/shared/fonts/aspwsub-lt.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/aspwsub-lt.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Aspect';
    font-style: normal;
    font-weight: 400;
    src: url('https://static.eurostar.com/shared/fonts/aspwsub-rg.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/aspwsub-rg.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Aspect';
    font-style: normal;
    font-weight: 700;
    src: url('https://static.eurostar.com/shared/fonts/aspwsub-hv.woff2')
        format('woff2'),
      url('https://static.eurostar.com/shared/fonts/aspwsub-hv.woff')
        format('woff');
  } */
`;

export default GlobalStyle;
