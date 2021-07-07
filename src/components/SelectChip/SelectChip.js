import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  selectChip: {
    margin: '0.75rem',
    padding: '0.75rem 1.25rem',
    cursor: 'pointer',
    border: '0.1667rem solid',
    width: ({staticWidth}) => staticWidth,
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
  staticWidth,
  onClick,
  optionIsSelected,
  tabIndex = 0,
}) {
  const classes = useStyles({isSelected: optionIsSelected, staticWidth});

  return (
    <Card tabIndex={tabIndex} onClick={onClick} className={classes.selectChip}>
      {children}
    </Card>
  );
}

SelectChip.propTypes = {
  /** The content of the component */
  children: PropTypes.node.isRequired,
  /** Defines a static width of the component */
  staticWidth: PropTypes.string,
  /** Click handler callback function */
  onClick: PropTypes.func.isRequired,
  /** This component becomes selected when you click on it */
  optionIsSelected: PropTypes.bool,
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex */
  tabIndex: PropTypes.number,
};

export default SelectChip;
