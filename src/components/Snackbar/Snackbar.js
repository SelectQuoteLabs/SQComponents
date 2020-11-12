import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar as MUISnackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import {useSnackbar} from '../../contexts/SnackbarContext';

export default function Snackbar({
  position = {vertical: 'top', horizontal: 'right'},
}) {
  const [snackbarState, {closeSnackbar}] = useSnackbar();

  return (
    <MUISnackbar
      open={snackbarState.isOpen}
      anchorOrigin={position}
      autoHideDuration={3000}
      onClose={closeSnackbar}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={closeSnackbar}
        severity={snackbarState.severity}
      >
        {snackbarState.message}
      </Alert>
    </MUISnackbar>
  );
}

Snackbar.propTypes = {
  /** This is optional, but if provided, must be an object with these properties */
  position: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
};
