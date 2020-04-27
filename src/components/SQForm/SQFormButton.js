import React from 'react';
import PropTypes from 'prop-types';

import RoundedButton from '../RoundedButton';
import {useFormButton} from './useFormButton';

function SQFormButton({
  children,
  isDisabled = false,
  title = 'Form Submission',
  type = 'submit',
}) {
  const {isButtonDisabled} = useFormButton(isDisabled);

  return (
    <RoundedButton title={title} type={type} isDisabled={isButtonDisabled}>
      {children}
    </RoundedButton>
  );
}

SQFormButton.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default SQFormButton;
