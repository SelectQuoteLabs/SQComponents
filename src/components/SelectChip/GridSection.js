import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Grid, makeStyles} from '@material-ui/core';
import SectionHeader from '../SectionHeader';

const useStyles = makeStyles(() => ({
  containerOverrides: {
    padding: '0px !important',
  },
  header: {
    borderBottom: '1px solid var(--color-lightGray)',
  },
  childrenContainerOverrides: {
    paddingLeft: '12px !important',
    paddingRight: '12px !important',
  },
}));

function GridSection({
  item = false,
  spacing,
  header,
  children,
  className,
  childrenContainerClassName,
}) {
  const classes = useStyles();

  return (
    <Grid
      item={item}
      container
      direction="column"
      className={classnames(classes.containerOverrides, className)}
    >
      <SectionHeader title={header} />
      <Grid
        item
        container
        direction="column"
        spacing={spacing}
        className={classnames(
          classes.childrenContainerOverrides,
          childrenContainerClassName
        )}
      >
        {children}
      </Grid>
    </Grid>
  );
}

GridSection.propTypes = {
  /** MUI Grid item prop - if in a grid this should be true */
  item: PropTypes.bool,
  /** MUI Grid spacing props - defined space between items */
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /** Header Text */
  header: PropTypes.string.isRequired,
  /** The content of the component */
  children: PropTypes.node.isRequired,
  /** CSS class */
  className: PropTypes.string,
  /** CSS class applied to children container */
  childrenContainerClassName: PropTypes.string,
};

export default GridSection;
