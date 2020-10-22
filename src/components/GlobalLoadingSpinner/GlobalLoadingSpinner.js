import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../LoadingIcon';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import './GlobalLoadingSpinner.css';

const GlobalLoadingSpinner = ({isOpen, message}) => {
  // a split message would be formatted 'first part : second part'
  // message does not have to be split with a ':', it will display normally otherwise
  const messageParts = message ? message.split(':').map(s => s.trim()) : [];

  if (messageParts.length === 1) {
    messageParts[0] = `${messageParts[0]}...`;
  }

  return (
    <Dialog disableBackdropClick open={isOpen}>
      <div className="globalLoadingSpinner__dialog">
        <div className="globalLoadingSpinner__icon">
          <LoadingIcon height="120px" />
        </div>
        {messageParts.map(messagePart => (
          <Typography variant="h5" key={messagePart}>
            {messagePart}
          </Typography>
        ))}
      </div>
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
