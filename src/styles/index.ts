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

  * {
    font-family: ${globalFontFamily};
    font-weight: 500;
    box-sizing: border-box;
  }

  body {
    max-width: 414px;
    margin: 0 auto;
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
