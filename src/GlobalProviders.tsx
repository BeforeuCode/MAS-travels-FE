import React, { FC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import { MuiThemeProvider } from '@material-ui/core';
import { ICommonProps } from './Types/props';
import { muiTheme } from './Styles/theme';
import { globalStyles } from './Styles/globalStyles';

export const GlobalProviders: FC<ICommonProps> = ({ children }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <Global styles={globalStyles} />
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
