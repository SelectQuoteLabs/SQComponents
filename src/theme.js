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
        fontSize: pxToRem(12),
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
    MuiButton: {
      outlined: {
        '&$disabled': {
          border: '2px solid rgba(0, 0, 0, 0.12)',
        },
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
    MuiCard: {
      root: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: "'header' 'content' 'footer'",
      },
    },
    MuiCardHeader: {
      root: {
        gridArea: 'header',
        height: '48px',
        borderBottom: '1px solid var(--color-lightGray)',

        /**
         * Note: These overrides alter the default theme styling when the
         * class 'custom-subheader' is included on any <CardHeader /> component
         */
        '&.custom-subheader': {
          height: '74px',
          paddingTop: '0',
          paddingBottom: '0',
          paddingLeft: '0',
        },
        '&.custom-subheader .MuiCardHeader-title': {
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '16px',
        },
        '&.custom-subheader .MuiCardHeader-subheader': {
          paddingTop: '2px',
          paddingBottom: '2px',
          paddingLeft: '16px',
        },
        '&.custom-subheader .MuiCardHeader-action': {
          height: '48px',
          marginTop: '0px',
          borderBottom: '1px solid var(--color-lightGray)',
        },
      },
      //Note: MUI defaults this to an h5
      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
      //Note: MUI defaults this to an h6
      subheader: {
        // TODO: Copy styling for subtitle2 in here
        borderTop: '1px solid var(--color-lightGray)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
      action: {
        /**
         * Note: This height should be the same as .MuiCardHeader-root:height
         * AND included in the calc() for .MuiCardContent.root:height
         */
        height: '48px',
        //Note: Negative margin to account for the default padding on MuiCardHeader.root
        marginTop: '-16px',
        marginRight: '-16px',
        display: 'flex',
        alignItems: 'center',

        '& .MuiTypography-root': {
          color: 'var(--color-spanishOrange)',
          fontSize: '14px',
          fontWeight: 'var(--font-weight-bold)',
        },

        '& .MuiSvgIcon-root': {
          color: 'var(--color-teal)',
        },
      },
    },
    MuiCardContent: {
      root: {
        gridArea: 'content',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '0 !important', // Note: Remove MUI default padding
      },
    },
    MuiCardActions: {
      root: {
        gridArea: 'footer',
        padding: '5px',
        borderTop: '1px solid var(--color-lightGray)',
      },
    },
  },
  props: {
    MuiModal: {
      disableEnforceFocus: true,
    },
  },
};

export const muiTheme = createMuiTheme(theme);
