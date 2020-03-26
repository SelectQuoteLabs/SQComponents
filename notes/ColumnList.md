# Column List

-- Column List is a grid component with a header and rows. You can set the number of columns you want and as many rows as you want. The column sizing is dynamic on load with an even amount of width for each column. Each of the column headers includes sorting, filtering options, re-ordering, and resizing.

## Design Notes

-- The features of this component are functionally correct and the UI will be enhanced in the future.

## Technical Notes

This component uses the Material UI card component for the optional header and card body. Under the covers we are using the Ag-Grid community edition for the card body. This is a very powerful grid package with many features and functionality.

If you want to show just one tab of information the additional header will not be shown and you will just get the card body with the column headers.

Additional documentation on how columns can be customized can be found https://www.ag-grid.com/javascript-grid-column-definitions/ .

## Consumer classes

If you would like to define a column as a number field and have the right alignment you can use the class columnList\_\_number in your column definition.

```
  .columnList__number {
    text-align: right;
  }
```

```
  const columns = [
    {
      headerName: 'Number right',
      field: 'number',
      cellClass: 'columnList__number',
    }
  ]
```

To define a column as a hyperlink styled field you can use the class columnList\_\_hyperlink in your column definition.

```
  .columnList__hyperlink {
    color: var(--color-teal);
    font-size: 12px;
    cursor: pointer;
  }
```

```
  const columns = [
    {
      headerName: 'Status',
      field: 'status',
      onCellClicked: onCellClicked,
      cellClass: 'columnList__hyperlink',
    }
  ]
```

## Column filters

Setting an initial column filter to be used on-load of the component can also be done. The status initial filter uses a user defined type of filter called valid. The other one uses the default type of contains to match the string filter value.

```
const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: columns,
    rowData: accountHistoryRows,
    initialFilter: {
      status: {
        type: 'valid',
        values: ['InValid'],
      },
      user: {
        type: 'contains',
        filter: 'Alisha Pena',
      }
    },
  },
```

Adding custom filters

```
const filterByAction = [
  {
    displayKey: 'filterBy',
    displayName: 'Filter by… (All)',
    test: function (filterValue, cellValue) {
      return cellValue != null;
    },
    hideFilterInput: true,
  },
  {
    displayKey: 'valid',
    displayName: 'Valid',
    test: function (filterValue, cellValue) {
      return cellValue != null && cellValue === 'valid';
    },
    hideFilterInput: true,
  },
];
const columns = [
  {
    headerName: 'Status',
    field: 'status',
    filterParams: {
      filterOptions: filterByAction,
      defaultOption: 'valid',
      suppressAndOrCondition: true,
    },
  },
];
```

[Ag-Grid filter API](https://www.ag-grid.com/javascript-grid-filter-api/)

### Sample

```
const onCellClicked = params => {
  const gridApi = params.api;
  var selectedRows = gridApi.getSelectedRows();
  if (selectedRows.length) {
    gridApi.deselectAll(); //deselect all rows
    //do something custom
    alert(`Opening the acount: \n ${JSON.stringify(selectedRows[0])}`);
  }
};

const accountHistory = [
  {status: "Valid", comment: "Not Action 'Invalid.  This was probably illegal", user: 'Alisha Pena', date: '04/09/2013 11:14 am', pvRule: 'N/A', number: 97979},
  {status: "Invalid", comment: "Action 'Invalid.  This was probably illegal", user: 'Alisha Cox', date: '04/09/2014 11:14 am', pvRule: 'N/A', number: 8751009}
];

const columns = ;

const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: [
      {
        headerName: 'Status',
        field: 'status',
        onCellClicked: onCellClicked,
        cellClass: 'columnList__hyperlink',
      },
      {headerName: 'Comment', field: 'comment', width: 400},
      {headerName: 'User', field: 'user'},
      {headerName: 'Date', field: 'date', type: ['dateColumn']},
      {headerName: 'PV Rule', field: 'pvRule'},
      {
        headerName: 'Number right',
        field: 'number',
        cellClass: 'columnList__number',
      },
    ]
    rowData: accountHistory
    ];
  }
];

  < ColumnList
    width={'65rem'}
    height={'26rem'}
    tabs={tabs}
    title={'Account Information'}
  />

```
