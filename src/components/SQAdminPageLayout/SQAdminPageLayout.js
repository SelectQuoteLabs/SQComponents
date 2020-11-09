import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  pageLayout__item: {
    height: '100%',
    width: '100%',
    padding: 24,
    display: 'flex',
    flexWrap: 'nowrap',
  },
  pageLayout__container: {
    height: '100%',
    width: '100%',
  },
});

export default function SQAdminPageLayout({children}) {
  const classes = useStyles();

  return (
    <Grid container className={classes.pageLayout__container}>
      <Grid item className={classes.pageLayout__item}>
        {children}
      </Grid>
    </Grid>
  );
}

SQAdminPageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
