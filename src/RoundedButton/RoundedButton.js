import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

import './RoundedButton.css';

/** Rounded Button - base button component */
function RoundedButton({label, action, title, isDisabled, primary, children}) {
  const baseClass = 'roundedButton roundedButton__btn';

  const disabledClass = React.useMemo(() => {
    return isDisabled ? 'roundedButton__btn--disabled' : '';
  }, [isDisabled]);

  const primaryClass = React.useMemo(() => {
    return primary
      ? 'roundedButton__btn--primary'
      : 'roundedButton__btn--secondary';
  }, [primary]);

  return (
    <Button
      key={title}
      title={title}
      onClick={() => action()}
      className={classnames(baseClass, disabledClass, primaryClass)}
      disabled={isDisabled}
    >
      {children ? children : label}
    </Button>
  );
}

RoundedButton.defaultProps = {
  disabled: false,
  primary: true,
};

RoundedButton.propTypes = {
  /** The text inside the button, children prop will override this */
  label: PropTypes.string.isRequired,
  /** The onClick action */
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  /** Will override the text inside the button */
  children: PropTypes.node,
  /** If the button is disabled */
  isDisabled: PropTypes.bool,
  /** If the button has a primary style */
  primary: PropTypes.bool,
};

export default RoundedButton;
