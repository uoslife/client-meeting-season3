import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors, typographies } from './styles';

export const theme = {
  ...colors,
  ...typographies,
};

export const globalFontFamily = 'Pretendard';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'LeferiPoint-SpecialA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-SpecialA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LeferiBaseType-RegularA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-RegularA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    font-family: ${globalFontFamily};
    font-weight: 500;
    box-sizing: border-box;
  }

  body {
    max-width: 414px;
    margin: 0 auto;
  }

  a { 
    text-decoration: none;
  }

  h1 {
    ${theme.Heading1};
  }

  h2 {
    ${theme.Heading2};
  }

  h3 {
    ${theme.Heading3};
  }

  h4 {
    ${theme.Heading4};
  }

  h5 {
    ${theme.Heading5};
  }

  h6 {
    ${theme.Heading6};
  }
`;
