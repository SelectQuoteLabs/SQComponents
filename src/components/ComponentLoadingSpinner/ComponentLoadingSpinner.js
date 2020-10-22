import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoadingIcon from '../LoadingIcon';
import './ComponentLoadingSpinner.css';

const ComponentLoadingSpinner = ({message = '', spinnerHeight = '120px'}) => {
  return (
    <Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        className="componentLoadingSpinner"
      >
        <Grid item>
          <LoadingIcon height={spinnerHeight} />
        </Grid>
        {message && (
          <Grid item>
            <Typography
              variant="subtitle1"
              className="componentLoadingSpinner__message"
            >
              {`${message}...`}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

ComponentLoadingSpinner.propTypes = {
  /* The message to display under the loading spinner. */
  message: PropTypes.string,
  /* The height of the spinner */
  spinnerHeight: PropTypes.string,
};

export default ComponentLoadingSpinner;
