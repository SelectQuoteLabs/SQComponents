import {createMuiTheme} from '@material-ui/core/styles';

import cssVars from '../src/styles/cssVars';

const {richBlack} = cssVars.colors;

const theme = {
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: richBlack,
    },
  },
};

export const muiTheme = createMuiTheme(theme);
