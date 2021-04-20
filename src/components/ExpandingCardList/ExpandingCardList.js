import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    expandingCardList: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: '1rem',
      width: '100%',
    },
  };
});

export const ExpandingCardListContext = React.createContext();

function getExpandedCount(state) {
  return Object.values(state).reduce((acc, value) => {
    if (value) acc++;
    return acc;
  }, 0);
}

function getIsCollapseAllowed(cardsObj) {
  const cardsArr = Object.values(cardsObj);
  if (cardsArr.length > 1) {
    return getExpandedCount(cardsObj) > 1;
  }
  if (cardsArr.length === 1) {
    return true;
  }
  return false;
}

function ensureIsArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function ExpandingCardList({children}) {
  const classes = useStyles();
  const [
    cardExpansionStatesByName,
    setCardExpansionStatesByName,
  ] = React.useState(
    ensureIsArray(children).reduce((acc, child) => {
      acc[child.props.name] = child.props.isInitiallyExpanded ?? true;
      return acc;
    }, {})
  );

  const setIsCardExpanded = React.useCallback(
    (name, isExpanded) => {
      setCardExpansionStatesByName({
        ...cardExpansionStatesByName,
        [name]: isExpanded,
      });
    },
    [cardExpansionStatesByName, setCardExpansionStatesByName]
  );

  const getIsCardExpanded = React.useCallback(
    name => {
      return cardExpansionStatesByName[name];
    },
    [cardExpansionStatesByName]
  );

  const isCollapseAllowed = getIsCollapseAllowed(cardExpansionStatesByName);

  const api = {
    isCollapseAllowed,
    getIsCardExpanded,
    setIsCardExpanded,
  };

  return (
    <ExpandingCardListContext.Provider value={api}>
      <div className={classes.expandingCardList}>{children}</div>
    </ExpandingCardListContext.Provider>
  );
}

ExpandingCardList.propTypes = {
  /** Components based on ExpandingCard */
  children: PropTypes.node.isRequired,
};

export default ExpandingCardList;
