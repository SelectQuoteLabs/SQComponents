import React from 'react';
import PropTypes from 'prop-types';
import CardPopoverMenu from '../CardPopoverMenu';
import ExpandingCard from '../ExpandingCard';

import './ExpandingCardWithTabs.css';

function ExpandingCardWithTabs({name, title, children, tabs}) {
  const [selectedTabValue, setSelectedTabValue] = React.useState(tabs[0].value);

  const selectedTab = tabs.find(tab => tab.value === selectedTabValue);

  return (
    <ExpandingCard
      name={name}
      title={title}
      actions={
        <CardPopoverMenu
          tabs={tabs}
          selectedTab={selectedTab}
          selectTab={setSelectedTabValue}
          disabled={false}
        />
      }
    >
      {selectedTab.body}
    </ExpandingCard>
  );
}

ExpandingCardWithTabs.propTypes = {
  /** Unique name used as a key for managing expansion state within ExpandingCardList */
  name: PropTypes.string.isRequired,

  /** Title text */
  title: PropTypes.string,

  /** Is initially expanded. Used by ExpandingCardList */
  isInitiallyExpanded: PropTypes.bool,

  /** An array of tab objects */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      body: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

export default ExpandingCardWithTabs;
