# Column List

-- Column List is a grid component with a header and rows. You can set the number of columns you want and as many rows as you want. The column sizing is dynamic on load with an even amount of width for each column. Each of the column headers includes sorting, filtering options, re-ordering, and resizing.

## Design Notes

--

## Technical Notes

Under the covers we are using the Ag-Grid community edition. This is a very powerful grid software with many features and functionality. We are currently pulling in and using just a portion of the possible features.

If you wan to show just one tab of information the additional header will not be shown and you will just get the card body with the column headers.

Sample minimum data sent to CardList

```
const openAccount = selectedValue => {
  // open the account selected
}

const accountHistory = [
  {status: "Valid", comment: "Not Action 'Invalid.  This was probably illegal", user: 'Alisha Pena', date: '04/09/2013 11:14 am', pvRule: 'N/A', userType: 'Incoming'},
      {status: "Invalid", comment: "Action 'Invalid.  This was probably illegal", user: 'Alisha Cox', date: '04/09/2014 11:14 am', pvRule: 'N/A', userType: 'Agent'}
];

const tabs = [
  {
    label: 'Account History',
    value: 'accountHistory',
    columns: [
      {headerName: "Status", field: "status"},
      {headerName: "Comment", field: "comment"},
      {headerName: "User", field: "user"},
      {headerName: "Date", field: "date"},
      {headerName: "PV Rule", field: "pvRule"},
      {headerName: "User Type", field: "userType"}
    ],
    rowData: accountHistory
    ];
  }
];

  < ColumnList
    onListItemClick={openAccount}
    selectedTab={tabs[0]}
  />

```
