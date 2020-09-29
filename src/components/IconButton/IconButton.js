import React from 'react';
import PropTypes from 'prop-types';
import MUIIconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: applyPopoverSpacing =>
    applyPopoverSpacing
      ? {
          // this adds some space between the button and the menu popover
          padding: '1rem',
          background: 'transparent',
        }
      : {padding: 0},
  disabled: isDisabled => ({
    cursor: isDisabled ? 'default' : 'pointer',
  }),
}));

// Overrides the inline styles from MUI (CSS classes from makeStyles specifity is lower than an inline style)
const getIconColor = (isIconTeal, isDisabled) => {
  if (isDisabled) {
    return `var(--color-slate)`;
  }

  if (isIconTeal) {
    return `var(--color-teal)`;
  }

  return `var(--color-palmLeaf)`;
};

function IconButton({
  title,
  onClick,
  IconComponent,
  isDisabled = false,
  type = 'button',
  isIconTeal = false,
  applyPopoverSpacing = false,
  height = '2.5rem',
  width = '2.5rem',
}) {
  const classes = useStyles(applyPopoverSpacing, isDisabled);
  const iconColor = getIconColor(isIconTeal, isDisabled);

  return (
    <MUIIconButton
      disableRipple={true}
      disableFocusRipple={true}
      title={title}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      classes={classes}
    >
      <IconComponent style={{color: iconColor, width, height}} />
    </MUIIconButton>
  );
}

IconButton.propTypes = {
  /** The title of the button */
  title: PropTypes.string,
  /** The onClick action if not of type "submit" */
  onClick: PropTypes.func,
  /** If the button is disabled */
  isDisabled: PropTypes.bool,
  /** Type of button, defaults to 'button' */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  /** The Material UI Icon to render inside the button */
  IconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  /** Allows the icon color to be the SQ Teal color */
  isIconTeal: PropTypes.bool,
  /** When true, this allows the button to be spaced appropriately from the popover menu */
  applyPopoverSpacing: PropTypes.bool,
  /** Custom icon height size */
  height: PropTypes.string,
  /** Custom icon width size */
  width: PropTypes.string,
};

export default IconButton;
