import React from 'react';
import PropTypes from 'prop-types';
import {useFormikContext} from 'formik';

import RoundedButton from '../RoundedButton';

function SQFormButton({children}) {
  const {isDirty, isValid} = useFormikContext();
  return (
    <RoundedButton
      title="Form Submission"
      type="submit"
      isDisabled={!isDirty && !isValid}
    >
      {children}
    </RoundedButton>
  );
}

SQFormButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SQFormButton;
