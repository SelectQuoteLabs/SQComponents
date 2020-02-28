import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import DateRangeIcon from '@material-ui/icons/DateRange';
import classnames from 'classnames';
import MaskedTextInput from 'react-text-mask';
import {
  DATE_TIME_FORMATS,
  getDateWithoutTimezone,
  clientMomentToSpecialServerFormat,
  getDateAsMomentIfValid,
  applyBrowserTimezoneToDate,
} from '../../utils/datetime';

import Button from '@material-ui/core/Button';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

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

  return (
    <div className="datePicker">
      <label className="datePicker__label">{label}</label>
      <label onClick={e => e.preventDefault()}>
        <ReactDatePicker
          className="datePicker__input"
          popperClassName="datePicker__popper"
          dateFormat={`${dateFormat}${showTime ? ` ${timeFormat}` : ''}`}
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
            className="datePicker__clearIcon_btn"
            title="Clear Date"
            isDisabled={disabled}
            onClick={clear}
          >
            <ClearIcon className="datePicker__clearIcon" />
          </Button>
        )}
        <DateRangeIcon
          filled
          className={classnames([
            'datePicker__calendarIcon',
            {'datePicker__calendarIcon--disabled': disabled},
          ])}
        />
      </label>
    </div>
  );
}

DatePicker.defaultProps = {
  dateFormat: DATE_TIME_FORMATS.DATE_SHORT,
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
