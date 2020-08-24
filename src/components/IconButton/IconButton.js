import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUIIconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core';
import './IconButton.css';

const useStyles = makeStyles(() => ({
  // this adds some space between the button and the menu popover
  root: {
    padding: '1rem',
    background: 'transparent',
  },
}));
function IconButton({
  title,
  onClick,
  IconComponent,
  isDisabled = false,
  type = 'button',
  isIconTeal = false,
  applyPopoverSpacing = false,
}) {
  console.log(typeof IconComponent);
  const classes = useStyles();
  return (
    <MUIIconButton
      disableRipple={true}
      disableFocusRipple={true}
      title={title}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      classes={applyPopoverSpacing ? classes : {}}
    >
      <IconComponent
        className={`iconButton ${classnames({
          iconButton__enabled: !isDisabled && !isIconTeal,
          iconButton__disabled: isDisabled,
        })}`}
      />
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
};

export default IconButton;
