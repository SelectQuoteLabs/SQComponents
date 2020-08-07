import React from 'react';
import PropTypes from 'prop-types';

import RoundedButton from '../RoundedButton';
import DialogAlert from '../DialogAlert';
import {useDialog} from '../../hooks/useDialog';
import {useFormButton} from './useFormButton';

function SQFormResetButtonWithConfirmation({
  children,
  isDisabled = false,
  buttonTitle = 'Form Reset',
  confirmationContent,
  confirmationTitle = 'Reset Form',
}) {
  const [isOpen, {openDialog, closeDialog}] = useDialog();
  const {dirty, handleReset} = useFormButton(isDisabled);

  const handlePrimaryButtonClick = () => {
    handleReset();
    closeDialog();
  };

  return (
    <>
      <RoundedButton
        title={buttonTitle}
        isDisabled={isDisabled || !dirty}
        onClick={openDialog}
      >
        {children}
      </RoundedButton>
      <DialogAlert
        isOpen={isOpen}
        title={confirmationTitle}
        primaryButtonText="Reset"
        onPrimaryButtonClick={handlePrimaryButtonClick}
        secondaryButtonText="Cancel"
        onSecondaryButtonClick={closeDialog}
      >
        {confirmationContent}
      </DialogAlert>
    </>
  );
}

SQFormResetButtonWithConfirmation.propTypes = {
  children: PropTypes.node.isRequired,
  confirmationTitle: PropTypes.string,
  confirmationContent: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  buttonTitle: PropTypes.string,
};

export default SQFormResetButtonWithConfirmation;
