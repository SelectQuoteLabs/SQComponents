import React from 'react';
import {ListItemText, Grid, makeStyles, Typography} from '@material-ui/core';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/CardList.md';
import CardList from '../src/components/CardList/CardList';
import GridSection from '../src/components/SelectChip/GridSection';

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
    ColorCode: 'Yellow',
    PLRule: 'Quoted - LowInterest - Attempt2',
  },
  {
    id: 2,
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
    onClick: action(`selected ${queue.accountId}`),
  }));
};

const notifications = [
  {
    id: 1,
    header: 'Enrollment Claimed',
    secondaryRows: [
      `Date/Time : ${Date.now()}`,
      'Info: Enrollment Claimed by Byan Busby',
      <ListItemText
        disableTypography={true}
        style={{color: 'var(--color-teal)', cursor: 'pointer'}}
      >
        Click to acknowledge
      </ListItemText>,
    ],
    onClick: selectedIDs => {
      window.alert(`Currently selected ids: ${selectedIDs.join(', ')}`);
    },
  },
  {
    id: 2,
    header: 'Manager Override',
    secondaryRows: [
      `Date/Time : ${Date.now()}`,
      'Info: Manager override requested on Acct: 123',
      <ListItemText
        disableTypography={true}
        style={{color: 'var(--color-teal)', cursor: 'pointer'}}
      >
        Click to override
      </ListItemText>,
    ],
    onClick: selectedIDs => {
      window.alert(`Currently selected ids: ${selectedIDs.join(', ')}`);
    },
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
    isSelectable: true,
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
    listItems: [],
    onListItemClick: handleLastCasesWorkedClick,
  },
];

const tabOptionsWithOneTab = [
  {
    label: 'Notifications',
    value: 'notifications',
    listItems: notifications,
    disabled: true,
    handleRefresh: () => {
      alert('Refreshing Notifications');
    },
    isSelectable: true,
    enableMultiselect: true,
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

export const Default = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptions}
  />
);

export const CardListWithCustomStyle = () => (
  <CardList
    contentHeight="500px"
    cardStyle={{minWidth: '400px'}}
    contentStyle={{backgroundColor: 'blue'}}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', true)}
    tabs={tabOptions}
  />
);

export const CardListExampleWithLoadingAndWidth = () => (
  <CardList
    contentHeight="450px"
    contentWidth="800px"
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptions.map(option => ({...option, isLoading: true}))}
  />
);

export const CardListExampleWithNoData = () => (
  <CardList
    contentHeight="100px"
    contentWidth="300px"
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptionsWithNoData}
  />
);

export const CardListExampleWithMultiselectableItems = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptionsWithOneTab}
    shouldRenderHeader={false}
  />
);

export const CardListExampleWithoutHeader = () => (
  <CardList
    contentHeight="400px"
    contentWidth="275px"
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

const CustomListItem = ({listItem}) => (
  <>
    <GridSection item header="Section 1" spacing={3}>
      <Grid item>
        <Typography variant="body2">ID: {listItem.id}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          Account ID: {listItem.accountId}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          First Name: {listItem.firstName}
        </Typography>
      </Grid>
    </GridSection>
    <GridSection item header="Section 2" spacing={3}>
      <Grid item>
        <Typography variant="body2">Last Name: {listItem.lastName}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">PL Rule: {listItem.PLRule}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          Color Code: {listItem.ColorCode}
        </Typography>
      </Grid>
    </GridSection>
  </>
);

const multiselectableCustomListItems = () =>
  prioritizedList.map((listItem, index) => (
    <CustomListItem
      listItem={listItem}
      key={index + 1}
      id={index + 1}
      header={`Custom Header ${index + 1}`}
      onClick={currentlySelectedListItems => {
        const log = `List item ${index +
          1} was clicked. The currently selected list items are: ${currentlySelectedListItems.join?.(
          ', '
        )}.`;

        console.log(log, {currentlySelectedListItems});
        window.alert(log);
      }}
    />
  ));

const tabsWithMultiselectableCustomListItems = [
  {
    label: 'Agent PV',
    value: 'agentPV',
    listItems: multiselectableCustomListItems(),
    isSelectable: true,
    enableMultiselect: true,
  },
];

const useStyles = makeStyles({
  contentOverrides: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto hidden',
    maxWidth: '350px',
  },
  listItemOverrides: {
    minWidth: '250px',
    overflow: 'hidden auto',
  },
});

export const CardListWithMutliselectableCustomListItems = () => {
  const classes = useStyles();
  return (
    <CardList
      contentHeight="375px"
      isInitiallyExpanded={boolean('isInitiallyExpanded', true)}
      isExpandable={boolean('isExpandable', true)}
      tabs={tabsWithMultiselectableCustomListItems}
      cardContentClass={classes.contentOverrides}
      shouldRenderHeader={false}
      listItemClass={classes.listItemOverrides}
    />
  );
};
