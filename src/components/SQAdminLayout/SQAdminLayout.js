import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  layout: {
    height: '100%',
    width: '100%',
  },
  page: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
export default function SQAdminLayout({HeaderComponent, children}) {
  const classes = useStyles();

  return (
    <Grid container direction="column" wrap="nowrap" className={classes.layout}>
      <Grid item>
        <HeaderComponent />
      </Grid>
      <Grid item className={classes.page}>
        {children}
      </Grid>
    </Grid>
  );
}

SQAdminLayout.propTypes = {
  HeaderComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
