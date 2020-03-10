import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/CardList.md';
import CardList from '../src/components/CardList/CardList';
import ListItemText from '@material-ui/core/ListItemText';

export default {
  title: 'CardList',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const agentPVList = [
  {
    header: 'Acct ID : 3761140',
    body: 'Name : Ashley Payne',
    footer: 'PV Rule : Quoted - LowInterest - Attempt2',
  },
  {
    header: 'Acct ID : 446426',
    body: 'Name : Flor Monterroso',
    footer: 'PV Rule : TA Follow Up 2',
  },
  {
    header: 'Acct ID : 3761140',
    body: 'Name : Ashley Payne',
    footer: 'PV Rule : Quoted - LowInterest - Attempt2',
  },
  {
    header: 'Acct ID : 446426',
    body: 'Name : Flor Monterroso',
    footer: 'PV Rule : TA Follow Up 2',
  },
  {
    header: 'Acct ID : 3761140',
    body: 'Name : Ashley Payne',
    footer: 'PV Rule : Quoted - LowInterest - Attempt2',
  },
  {
    header: 'Acct ID : 446426',
    body: 'Name : Flor Monterroso',
    footer: 'PV Rule : TA Follow Up 2',
  },
];

const toDoSupportTicketsList = [
  {
    header: 'Acct ID : 111111',
    body: 'Name : Bob Payne',
    footer: 'PV Rule : Quoted - LowInterest - Attempt2',
  },
  {
    header: 'Acct ID : 222222',
    body: 'Name : Bob Monterroso',
    footer: 'PV Rule : TA Follow Up 2',
  },
];

const lastCasesWorkedList = [
  {
    header: 'Acct ID : 555555',
    body: 'Name : Pilot Pete',
    footer: 'PV Rule : Quoted - LowInterest - Attempt2',
  },
  {
    header: 'Acct ID : 6666666',
    body: 'Name : Pete Monterroso',
    footer: 'PV Rule : TA Follow Up 2',
  },
];

const accountHistory = [
  <ListItemText disableTypography={true}>
    {' '}
    'PV Rule : Quoted - LowInterest - Attempt2'
  </ListItemText>,
  <ListItemText disableTypography={true}>
    {' '}
    'Account History Quoted - LowInterest - Attempt3'
  </ListItemText>,
];

const TAB_OPTIONS = [
  {
    label: 'Agent PV',
    value: 'agentPV',
    listItems: agentPVList,
  },
  {
    label: 'To Do Support Tickets',
    value: 'toDoSupportTickets',
    listItems: toDoSupportTicketsList,
  },
  {
    label: 'Account History',
    value: 'accountHistory',
    listItems: accountHistory,
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorked',
    listItems: lastCasesWorkedList,
  },
];

export const CardListWithCustomStyle = () => (
  <CardList
    width={{width: '45rem'}}
    height={{height: '55rem'}}
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', true)}
    tabOptions={TAB_OPTIONS}
  />
);

export const CardListExampleWithoutStyle = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', true)}
    tabOptions={TAB_OPTIONS}
  />
);
