import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import {deprecated} from '../../helpers/deprecation';

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
    >
      {children}
    </Button>
  );
}

RoundedButton.propTypes = {
  /** The onClick action */
  onClick: PropTypes.func.isRequired,
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
};

const RoundedButtonWithDeprecations = deprecated(RoundedButton, {
  isMarkedForFailure: false,
  deprecatedProp: 'disabled',
  replacementProp: 'isDisabled',
});

export default RoundedButtonWithDeprecations;
