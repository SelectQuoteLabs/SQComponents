import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import WarningIcon from '@material-ui/icons/NewReleases';
import CheckIcon from '@material-ui/icons/Check';
import {getIn, useField} from 'formik';

const SPACE_STYLE = {marginRight: '0.3333rem'};

function SQTextField({
  name,
  label,
  isRequired = false,
  placeholder = '',
  size = 'auto',
  onBlur,
  onChange,
}) {
  const [field, meta] = useField(name);
  const errorMessage = getIn(meta, 'error');
  const isTouched = !!getIn(meta, 'touched');
  const isError = !!errorMessage;
  const isFieldError = isTouched && isError;
  const isFieldRequired = !isTouched && isRequired;
  const isFulfilled = isTouched && !isFieldError;

  const handleChange = React.useCallback(
    event => {
      field.onChange(event);
      onChange && onChange(event);
    },
    [field, onChange]
  );
  const handleBlur = React.useCallback(
    event => {
      field.onBlur(event);
      onBlur && onBlur(event);
    },
    [field, onBlur]
  );

  const HelperTextComponent = React.useMemo(() => {
    if (isFieldRequired) {
      return (
        <>
          <WarningIcon color="disabled" style={SPACE_STYLE} />
          Required
        </>
      );
    }
    if (isFieldError) {
      return (
        <>
          <WarningIcon color="error" style={SPACE_STYLE} />
          {errorMessage}
        </>
      );
    }
    if (isFulfilled)
      return (
        <CheckIcon style={{color: 'var(--color-palmLeaf)', ...SPACE_STYLE}} />
      );
  }, [errorMessage, isFieldError, isFieldRequired, isFulfilled]);

  return (
    <Grid item sm={size}>
      <TextField
        color="primary"
        error={isFieldError}
        fullWidth={true}
        InputLabelProps={{shrink: true}}
        FormHelperTextProps={{error: isFieldError}}
        name={name}
        type="text"
        label={label}
        helperText={HelperTextComponent}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        required={isRequired}
      />
    </Grid>
  );
}

SQTextField.propTypes = {
  /** Name of the field will be the Object key of the key/value pair form payload */
  name: PropTypes.string.isRequired,
  /** Descriptive label of the input */
  label: PropTypes.string.isRequired,
  /** Placeholder text used inside the input field to provide hints to the user */
  placeholder: PropTypes.string,
  /** Required property used to highlight input and label if not fulfilled */
  isRequired: PropTypes.bool,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /** Custom onBlur event callback */
  onBlur: PropTypes.func,
  /** Custom onChange event callback */
  onChange: PropTypes.func,
};

export default SQTextField;
