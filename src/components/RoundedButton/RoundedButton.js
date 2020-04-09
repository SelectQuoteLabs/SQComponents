import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';

import './RoundedButton.css';

/** Rounded Button - base button component */
function RoundedButton({
  onClick,
  title,
  isDisabled = false,
  color = 'primary',
  variant = 'contained',
  children,
  startIcon,
  endIcon,
  type = 'button',
}) {
  const isGhostButton = React.useMemo(() => {
    return variant === 'outlined';
  }, [variant]);

  const isSuccessButton = React.useMemo(() => {
    return color === 'success';
  }, [color]);

  return (
    <Button
      key={title}
      title={title}
      onClick={onClick}
      className={`roundedButton ${classnames({
        'roundedButton--primary': !isGhostButton && !isSuccessButton,
        'roundedButton--secondary': isGhostButton && !isSuccessButton,
        'roundedButton--success': !isGhostButton && isSuccessButton,
      })}`}
      disabled={isDisabled}
      variant={variant}
      color={isSuccessButton ? 'default' : color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
    >
      <Typography variant="button">{children}</Typography>
    </Button>
  );
}

RoundedButton.propTypes = {
  /** The onClick action if not of type "submit" */
  onClick: PropTypes.func,
  /** The title of the button */
  title: PropTypes.string.isRequired,
  /** Will override the text inside the button */
  children: PropTypes.node,
  /** If the button is disabled */
  isDisabled: PropTypes.bool,
  /** The style of a button, primary/secondary/success */
  color: PropTypes.oneOf(['primary', 'secondary', 'success']),
  /** If the button contained or outlined */
  variant: PropTypes.oneOf(['contained', 'outlined']),
  /** An <Icon> component that prepends button text */
  startIcon: PropTypes.node,
  /** An <Icon> component that appends button text */
  endIcon: PropTypes.node,
  /** Type of button, defaults to 'button' */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default RoundedButton;
