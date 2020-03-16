# Column List

-- Column List is a grid component with a header and rows. You can set the number of columns you want and as many rows as you want. The column sizing is dynamic on load with an even amount of width for each column. Each of the column headers includes sorting, filtering options, re-ordering, and resizing.

## Design Notes

--

## Technical Notes

This component uses the Material UI card component for the optional header and card body.  Under the covers we are using the Ag-Grid community edition for the card body. This is a very powerful grid package with many features and functionality. 

If you want to show just one tab of information the additional header will not be shown and you will just get the card body with the column headers.

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

const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: [
      {headerName: 'Status', field: 'status', onCellClicked: onCellClicked, cellClass: 'columnList__hyperlink'},
      {headerName: "Comment", field: "comment"},
      {headerName: "User", field: "user"},
      {headerName: "Date", field: "date"},
      {headerName: "PV Rule", field: "pvRule"},
      {headerName: 'Number right', field: 'number', cellClass: 'columnList__number'},
    ],
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
