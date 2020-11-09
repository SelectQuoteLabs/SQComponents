import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  pageLayout: {
    height: '100%',
    width: '100%',
    padding: 24,
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

export default function SQAdminPageLayout({children}) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.pageLayout}>
        {children}
      </Grid>
    </Grid>
  );
}

SQAdminPageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
