import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/ColumnList.md';
import ColumnList from '../src/components/ColumnList/ColumnList';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardPopoverMenu from '../src/components/CardPopoverMenu/CardPopoverMenu';
import {accountHistoryLarge} from './utils/accountHistoryLarge';
import '../src/components/ColumnList/ColumnList.css';
import './ColumnListExample.css';

export default {
  title: 'ColumnList',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const agentPVList = [];

const toDoSupportTicketsList = [];

const lastCasesWorkedList = [];

const accountHistory = [
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'MAlisha Allen',
    date: '04/09/2015 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2016 11:14 am',
    pvRule: 'N/A',
    userType: 'Outbound',
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Phil Pena',
    date: '04/09/2017 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Phillips',
    date: '04/09/2018 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'MAlisha Ashely',
    date: '04/09/2011 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Pilot Pete',
    date: '04/09/2012 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Hannah Anne',
    date: '04/09/2009 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Emily Sax',
    date: '04/09/2013 10:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Joe Roberts',
    date: '04/09/2013 1:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2013 12:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
];
const title = 'Account Information';
const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: [
      {headerName: 'Status', field: 'status'},
      {headerName: 'Comment', field: 'comment'},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'PV Rule', field: 'pvRule'},
      {headerName: 'User Type', field: 'userType'},
    ],
    rowData: accountHistory,
  },
  {
    label: 'Agent PV',
    value: 'agentPVList',
    columns: [
      {headerName: 'Status', field: 'status'},
      {headerName: 'Comment', field: 'comment'},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'PV Rule', field: 'pvRule'},
      {headerName: 'User Type', field: 'userType'},
    ],
    rowData: agentPVList,
  },
  {
    label: 'To Do Support Tickets',
    value: 'toDoSupportTicketsList',
    columns: [
      {headerName: 'Status', field: 'status'},
      {headerName: 'Comment', field: 'comment'},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'PV Rule', field: 'pvRule'},
      {headerName: 'User Type', field: 'userType'},
    ],
    rowData: toDoSupportTicketsList,
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorkedList',
    columns: [
      {headerName: 'Status', field: 'status'},
      {headerName: 'Comment', field: 'comment'},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'PV Rule', field: 'pvRule'},
      {headerName: 'User Type', field: 'userType'},
    ],
    rowData: lastCasesWorkedList,
  },
];

const selectedTab = tabs[0];

export const ColumnListWithCard = () => (
  <Card style={{width: '65rem'}}>
    <CardHeader
      disableTypography={true}
      className="columnList__header"
      title={title}
      action={
        <div className="columnList__header1">
          <div className="columnList__cardPopOverMenu">
            <CardPopoverMenu
              tabs={tabs}
              selectedTab={selectedTab}
              selectTab={action(`Changing the tab`)}
              disabled={false}
            />
          </div>
          <IconButton
            onClick={action(`closing or opening`)}
            aria-expanded={true}
            aria-label="open"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
      }
    />
    <CardContent style={{height: '26rem', width: '65rem', padding: '0px'}}>
      <ColumnList
        onListItemClick={action(`Opening the acount`)}
        width={'65rem'}
        height={'26rem'}
        selectedTab={selectedTab}
      />
    </CardContent>
  </Card>
);

export const ColumnListMultipleSelection = () => (
  <ColumnList
    width={'55rem'}
    height={'40rem'}
    onListItemClick={action(`Opening the acount`)}
    selectedTab={selectedTab}
    rowSelection={'multiple'}
  />
);

const largetabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: [
      {headerName: 'Status', field: 'status'},
      {headerName: 'Comment', field: 'comment'},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'PV Rule', field: 'pvRule'},
      {headerName: 'User Type', field: 'userType'},
    ],
    rowData: accountHistoryLarge,
  },
];

export const LargeColumnListExample = () => (
  <ColumnList
    onListItemClick={action(`Opening the acount`)}
    selectedTab={largetabs[0]}
  />
);
