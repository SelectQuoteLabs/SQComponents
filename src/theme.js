import {createMuiTheme} from '@material-ui/core/styles';

import cssVars from '../src/styles/cssVars';

const {cerulean, palmLeaf, slate, spanishOrange, teal} = cssVars.colors;

const BASE_FONT_SIZE = 12; // px

function pxToRem(value) {
  return `${value / BASE_FONT_SIZE}rem`;
}

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
    disabled: {
      main: slate,
    },
    success: {
      main: palmLeaf,
    },
    error: {
      main: spanishOrange,
    },
    textSecondary: {
      main: slate,
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontWeight: 300,
        fontSize: pxToRem(60),
        letterSpacing: pxToRem(-0.5),
      },
      h2: {
        fontWeight: 400,
        fontSize: pxToRem(48),
        letterSpacing: pxToRem(0),
      },
      h3: {
        fontWeight: 400,
        fontSize: pxToRem(36),
        letterSpacing: pxToRem(0.25),
      },
      h4: {
        fontWeight: 400,
        fontSize: pxToRem(30),
        letterSpacing: pxToRem(0),
      },
      h5: {
        fontWeight: 400,
        fontSize: pxToRem(24),
        letterSpacing: pxToRem(0),
      },
      h6: {
        fontWeight: 600,
        fontSize: pxToRem(18),
        letterSpacing: pxToRem(0.15),
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: pxToRem(16),
        letterSpacing: pxToRem(0.15),
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: pxToRem(14),
        letterSpacing: pxToRem(0.1),
      },
      body1: {
        fontWeight: 400,
        fontSize: pxToRem(16),
        letterSpacing: pxToRem(0.5),
      },
      body2: {
        fontWeight: 400,
        fontSize: pxToRem(14),
        letterSpacing: pxToRem(0.25),
      },
      button: {
        fontWeight: 600,
        fontSize: pxToRem(14),
        letterSpacing: pxToRem(1.25),
      },
      caption: {
        fontWeight: 300,
        fontSize: pxToRem(12),
        letterSpacing: pxToRem(0.4),
      },
      overline: {
        fontWeight: 600,
        fontSize: pxToRem(10),
        letterSpacing: pxToRem(1.5),
      },
    },
    MuiInput: {
      root: {
        borderColor: 'var(--color-lightGray)',
        color: 'var(--color-jetBlack)',
        fontSize: 'var(--size-input)',
      },
      underline: {
        '&:hover:not(.Mui-disabled):not(.MuiInput-multiline):before': {
          borderBottom: '2px solid var(--color-teal)',
        },
        '&::before': {
          borderColor: 'var(--color-lightGray)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
          border: '2px solid var(--color-teal)',
        },
      },
      notchedOutline: {
        borderColor: 'var(--color-lightGray)',
      },
    },
    MuiSelect: {
      selectMenu: {
        height: '1.6667rem', // match computed height of text fields
        lineHeight: '2rem',
      },
    },
    MuiFormHelperText: {
      root: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--color-jetBlack)',
        fontSize: 'var(--size-label)',
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 'var(--size-label)',
        height: '1.5rem',
      },
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1rem',
        backgroundColor: 'var(--color-jetBlack)',
      },
      arrow: {
        color: 'var(--color-jetBlack)',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 'var(--size-label)',
        color: 'var(--color-jetBlack)',
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(1)',
      },
      asterisk: {
        display: 'none',
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },
    MuiStepIcon: {
      root: {
        '&$active': {
          color: spanishOrange,
        },
      },
    },
  },
};

export const muiTheme = createMuiTheme(theme);
