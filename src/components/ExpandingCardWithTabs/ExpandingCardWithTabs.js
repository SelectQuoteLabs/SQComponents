import React from 'react';
import PropTypes from 'prop-types';
import CardPopoverMenu from '../CardPopoverMenu';
import ExpandingCard from '../ExpandingCard';

function ExpandingCardWithTabs({name, title, subheader, tabs, children}) {
  const [selectedTabValue, setSelectedTabValue] = React.useState(tabs[0].value);

  const selectedTab = tabs.find(tab => tab.value === selectedTabValue);

  return (
    <ExpandingCard
      name={name}
      title={title}
      subheader={subheader}
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

  /** Sub header */
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

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
