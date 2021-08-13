import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Typography, Paper, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  selectChip: {
    margin: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    border: '2px solid',
    width: ({staticWidth}) => (staticWidth ? staticWidth : '100%'),
    borderColor: ({isSelected}) =>
      isSelected ? 'var(--color-spanishOrange)' : 'transparent',
    transition: 'border-color 0.5s ease',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      borderColor: ({isSelected}) =>
        isSelected
          ? 'var(--color-spanishOrange)'
          : 'var(--color-button-cerulean-hover)',
    },
  },
}));

function SelectChip({
  children,
  header,
  staticWidth,
  onClick,
  optionIsSelected,
  tabIndex = 0,
  className,
  direction = 'column',
}) {
  const classes = useStyles({isSelected: optionIsSelected, staticWidth});

  return (
    <div className={classes.container}>
      {header && (
        <Typography variant="h6" className={classes.header}>
          {header}
        </Typography>
      )}
      <Paper
        tabIndex={tabIndex}
        onClick={onClick}
        className={classnames(classes.selectChip, className)}
      >
        <Grid container direction={direction} wrap="nowrap">
          {children}
        </Grid>
      </Paper>
    </div>
  );
}

SelectChip.propTypes = {
  /** The content of the component */
  children: PropTypes.node.isRequired,
  /** Header text */
  header: PropTypes.string,
  /** Defines a static width of the component */
  staticWidth: PropTypes.string,
  /** Click handler callback function */
  onClick: PropTypes.func.isRequired,
  /** This component becomes selected when you click on it */
  optionIsSelected: PropTypes.bool,
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex */
  tabIndex: PropTypes.number,
  /** CSS class */
  className: PropTypes.string,
  /** Flex direction - works the same as MUI Grid direction prop. */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
};

export default SelectChip;
