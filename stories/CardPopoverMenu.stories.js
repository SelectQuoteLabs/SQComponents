import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/CardPopoverMenu.md';

import CardPopoverMenu from '../src/components/TabsWithOverflow/CardPopoverMenu';

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

export default {
  title: 'CardPopoverMenu',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const menuWithKebab = () => (
  <CardPopoverMenu
    tabs={TAB_OPTIONS}
    selectedTab={selectedTab}
    selectTab={action(`Menu option changed to: `)}
    disabled={boolean('disabled', false)}
  />
);
