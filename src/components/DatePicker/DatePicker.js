import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MaskedTextInput from 'react-text-mask';
import {
  DATE_TIME_FORMATS,
  getDateWithoutTimezone,
  clientMomentToSpecialServerFormat,
  getDateAsMomentIfValid,
  applyBrowserTimezoneToDate,
} from '../../utils/datetime';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import ClearIcon from 'material-ui/svg-icons/content/clear';

const useStyles = makeStyles(() => {
  return {
    datePicker: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      top: '0.2rem',
      width: '100%',
    },
    label: {
      color: 'var(--color-label)',
      fontSize: 'var(--size-label)',
      lineHeight: '1.67rem',
      display: 'inline-block',
    },
    error: {
      borderBottom: '0.1667rem solid var(--color-spanishOrange)',
    },
    errorText: {
      top: '0.8rem',
      position: 'relative',
      fontSize: 'var(--size-label)',
      width: 'max-content',
      color: 'var(--color-roseMadder)',
    },
    calendarIcon: {
      bottom: '-0.25rem',
      position: 'absolute',
      right: '0',
      color: ({disabled}) =>
        disabled ? 'var(--color-slate' : 'var(--color-teal)',
      transform: 'translateY(-50%)',
      cursor: ({disabled}) => (disabled ? 'not-allowed' : 'pointer'),
    },
    clearIcon: {
      color: 'var(--color-white)',
    },
    clearIconButton: {
      bottom: '0.25rem',
      position: 'absolute',
      right: '2rem',
      color: 'var(--color-white)',
      transform: 'scale(0.5, 0.5)',
      cursor: 'pointer',
      border: '0.1rem solid var(--color-slate)',
      borderRadius: '2rem',
      backgroundColor: 'var(--color-slate)',
      minWidth: '0.1rem',
      height: 'auto',
      lineHeight: '0.1rem',
      '&:hover': {
        backgroundColor: 'var(--color-slate)',
      },
    },
    input: {
      fontSize: '1.17rem',
      lineHeight: '1.33rem',
      padding: '0.66rem 2rem 0.66rem 0rem',
      borderBottom: '0.2rem solid var(--color-gainsboro)',
      borderLeft: 'none',
      borderTop: 'none',
      boxShadow: 'none',
      borderRight: 'none',
      width: '100%',
    },
    popper: {
      width: '25rem',
      height: 'auto',
      lineHeight: 'normal',
    },
  };
});

function DatePicker({
  label,
  entity,
  field,
  updateDate,
  disabled,
  dateFormat,
  showTime,
  timeFormat,
  minDate,
  maxDate,
  saveFormat,
}) {
  const classes = useStyles({disabled});
  const clear = e => {
    updateDate(field, '');
    // explicitly close the popover since it is wrapped in a label
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
  };

  const convertValueToSaveFormat = value => {
    if (!value) {
      return null;
    }
    if (!saveFormat) {
      return getDateWithoutTimezone(value);
    }
    return clientMomentToSpecialServerFormat(value, saveFormat);
  };

  const convertSaveFormatValueToMoment = value => {
    if (!value) {
      return null;
    }
    if (!saveFormat) {
      return applyBrowserTimezoneToDate(value);
    }
    return applyBrowserTimezoneToDate(value, saveFormat);
  };

  const onDateChange = (value, e) => {
    updateDate(field, convertValueToSaveFormat(value)); // ensure value is a date object
    // explicitly close the popover since it is wrapped in a label
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
  };

  const value = convertSaveFormatValueToMoment(entity[field]);
  const minDateAsMoment = getDateAsMomentIfValid(minDate);

  const maskWithTime = [
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    ':',
    /\d/,
    /\d/,
    ' ',
    /[A-Z]/i,
    /[A-Z]/i,
  ];
  const maskWithDate = [
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  const mask = showTime ? maskWithTime : maskWithDate;
  const time = showTime ? timeFormat : '';

  return (
    <div className={classes.datePicker}>
      <label className={classes.label}>{label}</label>
      <label>
        <ReactDatePicker
          className={classes.input}
          popperClassName={classes.popper}
          dateFormat={`${dateFormat} ${time}`}
          disabled={disabled}
          dropdownMode="select"
          maxDate={getDateAsMomentIfValid(maxDate)}
          minDate={minDateAsMoment}
          openToDate={minDateAsMoment}
          onChange={onDateChange}
          placeholderText={'mm/dd/yyyy'}
          popperPlacement="bottom"
          selected={value}
          showMonthDropdown={true}
          showYearDropdown={true}
          showTimeSelect={showTime}
          timeFormat={timeFormat}
          timeCaption="Time"
          customInput={<MaskedTextInput type="text" mask={mask} />}
        />

        {entity[field] && (
          <Button
            className={classes.clearIconButton}
            title="Clear Date"
            isDisabled={disabled}
            onClick={clear}
          >
            <ClearIcon className={classes.clearIcon} />
          </Button>
        )}
        <DateRangeIcon filled className={classes.calendarIcon} />
      </label>
    </div>
  );
}

DatePicker.defaultProps = {
  dateFormat: DATE_TIME_FORMATS.DATE_SHORT,
  timeFormat: DATE_TIME_FORMATS.TIME_HOURS_MINUTES_AMPM,
};

DatePicker.propTypes = {
  /** Label for the top of the Date Picker */
  label: PropTypes.string.isRequired,
  /** Will be supplied by top level form */
  entity: PropTypes.object.isRequired,
  /** start or end */
  field: PropTypes.string.isRequired,
  /** Will be supplied by top level form */
  updateDate: PropTypes.func,
  /** Will be supplied by top level form */
  disabled: PropTypes.bool,
  /** boolean to add time to display and picker popper */
  showTime: PropTypes.bool,
  /** Format for the date */
  dateFormat: PropTypes,
  /** Format for the time */
  timeFormat: PropTypes,
  /** minDate for the picker */
  minDate: PropTypes.string,
  /** maxDate for the picker */
  maxDate: PropTypes.string,
};

export default DatePicker;
