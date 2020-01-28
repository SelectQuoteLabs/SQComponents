import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUIAvatar from '@material-ui/core/Avatar';

import './Avatar.css';

// This component was formerly named ButtonCircle
function Avatar({
  children,
  isContentCenter = true,
  isDisabled = false,
  isFocused,
  isInverted,
}) {
  const contentCenterClass = React.useMemo(() => {
    return isContentCenter ? 'avatar--centerContent' : '';
  }, [isContentCenter]);

  const circleClass = React.useMemo(() => {
    const baseClass = isInverted ? 'avatar avatar--inverted' : 'avatar';

    if (isDisabled) return `${baseClass} avatar--isDisabled`;
    if (isFocused) return `${baseClass} avatar--isFocused`;

    return baseClass;
  }, [isDisabled, isFocused, isInverted]);

  return (
    <MUIAvatar className={classnames(circleClass, contentCenterClass)}>
      {children}
    </MUIAvatar>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isInverted: PropTypes.bool,
  isContentCenter: PropTypes.bool,
};

export default Avatar;
