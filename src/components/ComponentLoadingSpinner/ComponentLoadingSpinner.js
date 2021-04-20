import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import LoadingIcon from '../LoadingIcon';

const useStyles = makeStyles(() => {
  return {
    spinner: {
      position: 'relative',
    },
    message: {
      fontWeight: 'var(--font-weight-light)',
    },
  };
});
function ComponentLoadingSpinner({message = '', spinnerHeight = '120px'}) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.spinner}
    >
      <Grid item>
        <LoadingIcon height={spinnerHeight} />
      </Grid>
      <Grid item>
        <Typography
          align="center"
          variant="subtitle1"
          className={classes.message}
        >
          {message ? `${message}...` : ''}
        </Typography>
      </Grid>
    </Grid>
  );
}

ComponentLoadingSpinner.propTypes = {
  /* The message to display under the loading spinner. */
  message: PropTypes.string,
  /* The height of the spinner */
  spinnerHeight: PropTypes.string,
};

export default ComponentLoadingSpinner;
