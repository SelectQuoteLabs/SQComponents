import React from 'react';
import ExpandingCard from './ExpandingCard';

const PendingDeprecationWrapper = props => {
  console.warn(
    'WARNING - ExpandingCardWithTabs and TabbableCard will soon be deprecated. Please use ExpandingCard instead.'
  );

  return <ExpandingCard {...props} />;
};

export default PendingDeprecationWrapper;
