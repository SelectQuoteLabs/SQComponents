import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import TrueGrid from './TrueGrid';

const useStyles = makeStyles({
  container: {
    marginBottom: 4,
  },
});
export default function SideNavTop({children}) {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <TrueGrid>{children}</TrueGrid>
      <hr />
    </Grid>
  );
}
