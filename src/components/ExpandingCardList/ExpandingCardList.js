import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  expandingCardList: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '1rem',
    width: '100%',
  },
}));

function ExpandingCardList({children}) {
  const classes = useStyles();

  return <div className={classes.expandingCardList}>{children}</div>;
}

ExpandingCardList.propTypes = {
  /** Components based on ExpandingCard */
  children: PropTypes.node.isRequired,
};

export default ExpandingCardList;
