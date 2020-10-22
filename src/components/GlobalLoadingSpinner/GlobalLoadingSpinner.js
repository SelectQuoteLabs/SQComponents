import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../LoadingIcon';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import './GlobalLoadingSpinner.css';

const GlobalLoadingSpinner = ({isOpen, message}) => {
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
      <DialogContent className="globalLoadingSpinner__dialog">
        <LoadingIcon height="120px" />
        {messageParts.map(messagePart => (
          <Typography variant="h5" key={messagePart}>
            {messagePart}
          </Typography>
        ))}
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
