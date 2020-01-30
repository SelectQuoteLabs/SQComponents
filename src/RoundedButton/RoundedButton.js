import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

import './RoundedButton.css';

/** Rounded Button - base button component */
class RoundedButton extends React.Component {
  render() {
    const {
      label,
      action,
      title,
      isDisabled,
      primary,
      className,
      children,
    } = this.props;

    return (
      <Button
        key={title}
        title={title}
        onClick={() => action()}
        className={classnames(
          'roundedButton',
          'roundedButton__btn',
          {
            'roundedButton__btn--disabled': isDisabled,
            'roundedButton__btn--primary': primary,
            'roundedButton__btn--secondary': !primary,
          },
          className
        )}
        disabled={isDisabled}
      >
        {children ? children : label}
      </Button>
    );
  }
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
  /** Any special class overrides */
  className: PropTypes.string,
};

export default RoundedButton;
