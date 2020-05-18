import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/ColumnList.md';
import {ColumnList} from '../src';
import {accountHistoryLarge} from './utils/accountHistoryLarge';

export default {
  title: 'ColumnList',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const onCellClicked = params => {
  const gridApi = params.api;
  const selectedRows = gridApi.getSelectedRows();
  if (selectedRows.length) {
    gridApi.deselectAll();
    //do something custom
    alert(`Opening the account: \n ${JSON.stringify(selectedRows[0])}`);
  }
};

const filterByAction = [
  {
    displayKey: 'filterBy',
    displayName: 'Filter by… (All)',
    test: function(filterValue, cellValue) {
      return cellValue != null;
    },
    hideFilterInput: true,
  },
  {
    displayKey: 'valid',
    displayName: 'Valid',
    test: function(filterValue, cellValue) {
      return cellValue != null && cellValue === 'valid';
    },
    hideFilterInput: true,
  },
];

const columns = [
  {
    headerName: 'Status',
    field: 'status',
    onCellClicked: onCellClicked,
    cellClass: 'columnList__hyperlink',
    filterParams: {
      filterOptions: filterByAction,
      defaultOption: 'valid',
      suppressAndOrCondition: true,
    },
  },
  {headerName: 'Comment', field: 'comment', width: 400},
  {headerName: 'User', field: 'user'},
  {headerName: 'Date', field: 'date'},
  {headerName: 'PV Rule', field: 'pvRule'},
  {
    headerName: 'Number right',
    field: 'number',
    cellClass: 'columnList__number',
  },
];

const agentPVListRows = [];

const toDoSupportTicketsListRows = [
  {
    status: 'To do support ticket item',
    comment: "Not Action 'Invalid.",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    number: 7567575,
  },
  {
    status: 'To do support ticket item',
    comment: "Not Action 'Invalid.",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    number: 7567575,
  },
  {
    status: 'To do support ticket item',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    number: 5674345,
  },
];

const lastCasesWorkedListRows = [
  {
    status: 'last case worked',
    comment: "Not Action 'Invalid.",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    number: 3536436,
  },
  {
    status: 'last case worked',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    number: '53453674',
  },
];

const accountHistoryRows = [
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2013 11:14 am',
    pvRule: 'N/A',
    number: 5448,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Cox',
    date: '04/09/2014 11:14 am',
    pvRule: 'N/A',
    number: 345889,
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'MAlisha Allen',
    date: '04/09/2015 11:14 am',
    pvRule: 'N/A',
    number: 337,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2016 11:14 am',
    pvRule: 'N/A',
    number: 34567889,
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Phil Pena',
    date: '04/09/2017 11:14 am',
    pvRule: 'N/A',
    number: 4588,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Phillips',
    date: '04/09/2018 11:14 am',
    pvRule: 'N/A',
    number: 546589,
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'MAlisha Ashely',
    date: '04/09/2011 11:14 am',
    pvRule: 'N/A',
    number: 5688,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Pilot Pete',
    date: '04/09/2012 11:14 am',
    pvRule: 'N/A',
    number: 8462,
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Hannah Anne',
    date: '04/09/2009 11:14 am',
    pvRule: 'N/A',
    number: 96854,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Emily Sax',
    date: '04/09/2013 10:14 am',
    pvRule: 'N/A',
    number: 45635489,
  },
  {
    status: 'Valid',
    comment: "Not Action 'Invalid.  This was probably illegal",
    user: 'Joe Roberts',
    date: '04/09/2013 1:14 am',
    pvRule: 'N/A',
    number: 4578234,
  },
  {
    status: 'Invalid',
    comment: "Action 'Invalid.  This was probably illegal",
    user: 'Alisha Pena',
    date: '04/09/2013 12:14 am',
    pvRule: 'N/A',
    number: 683234,
  },
];
const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: columns,
    rowData: accountHistoryRows,
    initialFilter: {
      status: {
        type: 'valid',
      },
      user: {
        type: 'contains',
        filter: 'Alisha Pena',
      },
    },
  },
  {
    label: 'Agent PV',
    value: 'agentPVList',
    columns: columns,
    rowData: agentPVListRows,
  },
  {
    label: 'To Do Support Tickets',
    value: 'toDoSupportTicketsList',
    columns: columns,
    rowData: toDoSupportTicketsListRows,
  },
  {
    label: 'Last Cases Worked',
    value: 'lastCasesWorkedList',
    columns: columns,
    rowData: lastCasesWorkedListRows,
  },
];

export const ColumnListWithCardHeader = () => (
  <div style={{height: '30rem', width: '55rem'}}>
    <h1 style={{textAlign: 'center'}}>
      Initial filters set, custom filters, and a Header
    </h1>
    <ColumnList
      tabs={tabs}
      title="Account Information"
      zeroItemsMessage={text('zero items message', '')}
    />
  </div>
);

const largetabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: columns,
    rowData: accountHistoryLarge,
  },
];

export const LargeListWithoutCardHeader = () => (
  <div style={{height: '30rem', width: '85rem'}}>
    <ColumnList tabs={largetabs} />
  </div>
);
