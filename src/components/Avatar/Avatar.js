import React from 'react';
import PropTypes from 'prop-types';
import {Avatar as MUIAvatar, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    avatar: {
      height: '3rem',
      width: '3rem',
      fontSize: '2rem',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-cerulean)',
      margin: '0 auto',
      transition: 'background-color 0.2s',
    },
    inverted: {
      color: 'var(--color-teal)',
      backgroundColor: 'transparent',
      border: '0.167rem solid var(--color-teal)',
    },
    isDisabled: {
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-slate)',
      border: '0.083rem solid var(--color-slate)',
    },
    isFocused: {
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-spanishOrange)',
      border: '0.083rem solid var(--color-spanishOrange)',
    },
    centerContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
});

/** Avatar Component - formerly known as ButtonCircle */
function Avatar({
  children,
  isContentCenter = true,
  isDisabled = false,
  isFocused,
  isInverted,
}) {
  const classes = useStyles();

  const contentCenterClass = React.useMemo(() => {
    return isContentCenter ? classes.centerContent : '';
  }, [classes.centerContent, isContentCenter]);

  const circleClass = React.useMemo(() => {
    const baseClass = isInverted
      ? `${classes.avatar} ${classes.inverted}`
      : classes.avatar;

    if (isDisabled) return `${baseClass} ${classes.isDisabled}`;
    if (isFocused) return `${baseClass} ${classes.isFocused}`;

    return baseClass;
  }, [
    classes.avatar,
    classes.inverted,
    classes.isDisabled,
    classes.isFocused,
    isDisabled,
    isFocused,
    isInverted,
  ]);

  return (
    <MUIAvatar className={`${circleClass} ${contentCenterClass}`}>
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
