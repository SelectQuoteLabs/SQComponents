# Using the Shared Component Styles

SC Plus shared component library aims to offer reusable styles to avoid developers and applications from needing to set HEX values in each of the apps.

## Using the shared styles

```
import {cssVars} from 'scplus-shared-components';
```

Now you will have access to all of the cssVars styles.

Example:

```
event.status === 'PAST DUE' ? cssVars.colors.roseMadder : null,
```

## Styles available (src/styles/cssVars.js)

```
colors: {
  cerulean: '#01A1B7',
  teal: '#017788',

  ceruleanHover: 'rgba(1, 161, 183, 0.1)',

  brightYellow: '#FF9F1C',
  sienna: '#C46C2A',
  spanishOrange: '#EB7100',

  richBlack: '#050404',
  jetBlack: '#322F2F',
  charlestonGreen: '#2E282A',

  lightGray: '#D3D3D3',
  whiteSmoke: '#F5F5F5',
  white: '#FFFFFF',

  stone: '#8A8889',
  slate: '#B3B4B3', // used for disabled
  concrete: '#B8B2A9',
  gainsboro: '#E0E0E0',

  roseMadder: '#E71D36', // used for errors
  lightError: '#FAE5E8',
  palmLeaf: '#6CA03B', // used for success
  green: '#76B041',
},

fontWeights: {
  light: 300,
  normal: 400,
  semibold: 600,
  bold: 700,
},


```
