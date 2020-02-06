import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './RoundedButton.css';

/** Rounded Button - base button component */
function RoundedButton({
  onClick,
  title,
  isDisabled = false,
  isPrimary = true,
  isSubmit = false,
  children,
  startIcon,
  endIcon,
}) {
  const buttonClass = React.useMemo(() => {
    let baseClass = 'roundedButton';
    if (isDisabled) baseClass = `${baseClass} roundedButton--disabled`;

    if (isSubmit && isPrimary)
      return `${baseClass} roundedButton--submit-primary`;
    if (isSubmit && !isPrimary)
      return `${baseClass} roundedButton--submit-secondary`;

    if (isPrimary) {
      return `${baseClass} roundedButton--primary`;
    } else {
      return `${baseClass} roundedButton--secondary`;
    }
  }, [isDisabled, isPrimary, isSubmit]);

  return (
    <Button
      key={title}
      title={title}
      onClick={onClick}
      className={buttonClass}
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
  /** If the button has a primary style */
  isPrimary: PropTypes.bool,
  /** If the button is a submit style */
  isSubmit: PropTypes.bool,
  /** An <Icon> component that prepends button text */
  startIcon: PropTypes.node,
  /** An <Icon> component that appends button text */
  endIcon: PropTypes.node,
};

export default RoundedButton;
