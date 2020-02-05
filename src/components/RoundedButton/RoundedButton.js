import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

import './RoundedButton.css';

/** Rounded Button - base button component */
function RoundedButton({
  onClick,
  title,
  isDisabled = false,
  isPrimary = true,
  children,
  startIcon,
  endIcon,
}) {
  const baseClass = 'roundedButton roundedButton__btn';

  const disabledClass = React.useMemo(() => {
    return isDisabled ? 'roundedButton__btn--disabled' : '';
  }, [isDisabled]);

  const primaryClass = React.useMemo(() => {
    return isPrimary
      ? 'roundedButton__btn--primary'
      : 'roundedButton__btn--secondary';
  }, [isPrimary]);

  const buttonColor = React.useMemo(() => {
    return isPrimary ? 'primary' : 'secondary';
  }, [isPrimary]);

  return (
    <Button
      key={title}
      title={title}
      onClick={onClick}
      className={classnames(baseClass, disabledClass, primaryClass)}
      color={buttonColor}
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
  /** An <Icon> component that prepends button text */
  startIcon: PropTypes.node,
  /** An <Icon> component that appends button text */
  endIcon: PropTypes.node,
};

export default RoundedButton;
