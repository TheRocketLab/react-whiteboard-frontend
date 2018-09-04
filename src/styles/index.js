import React from 'react';
import { ThemeProvider } from 'styled-components';

import styledComponentTheme from './styled-component-theme';

export const ThemedApp = props => (
  <ThemeProvider theme={styledComponentTheme} {...props} />
);
