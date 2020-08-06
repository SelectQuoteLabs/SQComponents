import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import ClearIcon from '@material-ui/icons/Clear';
// import {IconButton} from '@material-ui/core';
import {DateTimePicker} from '@material-ui/pickers';

import {useForm} from './useForm';

function SQFormDateTimePicker({
  name,
  label,
  size = 'auto',
  isDisabled = false,
  isRequired = false,
  placeholder = '',
  onBlur,
  onChange,
  ...dateTimePickerProps // https://next.material-ui-pickers.dev/api/DateTimePicker
}) {
  const {
    fieldState: {isFieldError},
    fieldHelpers: {handleBlur, handleChange, HelperTextComponent},
  } = useForm({
    name,
    isRequired,
    onBlur,
    onChange,
  });
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <Grid item sm={size}>
      <DateTimePicker
        {...dateTimePickerProps}
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={props => {
          return (
            <TextField
              {...props}
              name={name}
              color="primary"
              disabled={isDisabled}
              error={isFieldError}
              fullWidth={true}
              InputLabelProps={{shrink: true}}
              FormHelperTextProps={{error: isFieldError}}
              helperText={HelperTextComponent}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              required={isRequired}
            />
          );
        }}
      />
    </Grid>
  );
}

SQFormDateTimePicker.propTypes = {
  /** Disabled property to disable the input if true */
  isDisabled: PropTypes.bool,
  /** Required property used to highlight input and label if not fulfilled */
  isRequired: PropTypes.bool,
  /** Descriptive label of the input */
  label: PropTypes.string.isRequired,
  /** Name of the field will be the Object key of the key/value pair form payload */
  name: PropTypes.string.isRequired,
  /** Placeholder text used inside the input field to provide hints to the user */
  placeholder: PropTypes.string,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /** Custom onBlur event callback */
  onBlur: PropTypes.func,
  /** Custom onChange event callback */
  onChange: PropTypes.func,
};

export default SQFormDateTimePicker;
