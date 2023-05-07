'use client';

import { theme } from '@/styles';
import { ThemeProvider } from 'styled-components';

type ComponentType = (props?: any) => JSX.Element;

export const withThemeProvider = (WrappedComponent: ComponentType) => {
  const Component = ({ ...props }) => {
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  return Component;
};
