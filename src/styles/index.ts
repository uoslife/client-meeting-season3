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
    src: url('/fonts/LeferiPointBlack.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LeferiBaseType-RegularA';
    src: url('/fonts/LeferiBaseBold.ttf') format("truetype") url('/fonts/LeferiBaseRegular.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: 'LeferiSpecial';
    src: url('/fonts/LeferiPointSpecial.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
}

  :root {
    --default-browser-max-width: 414px;
  }
  * {
    font-family: ${globalFontFamily};
    font-weight: 500;
    box-sizing: border-box;
  }

  body {
    font-family: ${globalFontFamily};
    font-weight: 500;
    box-sizing: border-box;
    max-width: var(--default-browser-max-width);
    width: 100%;
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
