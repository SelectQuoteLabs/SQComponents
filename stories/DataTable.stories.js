import React from 'react';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/DataTable.md';
import {DataTable} from '../src';
import {accountHistoryLarge} from './utils/accountHistoryLarge';

export default {
  title: 'DataTable',
  decorators: [withInfo],
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

export const dataTable = () => (
  <div style={{height: '30rem', width: '55rem'}}>
    <DataTable columns={columns} rowData={accountHistoryLarge} />
  </div>
);

const initialFilter = {
  status: {
    type: 'valid',
  },
  user: {
    type: 'contains',
    filter: 'Alisha Pena',
  },
};

export const dataTableWithInitialFilter = () => (
  <div style={{height: '30rem', width: '55rem'}}>
    <DataTable
      columns={columns}
      rowData={accountHistoryLarge}
      initialFilter={initialFilter}
    />
  </div>
);

export const dataTableWithZeroItems = () => (
  <div style={{height: '30rem', width: '55rem'}}>
    <DataTable
      columns={columns}
      rowData={[]}
      zeroItemsMessage="Custom Zero Items Message"
    />
  </div>
);

const ExampleReactCellRenderer = ({value, onCellClick}) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onCellClick();
  };

  if (isActive)
    return (
      <span onClick={handleClick} style={{color: 'green'}}>
        {value}
      </span>
    );
  return (
    <span onClick={handleClick} style={{color: 'red'}}>
      {value}
    </span>
  );
};

export const dataTableWithReactCellRenderer = () => {
  const miscFunctionToInjectInCell = () => {
    alert('your cell just invoked a function injected from parent!');
  };

  const columnsWithCellRenderer = [
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
      cellRendererFramework: ExampleReactCellRenderer,
      cellRendererParams: {
        onCellClick: miscFunctionToInjectInCell,
      },
    },
  ];

  return (
    <div style={{height: '30rem', width: '55rem'}}>
      <DataTable
        columns={columnsWithCellRenderer}
        rowData={accountHistoryLarge}
      />
    </div>
  );
};
