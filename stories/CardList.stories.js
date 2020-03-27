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
    secondaryRows: [
      'Name : Ashley Payne has a really long name',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
    color: 'Purple',
  },
  {
    header: 'Acct ID : 446426',
    secondaryRows: ['Name : Flor Monterroso', 'PV Rule : TA Follow Up 2'],
    color: 'Green',
  },
  {
    header: 'Acct ID : 3761140',
    secondaryRows: [
      'Name : Ashley Payne',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
    color: 'Orange',
  },
  {
    header: 'Acct ID : 446426',
    secondaryRows: ['Name : Flor Monterroso', 'PV Rule : TA Follow Up 2'],
  },
  {
    header: 'Acct ID : 3761140',
    secondaryRows: [
      'Name : Ashley Payne',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
  },
  {
    header: 'Acct ID : 446426',
    secondaryRows: ['Name : Flor Monterroso', 'PV Rule : TA Follow Up 2'],
    color: 'Pink',
  },
  {
    header: 'Acct ID : 111111',
    secondaryRows: [
      'Name : Bob Payne',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
    color: 'Red',
  },
  {
    header: 'Acct ID : 222222',
    secondaryRows: ['Name : Bob Monterroso', 'PV Rule : TA Follow Up 2'],
    color: 'Yellow',
  },
];

const getPersonalQueue = () => {
  const personalQueue = [
    {
      accountId: 1,
      firstName: 'Danish',
      lastName: 'Last Name',
      state: 'state 1',
      carriers: ' test plz ignore',
      type: 'test type 1',
    },
    {
      accountId: 2,
      firstName: 'Aamir',
      lastName: 'Khan',
      state: 'state 2',
      carriers: ' test plz ignore',
      type: 'test type 2',
    },
    {
      accountId: 3,
      firstName: 'Nouman',
      lastName: 'Ajmal',
      state: 'state 3',
      carriers: ' test plz ignore',
      type: 'test type 3',
    },
  ];
  return personalQueue.map(queue => ({
    header: `Acct ID : ${queue.accountId}`,
    secondaryRows: [
      `Name : ${queue.firstName} ${queue.lastName}`,
      `State : ${queue.state}`,
      `Carriers : ${queue.carriers}`,
      `Type : ${queue.type}`,
    ],
  }));
};

const lastCasesWorkedList = [
  {
    header: 'Acct ID : 555555',
    secondaryRows: [
      'Name : Pilot Pete',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
  },
  {
    header: 'Acct ID : 6666666',
    secondaryRows: ['Name : Pete Monterroso', 'PV Rule : TA Follow Up 2'],
  },
];

const accountHistory = [
  <ListItemText disableTypography={true}>
    'PV Rule : Quoted - LowInterest - Attempt2'
  </ListItemText>,
  <ListItemText disableTypography={true}>
    'Account History Quoted - LowInterest - Attempt3'
  </ListItemText>,
];

const tabOptions = [
  {
    label: 'Agent PV',
    value: 'agentPV',
    listItems: agentPVList,
  },
  {
    label: 'Personal Queue',
    value: 'personalQueue',
    listItems: getPersonalQueue(),
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
    tabs={tabOptions}
  />
);

export const CardListExampleWithoutStyle = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptions}
  />
);
