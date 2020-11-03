import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/CardPopoverMenu.md';

import {CardPopoverMenu} from '../src';

const TAB_OPTIONS = [
  {
    label: 'Agent PV',
    value: 'agentPV',
  },
  {
    label: 'To Do Support Tickets',
    value: 'toDoSupportTickets',
    disabled: true,
  },
  {
    label: 'Follow Up Support Tickets',
    value: 'followUpSupportTickets',
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorked',
  },
];

function MenuWithKebabExample() {
  const [selectedTab, setSelectedTab] = React.useState(TAB_OPTIONS[0]);

  const handleChange = selectedTabValue => {
    setSelectedTab(TAB_OPTIONS.find(tab => tab.value === selectedTabValue));
  };
  return (
    <CardPopoverMenu
      tabs={TAB_OPTIONS}
      selectedTab={selectedTab}
      selectTab={handleChange}
      disabled={boolean('disabled', false)}
    />
  );
}

export default {
  title: 'CardPopoverMenu',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const menuWithKebab = () => <MenuWithKebabExample />;
