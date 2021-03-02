import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Grid, Icon, Typography, makeStyles, Tooltip} from '@material-ui/core';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

const truncateTextStyles = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
};

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: '1px solid var(--color-lightGray)',
    marginBottom: '1.5rem',
  },
  title: {
    color: 'var(--color-granite)',
    marginRight: '10px',
    maxWidth: '380px',
    flexShrink: 0,
  },
  informativeHeading: {
    fontWeight: 500,
  },
  informativeHeadingIcon: {
    marginLeft: '4px',
    marginRight: '4px',
  },
  truncateText: truncateTextStyles,
  childrenWrapper: {
    '& button > span': truncateTextStyles,
  },
  initial: {
    color: 'initial',
  },
  success: {
    color: 'var(--color-textSuccessGreen)',
  },
  warning: {
    color: 'var(--color-textWarningYellow)',
  },
  error: {
    color: 'var(--color-textErrorRed)',
  },
  info: {
    color: 'var(--color-textInfoBlue)',
  },
}));

function SectionHeader({
  children,
  informativeHeading = null,
  title,
  type = 'initial',
  containerStyles = {},
}) {
  const classes = useStyles();

  function getInformativeHeadingIcon() {
    switch (type) {
      case 'error':
        return (
          <WarningIcon
            className={classnames(
              classes.informativeHeadingIcon,
              classes[type]
            )}
          />
        );
      case 'warning':
        return (
          <NewReleasesIcon
            className={classnames(
              classes.informativeHeadingIcon,
              classes[type]
            )}
          />
        );
      case 'success':
        return (
          <VerifiedUserIcon
            className={classnames(
              classes.informativeHeadingIcon,
              classes[type]
            )}
          />
        );
      case 'info':
        return (
          <InfoIcon
            className={classnames(
              classes.informativeHeadingIcon,
              classes[type]
            )}
          />
        );
      default:
        return '';
    }
  }

  function renderInformativeHeading() {
    return (
      <>
        <Tooltip placement="top" arrow title={informativeHeading}>
          <span>{type && <Icon component={getInformativeHeadingIcon} />}</span>
        </Tooltip>

        <Typography
          component="span"
          variant="caption"
          className={classnames(
            classes.informativeHeading,
            classes.truncateText,
            classes[type]
          )}
        >
          {informativeHeading}
        </Typography>
      </>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="baseline"
      wrap="nowrap"
      component="header"
      className={classes.container}
      style={{
        ...containerStyles,
      }}
    >
      <Grid container item xs={8} wrap="nowrap" alignItems="center">
        <Typography
          className={classnames(classes.title, classes.truncateText)}
          component="h3"
          variant="overline"
        >
          {title}
        </Typography>
        {informativeHeading && renderInformativeHeading()}
      </Grid>
      <Grid
        className={classes.childrenWrapper}
        container
        item
        xs={4}
        justify="flex-end"
      >
        {children}
      </Grid>
    </Grid>
  );
}

SectionHeader.propTypes = {
  /** Optional element to render at the end of the header (Right side) */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Optional container inline styles */
  containerStyles: PropTypes.object,
  /** Optional element to render after the Title, most commonly used for informative dynamic text */
  informativeHeading: PropTypes.string,
  /** Optional, depicts the color and iconography of the informativeHeading */
  type: PropTypes.oneOf(['initial', 'success', 'warning', 'error', 'info']),
  /** Title text to render at the start of the header (Left side) */
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
