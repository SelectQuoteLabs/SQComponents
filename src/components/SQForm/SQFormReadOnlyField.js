import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {useFormikContext} from 'formik';

const useStyles = makeStyles(() => ({
  label: {
    color: 'var(--color- label)',
    fontSize: '12px',
  },
  value: {
    fontSize: '14px',
    marginTop: '4px',
  },
}));

function SQFormReadOnlyField({label, name, size = 'auto'}) {
  const {values} = useFormikContext();
  const classes = useStyles();

  return (
    <Grid item sm={size}>
      <label className={classes.label}>{label}</label>
      <p className={classes.value}>{values[name] ? values[name] : '- -'}</p>
    </Grid>
  );
}

SQFormReadOnlyField.propTypes = {
  /** Descriptive label of the input */
  label: PropTypes.string.isRequired,
  /** Size of the input given full-width is 12. */
  size: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SQFormReadOnlyField;
