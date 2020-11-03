import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import cssVars from '../../styles/cssVars';

const {
  colors: {slate, teal},
} = cssVars;

function OverflowPopover({
  setSelectedTabValue,
  onClose,
  anchorEl,
  overflowTabs,
  menuStyle,
}) {
  const isOpen = Boolean(anchorEl);

  const selectItem = itemValue => {
    setSelectedTabValue(
      overflowTabs.find(tab => tab.value === itemValue).value
    );
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      open={isOpen}
      onClose={onClose}
      style={menuStyle}
      transformOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      {overflowTabs.map(option => (
        <MenuItem
          key={option.value}
          onClick={() => selectItem(option.value)}
          disabled={option.disabled}
          style={{opacity: 'initial'}}
        >
          <Typography
            variant="body2"
            noWrap={true}
            style={{color: option.disabled ? slate : teal}}
          >
            {option.label.toUpperCase()}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

OverflowPopover.propTypes = {
  anchorEl: PropTypes.object,
  overflowTabs: PropTypes.array.isRequired,
  setSelectedTabValue: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  menuStyle: PropTypes.object,
};

export default OverflowPopover;
