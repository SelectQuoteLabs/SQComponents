import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import './ReadOnlyField.css';

class ReadOnlyField extends React.Component {
  render() {
    const {label, value, size = 'auto'} = this.props;

    return (
      <Grid item sm={size}>
        <label className="readOnlyField__label">{label}</label>
        <p className="readOnlyField__value">{value ? value : '- -'}</p>
      </Grid>
    );
  }
}

ReadOnlyField.propTypes = {
  /** Descriptive label of the input */
  label: PropTypes.string.isRequired,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ReadOnlyField;
