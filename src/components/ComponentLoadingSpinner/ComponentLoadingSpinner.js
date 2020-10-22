import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import LoadingIcon from '../LoadingIcon';
import './ComponentLoadingSpinner.css';

const ComponentLoadingSpinner = ({message = ''}) => {
  return (
    <div className="componentLoadingSpinner">
      <LoadingIcon height="120px" />
      {message && (
        <Typography
          variant="subtitle1"
          className="componentLoadingSpinner__message"
        >
          {`${message}...`}
        </Typography>
      )}
    </div>
  );
};

ComponentLoadingSpinner.propTypes = {
  /* The message to display under the loading spinner. */
  message: PropTypes.string,
};

export default ComponentLoadingSpinner;
