import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover/Popover';
import classnames from 'classnames';
import {Menu, MenuItem} from 'material-ui/Menu';
import './OverflowPopover.css';

class OverflowPopover extends PureComponent {
  selectItem(value) {
    const {selectOption, handleClose} = this.props;

    selectOption(value);
    handleClose();
  }

  render() {
    const {
      isOpen,
      anchorEl,
      options,
      selectedOption,
      handleClose,
      menuStyle,
    } = this.props;

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
              onClick={() => this.selectItem(option.value)}
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
