import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

import {useForm} from './useForm';

const EMPTY_LABEL = '- -';
const EMPTY_VALUE = '';
const EMPTY_OPTION = {label: EMPTY_LABEL, value: EMPTY_VALUE};

function SQFormDropdown({
  children,
  displayEmpty = false,
  isRequired = false,
  label,
  name,
  onBlur,
  onChange,
  size = 'auto',
}) {
  const [fieldHelpers, {isFieldError}, {field}] = useForm({
    name,
    isRequired,
    onBlur,
    onChange,
  });
  const {handleBlur, handleChange, HelperTextComponent} = fieldHelpers;
  const labelID = label.toLowerCase();

  const options = React.useMemo(() => {
    if (!displayEmpty) return children;

    const [firstOption] = children;

    if (
      firstOption.label === EMPTY_LABEL ||
      firstOption.label === EMPTY_VALUE
    ) {
      return children;
    }

    return [EMPTY_OPTION, ...children];
  }, [children, displayEmpty]);

  return (
    <Grid item sm={size}>
      <InputLabel id={labelID}>{label}</InputLabel>
      <Select
        inputProps={{name}}
        value={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
        fullWidth={true}
        labelId={labelID}
      >
        {options.map(option => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error={isFieldError} required={isRequired}>
        {HelperTextComponent}
      </FormHelperText>
    </Grid>
  );
}

SQFormDropdown.propTypes = {
  /** Dropdown options to select from */
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  /** Whether to display empty option - - in options */
  displayEmpty: PropTypes.bool,
  /** Required property used to highlight input and label if not fulfilled */
  isRequired: PropTypes.bool,
  /** Label text */
  label: PropTypes.string.isRequired,
  /** Name identifier of the input field */
  name: PropTypes.string.isRequired,
  /** Custom onBlur event callback */
  onBlur: PropTypes.func,
  /** Custom onChange event callback */
  onChange: PropTypes.func,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default SQFormDropdown;
