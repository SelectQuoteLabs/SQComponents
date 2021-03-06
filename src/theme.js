import {createTheme} from '@material-ui/core/styles';

import cssVars from '../src/styles/cssVars';

const {cerulean, palmLeaf, slate, spanishOrange, teal} = cssVars.colors;

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
        fontSize: '60px',
        letterSpacing: '-0.5px',
      },
      h2: {
        fontWeight: 400,
        fontSize: '48px',
        letterSpacing: 0,
      },
      h3: {
        fontWeight: 400,
        fontSize: '36px',
        letterSpacing: '0.25px',
      },
      h4: {
        fontWeight: 400,
        fontSize: '30px',
        letterSpacing: '0.3px',
      },
      h5: {
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: 0,
      },
      h6: {
        fontWeight: 600,
        fontSize: '18px',
        letterSpacing: '0.15px',
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.15px',
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.1px',
      },
      body1: {
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.5px',
        lineHeight: '28px',
      },
      body2: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.25px',
        lineHeight: '26px',
      },
      button: {
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '1.25px',
      },
      caption: {
        fontWeight: 300,
        fontSize: '12px',
        letterSpacing: '0.4px',
      },
      overline: {
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '1px',
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
        height: '20px', // match computed height of text fields
        lineHeight: '48px',
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
        height: '18px',
      },
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '12px',
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
          backgroundColor: 'transparent',
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
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: "'header' 'content' 'footer'",
      },
    },
    MuiCardHeader: {
      root: {
        gridArea: 'header',
        // Note: This height should be the same as .MuiCardHeader-action:height
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
        borderTop: '1px solid var(--color-lightGray)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
      action: {
        // Note: This height should be the same as .MuiCardHeader-root:height
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

        // Note: Removes MUI default padding
        '&:last-child': {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
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

export const muiTheme = createTheme(theme);
