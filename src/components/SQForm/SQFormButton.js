import React from 'react';
import PropTypes from 'prop-types';
import {useFormikContext} from 'formik';

import RoundedButton from '../RoundedButton';

function SQFormButton({children, title = 'Form Submission', type = 'submit'}) {
  const {isDirty, isValid} = useFormikContext();
  return (
    <RoundedButton title={title} type={type} isDisabled={!isDirty && !isValid}>
      {children}
    </RoundedButton>
  );
}

SQFormButton.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default SQFormButton;
