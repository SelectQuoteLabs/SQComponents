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

const prioritizedList = [
  {
    accountId: 443123,
    firstName: 'Ashley',
    lastName: 'Payne',
    ColorCode: 'Yellow',
    PLRule: 'Quoted - LowInterest - Attempt2',
  },
  {
    accountId: 1277773123,
    firstName: 'Tom',
    lastName: 'Payne',
    ColorCode: 'Green',
    PLRule: 'Quoted - LowInterest - Attempt2',
  },
];

const agentPVList = () => {
  if (!prioritizedList) return [];
  return prioritizedList.map(listItem => ({
    header: `Acct ID : ${listItem.accountId}`,
    secondaryRows: [
      `Name : ${listItem.firstName} ${listItem.lastName}`,
      `PV Rule : ${listItem.PLRule}`,
    ],
    color: listItem.ColorCode,
    onClick: () => {
      alert(`Account ${listItem.accountId}`);
    },
  }));
};

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

const handleAccountHistoryClick = listItem => {
  alert(
    // Checked permissions
    `Opening ${listItem.props.children}`
  );
};

const handleLastCasesWorkedClick = listItem => {
  alert(
    //Check permissions
    `Last Cases ${listItem.header}`
  );
};

const tabOptions = [
  {
    label: 'Agent PV',
    value: 'agentPV',
    listItems: agentPVList(),
    handleRefresh: () => {
      alert('Refreshing Prioritized List');
    },
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
    onListItemClick: handleAccountHistoryClick,
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorked',
    listItems: lastCasesWorkedList,
    onListItemClick: handleLastCasesWorkedClick,
  },
];

export const CardListWithCustomStyle = () => (
  <CardList
    width={{width: '45rem'}}
    height={{height: '55rem'}}
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

export const CardListExampleWithLoading = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptions.map(option => ({...option, isLoading: true}))}
  />
);
