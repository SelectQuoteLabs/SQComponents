import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles({
  mainContent: {
    width: '100%',
    height: '100%',
  },
});

export default function SQAdminMainContent({children}) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.mainContent}>
        {children}
      </Grid>
    </Grid>
  );
}

SQAdminMainContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
