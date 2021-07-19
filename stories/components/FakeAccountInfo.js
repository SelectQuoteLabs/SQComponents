import React from 'react';
import {ExpandingCard, DataTable} from '../../src';
import {accountHistoryLarge} from '../utils/accountHistoryLarge';

export default function FakeAccountsInfo() {
  return <ExpandingCard title="Account Information" tabs={accountTabs} />;
}

// implementation details below are copypasta from ExpandingCardList.stories.js
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
    cellClass: 'dataTable__hyperlink',
    filterParams: {
      filterOptions: filterByAction,
      defaultOption: 'filterBy',
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
    cellClass: 'dataTable__number',
  },
];

const accountTabs = [
  {
    label: 'Account History',
    value: 'account-history',
    body: <DataTable columns={columns} rowData={accountHistoryLarge} />,
  },
  {
    label: 'Agent PV',
    value: 'agent-pv-list',
    body: <DataTable columns={columns} rowData={[]} />,
  },
];
