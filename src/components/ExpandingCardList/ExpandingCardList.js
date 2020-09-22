import React from 'react';
import PropTypes from 'prop-types';

import './ExpandingCardList.css';

export const ExpandingCardListContext = React.createContext();

function init(children) {
  return children.reduce((acc, child) => {
    acc[child.props.name] = child.props.isInitiallyExpanded ?? true;
    return acc;
  }, {});
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_EXPANDED_STATE':
      return {
        ...state,
        [action.name]: action.isExpanded,
      };
    default:
      throw new Error('Invalid ExpandingCardList action.');
  }
}

function getExpandedCount(state) {
  return Object.values(state).reduce((acc, value) => {
    if (value) acc++;
    return acc;
  }, 0);
}

function ExpandingCardList({children}) {
  const [state, dispatch] = React.useReducer(reducer, children, init);

  const getIsCardExpanded = React.useCallback(
    name => {
      return state[name];
    },
    [state]
  );

  const setIsCardExpanded = React.useCallback(
    (name, isExpanded) => {
      dispatch({
        type: 'SET_EXPANDED_STATE',
        name,
        isExpanded,
      });
    },
    [dispatch]
  );

  const isCollapseAllowed = getExpandedCount(state) > 1;

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
