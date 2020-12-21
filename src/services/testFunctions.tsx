import 'i18n';

import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { lightTheme } from 'services/theme/lightTheme';
import { ThemeProvider } from 'styled-components/macro';

export const renderComponent = (component: ReactElement): RenderResult =>
  render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
