import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import TrueGrid from './TrueGrid';

const useStyles = makeStyles({
  container: {
    marginTop: 4,
  },
});

export default function SideNavBottom({children}) {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <hr />
      <TrueGrid>{children}</TrueGrid>
    </Grid>
  );
}
