import React from 'react';
import {makeStyles, Grid} from '@material-ui/core';
import TrueGrid from './TrueGrid';

const useStyles = makeStyles({
  container: {
    marginBottom: 'auto',
    flex: 1,
    // make it scrollable
    overflow: 'auto',

    // but hide scrollbar
    '&::-webkit-scrollbar': {
      // Chrome and Safari
      display: 'none',
    },
    '-ms-overflow-style': 'none', // IE and Edge
    'scrollbar-width': 'none', // Firefox
  },
});

export default function SideNavMiddle({children}) {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <TrueGrid>{children}</TrueGrid>
    </Grid>
  );
}
