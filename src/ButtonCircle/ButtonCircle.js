import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ButtonCircle.css';

class ButtonCircle extends Component {
  setContentCenterClass = () => {
    const {isContentCenter} = this.props;

    return isContentCenter ? 'buttonCircle--centerContent' : '';
  };

  getCircleClass = () => {
    const {isEnabled, isFocused, isInverted} = this.props;
    const baseClass = isInverted
      ? 'buttonCircle buttonCircle--inverted'
      : 'buttonCircle';

    if (!isEnabled) return `${baseClass} buttonCircle--isDisabled`;

    if (isFocused) return `${baseClass} buttonCircle--isFocused`;

    return baseClass;
  };

  render() {
    const {children} = this.props;

    return (
      <div
        className={classnames(
          this.getCircleClass(),
          this.setContentCenterClass()
        )}
      >
        {children}
      </div>
    );
  }
}

ButtonCircle.propTypes = {
  children: PropTypes.node.isRequired,
  isEnabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isInverted: PropTypes.bool,
  isContentCenter: PropTypes.bool,
};

export default ButtonCircle;
