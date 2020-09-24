import React from 'react';
import PropTypes from 'prop-types';

import './ExpandingCardList.css';

export const ExpandingCardListContext = React.createContext();

function getExpandedCount(state) {
  return Object.values(state).reduce((acc, value) => {
    if (value) acc++;
    return acc;
  }, 0);
}

function ExpandingCardList({children}) {
  const [
    cardExpansionStatesByName,
    setCardExpansionStatesByName,
  ] = React.useState(
    children.reduce((acc, child) => {
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

  const isCollapseAllowed = getExpandedCount(cardExpansionStatesByName) > 1;

  const api = {
    isCollapseAllowed,
    getIsCardExpanded,
    setIsCardExpanded,
  };

  return (
    <ExpandingCardListContext.Provider value={api}>
      <div className="expandingCardList">{children}</div>
    </ExpandingCardListContext.Provider>
  );
}

ExpandingCardList.propTypes = {
  /** Components based on ExpandingCard */
  children: PropTypes.node.isRequired,
};

export default ExpandingCardList;
