import React from 'react';
import PropTypes from 'prop-types';
import {useFormikContext} from 'formik';

import IconButton from '../IconButton';

function SQFormIconButton({
  IconComponent,
  title = 'Form Submission',
  type = 'submit',
}) {
  const {isDirty, isValid} = useFormikContext();
  return (
    <IconButton
      IconComponent={IconComponent}
      title={title}
      type={type}
      isDisabled={!isDirty && !isValid}
    />
  );
}

SQFormIconButton.propTypes = {
  /** The Material UI Icon to render inside the button */
  IconComponent: PropTypes.func.isRequired,
  /** The title of the button */
  title: PropTypes.string,
  /** Type of button, defaults to 'button' */
  type: PropTypes.string,
};

export default SQFormIconButton;
