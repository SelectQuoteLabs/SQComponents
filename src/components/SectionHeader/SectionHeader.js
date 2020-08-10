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
  },
};

function SectionHeader({children, title, containerStyles = {}}) {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="baseline"
      component="header"
      style={{
        ...styles.container,
        ...containerStyles,
      }}
    >
      <Grid item>
        <Typography
          style={{
            ...styles.title,
          }}
          component="h3"
          variant="overline"
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default SectionHeader;
