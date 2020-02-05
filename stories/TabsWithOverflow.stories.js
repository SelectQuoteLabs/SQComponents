import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/Tabs Menu with Kebab.md';

import TabsWithOverflow from '../src/components/TabsWithOverflow/TabsWithOverflow';

const TAB_OPTIONS = [
  {
    label: 'Agent PV',
    value: 'agentPV',
  },
  {
    label: 'To Do Support Tickets',
    value: 'toDoSupportTickets',
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

let selectedTab = TAB_OPTIONS[0];

const selectTab = selection => {
  selectedTab = TAB_OPTIONS.find(tab => tab.value === selection);
  action(`Menu option changed to ${selectTab}`);
};

export default {
  title: 'Tabs Menu With Kebab',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const menuButton = () => (
  <TabsWithOverflow
    tabs={TAB_OPTIONS}
    selectedTab={selectedTab}
    selectTab={selectTab}
    disabled={boolean('disabled', false)}
  />
);
