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
    id: 1,
    accountId: 443123,
    firstName: 'Ashley',
    lastName: 'Payne',
    ColorCode: 'yellow',
    PLRule: 'Quoted - LowInterest - Attempt2',
  },
  {
    id: 2,
    accountId: 1277773123,
    firstName: 'Tom',
    lastName: 'Payne',
    ColorCode: 'green',
    PLRule: 'Quoted - LowInterest - Attempt2',
  },
];

const agentPVList = () => {
  if (!prioritizedList) return [];
  return prioritizedList.map(listItem => ({
    id: listItem.id,
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
      id: 1,
      accountId: 1,
      firstName: 'Danish',
      lastName: 'Last Name',
      state: 'state 1',
      carriers: ' test plz ignore',
      type: 'test type 1',
    },
    {
      id: 2,
      accountId: 2,
      firstName: 'Aamir',
      lastName: 'Khan',
      state: 'state 2',
      carriers: ' test plz ignore',
      type: 'test type 2',
    },
    {
      id: 3,
      accountId: 3,
      firstName: 'Nouman',
      lastName: 'Ajmal',
      state: 'state 3',
      carriers: ' test plz ignore',
      type: 'test type 3',
    },
  ];
  return personalQueue.map(queue => ({
    id: queue.id,
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
    id: 1,
    header: 'Acct ID : 555555',
    secondaryRows: [
      'Name : Pilot Pete',
      'PV Rule : Quoted - LowInterest - Attempt2',
    ],
  },
  {
    id: 2,
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

const tabOptionsWithNoData = [
  {
    label: 'Agent PV',
    value: 'agentPV',
    listItems: [],
    zeroItemsMessage: 'Congrats, your PV is empty!',
    handleRefresh: () => {
      alert('Refreshing Prioritized List');
    },
  },
  {
    label: 'Personal Queue',
    value: 'personalQueue',
    listItems: null,
    noDataMessage: 'No data found',
  },
  {
    label: 'Account History',
    value: 'accountHistory',
    listItems: null,
    onListItemClick: handleAccountHistoryClick,
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorked',
    listItems: [],
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

export const CardListExampleWithNoData = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptionsWithNoData}
  />
);

export const CardListExampleWithoutHeader = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={[
      {
        label: '',
        value: '',
        listItems: getPersonalQueue(),
      },
    ]}
    shouldRenderHeader={false}
  />
);
