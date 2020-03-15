import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/ColumnList.md';
import ColumnList from '../src/components/ColumnList/ColumnList';
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

const agentPVList = [
  {
    status: 'PV list status',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'PV list status',
    comment: "Action 'Invalid.",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
];

const toDoSupportTicketsList = [
  {
    status: 'To do support ticket item',
    comment: "Not Action 'Invalid.",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'To do support ticket item',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
];

const lastCasesWorkedList = [
  {
    status: 'last case worked',
    comment: "Not Action 'Invalid.",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    userType: 'Incoming',
  },
  {
    status: 'last case worked',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    userType: 'Agent',
  },
];

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

export const ColumnListWithCard = () => (
  <ColumnList
    onListItemClick={action(`Opening the acount`)}
    width={'65rem'}
    height={'26rem'}
    tabs={tabs}
    title={'Account Information'}
  />
);

export const ColumnListMultipleSelection = () => (
  <ColumnList
    width={'55rem'}
    height={'40rem'}
    onListItemClick={action(`Opening the acount`)}
    tabs={tabs}
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
    tabs={largetabs}
    title={'Account Information'}
  />
);
