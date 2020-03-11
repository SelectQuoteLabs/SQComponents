import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {useField, useFormikContext} from 'formik';
import {fieldToTextField} from 'formik-material-ui';

import {useSQFormThemeContext} from './SQFormContext';

function SQTextField({name, placeholder, type = 'text'}) {
  const form = useFormikContext();
  const cssClasses = useSQFormThemeContext();
  const [field] = useField(name);
  return (
    <TextField
      className={cssClasses}
      {...fieldToTextField({field, form, name, type, placeholder})}
    />
  );
}

SQTextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default SQTextField;
