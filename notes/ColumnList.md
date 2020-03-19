# Column List

-- Column List is a grid component with a header and rows. You can set the number of columns you want and as many rows as you want. The column sizing is dynamic on load with an even amount of width for each column. Each of the column headers includes sorting, filtering options, re-ordering, and resizing.

## Design Notes

-- The features of this component are functionally correct and the UI will be enhanced in the future.

## Technical Notes

This component uses the Material UI card component for the optional header and card body. Under the covers we are using the Ag-Grid community edition for the card body. This is a very powerful grid package with many features and functionality.

If you want to show just one tab of information the additional header will not be shown and you will just get the card body with the column headers.

Additional documentation on how columns can be customized can be found https://www.ag-grid.com/javascript-grid-column-definitions/ .

## Consumer classes
If you would like to define a column as a number field and have the right alignment you can use the class columnList__number in your column definition.

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
  If you would like to define a column as a hyperlink field and have the you can use the class columnList__hyperlink in your column definition.

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