# Data Table

Data Table is a grid component with a header and rows. You can set the number of columns you want and as many rows as you want. The column sizing is dynamic on load with an even amount of width for each column. Each of the column headers includes sorting, filtering options, re-ordering, and resizing.

## Technical Notes

Under the covers we are using the Ag-Grid community edition for the table. This is a very powerful grid package with many features and functionality.

Additional documentation on how columns can be customized can be found [here](https://www.ag-grid.com/javascript-grid-column-definitions/).

## Consumer classes

If you would like to define a column as a number field and have the right alignment you can use the class `dataTable__number` in your column definition.

```css
.dataTable__number {
  text-align: right;
}
```

```javascript
const columns = [
  {
    headerName: 'Number right',
    field: 'number',
    cellClass: 'dataTable__number',
  },
];
```

To define a column as a hyperlink styled field you can use the class `dataTable__hyperlink` in your column definition.

```css
.dataTable__hyperlink {
  color: var(--color-teal);
  font-size: 12px;
  cursor: pointer;
}
```

```javascript
const columns = [
  {
    headerName: 'Status',
    field: 'status',
    onCellClicked: onCellClicked,
    cellClass: 'dataTable__hyperlink',
  },
];
```

## Column filters

Setting an initial column filter to be used on-load of the component can also be done. The status initial filter uses a user defined type of filter called valid. The other one uses the default type of contains to match the string filter value.

```javascript
const initialFilter = {
  status: {
    type: 'valid',
    values: ['InValid'],
  },
  user: {
    type: 'contains',
    filter: 'Alisha Pena',
  },
};
```

Adding custom filters

```javascript
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
    filterParams: {
      filterOptions: filterByAction,
      defaultOption: 'valid',
      suppressAndOrCondition: true,
    },
  },
];
```

[Ag-Grid filter API](https://www.ag-grid.com/javascript-grid-filter-api/)
