import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import CalendarIcon from 'material-ui/svg-icons/action/date-range';
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
  fullWidth,
  updateDate,
  disabled,
  dateFormat,
  showTime,
  timeFormat,
  minDate,
  maxDate,
  saveFormat,
}) {
  const mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

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

  return (
    <div className={`datePicker ${fullWidth ? 'datePicker__fullWidth' : ''}`}>
      <label className="datePicker__label">{label}</label>
      <label>
        <ReactDatePicker
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
        <CalendarIcon
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
  label: PropTypes.string.isRequired,
  entity: PropTypes.object.isRequired, // Will be supplied by top level form
  field: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  updateDate: PropTypes.func, // Will be supplied by top level form
  disabled: PropTypes.bool, // Will be supplied by top level form
  showTime: PropTypes.bool, // Will be supplied by top level form
  dateFormat: PropTypes,
  timeFormat: PropTypes,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};

export default DatePicker;
