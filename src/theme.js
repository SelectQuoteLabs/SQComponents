import {createMuiTheme} from '@material-ui/core/styles';

import cssVars from '../src/styles/cssVars';

const {cerulean, teal} = cssVars.colors;

const theme = {
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: teal,
    },
    secondary: {
      main: cerulean,
    },
  },
};

export const muiTheme = createMuiTheme(theme);
