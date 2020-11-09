import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';

const styles = {
  container: {
    borderBottom: '1px solid var(--color-lightGray)',
    marginBottom: '1.5rem',
  },
  title: {
    color: 'var(--color-granite)',
    marginRight: '10px',
  },
};

function SectionHeader({
  children,
  informativeHeading = null,
  title,
  containerStyles = {},
}) {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="baseline"
      wrap="nowrap"
      component="header"
      style={{
        ...styles.container,
        ...containerStyles,
      }}
    >
      <Grid container item xs={10} alignItems="center">
        <Typography
          style={{
            ...styles.title,
          }}
          component="h3"
          variant="overline"
        >
          {title}
        </Typography>
        {informativeHeading}
      </Grid>
      <Grid container item xs={2} justify="flex-end">
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
  informativeHeading: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
  ]),
  /** Title text to render at the start of the header (Left side) */
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
