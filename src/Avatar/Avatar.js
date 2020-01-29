import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUIAvatar from '@material-ui/core/Avatar';

import './Avatar.css';

/* Avatar Component - formerly known as ButtonCircle */
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

Avatar.defaultProps = {
  isDisabled: false,
  isFocused: false,
  isInverted: false,
  isContentCenter: false,
};

Avatar.propTypes = {
  /** The content you want inside the Avatar */
  children: PropTypes.node.isRequired,
  /** If the avatar is disabled */
  isDisabled: PropTypes.bool,
  /** If the avatar is focused */
  isFocused: PropTypes.bool,
  /** If we display an inverted version of the avatar */
  isInverted: PropTypes.bool,
  /** If we center the content inside the avatar */
  isContentCenter: PropTypes.bool,
};

export default Avatar;
