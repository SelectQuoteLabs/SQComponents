import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    roundedButton: {
      padding: '0 1.5rem',
      height: '2.5rem',
      lineHeight: '1rem',
      border: '0.1667rem solid var(--button-primary)',
      borderRadius: '2rem',
      boxShadow: 'none',
      textTransform: 'capitalize',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    primary: {
      backgroundColor: 'var(--button-primary)',
      color: 'var(--color-white)',
      border: '0.1667rem solid transparent',
      '&:hover': {
        backgroundColor: 'var(--button-primary-hover)',
        color: 'var(--color-white)',
      },
    },
    secondary: {
      backgroundColor: 'var(--color-white)',
      color: 'var(--button-secondary)',
      border: '0.1667rem solid var(--button-secondary)',
      '&:hover': {
        backgroundColor: 'var(--button-secondary-hover)',
        color: 'var(--button-secondary)',
        border: '0.1667rem solid var(--button-secondary)',
      },
    },
    success: {
      backgroundColor: 'var(--color-palmLeaf)',
      color: 'var(--color-white)',
      border: '0.1667rem solid transparent',
      '&:hover': {
        backgroundColor: 'var(--color-button-hover-success)',
        color: 'var(--color-white)',
      },
    },
  };
});

const getButtonStyleType = ({isGhostButton, isSuccessButton}) => {
  if (isGhostButton && !isSuccessButton) {
    return 'secondary';
  }
  if (!isGhostButton) {
    if (isSuccessButton) {
      return 'success';
    } else {
      return 'primary';
    }
  }
};

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

  const buttonStyleType = getButtonStyleType({isGhostButton, isSuccessButton});

  const classes = useStyles();

  return (
    <Button
      key={title}
      title={title}
      onClick={onClick}
      className={`${classes.roundedButton} ${classes[buttonStyleType]}`}
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
