import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../LoadingIcon';
import {
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  contentContainer: {
    padding: 24,
    width: 458,
  },
  spinner: {
    marginBottom: 24,
  },
});

const GlobalLoadingSpinner = ({isOpen, message}) => {
  const classes = useStyles();
  // Ensure modal isn't in DOM if it's not open
  if (!isOpen) return null;

  // a split message would be formatted `first part\nsecond part\nthird`
  // messages not split with a '\n' will display normally otherwise
  const messageParts = message
    ? message
        .replace(/\r/g, '')
        .split('\n')
        .map(s => s.trim())
    : [];

  if (messageParts.length === 1) {
    messageParts[0] = `${messageParts[0]}...`;
  }

  return (
    <Dialog disableBackdropClick open>
      <DialogContent>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          justify="center"
          alignItems="center"
          className={classes.contentContainer}
        >
          <Grid item className={classes.spinner}>
            <LoadingIcon height="120px" />
          </Grid>
          {messageParts.map(messagePart => (
            <Typography variant="h5" key={messagePart} align="center">
              {messagePart}
            </Typography>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

GlobalLoadingSpinner.propTypes = {
  /* Whether the dialog is open */
  isOpen: PropTypes.bool,
  /* The message to be displayed under the spinner */
  message: PropTypes.string,
};

export default GlobalLoadingSpinner;
