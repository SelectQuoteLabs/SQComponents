import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover/Popover';
import classnames from 'classnames';
import {Menu, MenuItem} from 'material-ui/Menu';
import './OverflowPopover.css';

function OverflowPopover({
  selectOption,
  handleClose,
  isOpen,
  anchorEl,
  options,
  selectedOption,
  menuStyle,
}) {
  const selectItem = value => {
    selectOption(value);
    handleClose();
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      onRequestClose={handleClose}
    >
      <Menu style={menuStyle}>
        {options.map(option => (
          <MenuItem
            key={option.value}
            onClick={() => selectItem(option.value)}
            disabled={option.disabled}
          >
            <span
              className={classnames(
                'overflowPopover__menuItemLabel',
                {
                  'overflowPopover__menuItemLabel--disabled': option.disabled,
                },
                {
                  'overflowPopover__menuItemLabel--selected':
                    selectedOption.value === option.value,
                }
              )}
            >
              {option.label.toUpperCase()}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </Popover>
  );
}

OverflowPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.object.isRequired,
  selectOption: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  menuStyle: PropTypes.object,
};

export default OverflowPopover;
