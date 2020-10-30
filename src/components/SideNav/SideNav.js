import React from 'react';
import PropTypes from 'prop-types';
import {Paper, makeStyles, Grid} from '@material-ui/core';

const usePaperStyles = makeStyles({
  root: {
    height: '100%',
    width: 60,
    marginRight: 18,
    padding: 8,
  },
});

const useStyles = makeStyles({
  container: {
    height: '100%',
  },
});

function SideNav({children}) {
  const paperClasses = usePaperStyles();
  const classes = useStyles();

  return (
    <Paper classes={paperClasses}>
      <Grid
        container
        direction="column"
        justify="space-between"
        wrap="nowrap"
        className={classes.container}
      >
        {children}
      </Grid>
    </Paper>
  );
}

SideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SideNav;
