import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import './BaseAvatar.css';

// This component was formerly named ButtonCircle
function BaseAvatar({
  children,
  isContentCenter = true,
  isDisabled = false,
  isFocused,
  isInverted,
}) {
  const contentCenterClass = React.useMemo(() => {
    return isContentCenter ? 'baseAvatar--centerContent' : '';
  }, [isContentCenter]);

  const circleClass = React.useMemo(() => {
    const baseClass = isInverted
      ? 'baseAvatar baseAvatar--inverted'
      : 'baseAvatar';

    if (isDisabled) return `${baseClass} baseAvatar--isDisabled`;
    if (isFocused) return `${baseClass} baseAvatar--isFocused`;

    return baseClass;
  }, [isDisabled, isFocused, isInverted]);

  return (
    <Avatar className={classnames(circleClass, contentCenterClass)}>
      {children}
    </Avatar>
  );
}

BaseAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isInverted: PropTypes.bool,
  isContentCenter: PropTypes.bool,
};

export default BaseAvatar;
