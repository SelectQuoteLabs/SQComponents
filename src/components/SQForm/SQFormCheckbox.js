import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

import {useForm} from './useForm';

function SQFormCheckbox({
  isDisabled = false,
  isRequired = false,
  label,
  name,
  onChange,
  size = 'auto',
}) {
  const [fieldHelpers, {isFieldError}, {field}] = useForm({
    name,
    isRequired,
    onChange,
  });
  const {handleChange, HelperTextComponent} = fieldHelpers;

  return (
    <Grid item sm={size}>
      <FormControlLabel
        control={
          <Checkbox
            checked={field.value}
            disabled={isDisabled}
            required={isRequired}
            name={name}
            onChange={handleChange}
          />
        }
        label={label}
      />
      <FormHelperText error={isFieldError} required={isRequired}>
        {HelperTextComponent}
      </FormHelperText>
    </Grid>
  );
}

SQFormCheckbox.propTypes = {
  isDisabled: PropTypes.bool,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default SQFormCheckbox;
