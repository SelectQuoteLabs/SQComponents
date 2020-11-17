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

## Cell Renderers

Ag-Grid has the concept of 'cell renderers' - functions that consume value of a cell and return an HTML string to allow consumers to do more than just render strings in cells. Normal cell renderers must return actual strings, such as

```javascript
return `<span>${value}</span>`;
```

The above is somewhat useful but not ideal for a React application. Thankfully, Ag-Grid exposes an avenue to use React components as cell renderers, allowing return of JSX instead of a string.

Here's an example React component to be used as a cell renderer - it takes in 'value' and 'onCellClick', renders value in a span of different colors depending on internal state. Upon click of spans, it invokes whatever you passed into it as 'onCellClick' and toggles the internal active state (changing color)

```javascript
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
```

For simplicity, lets make a function that throws an alert to be called on any cell click (this could be any function that a parent had that, for some reason, isn't easy to get access to inside of the cell renderer)

```javascript
const miscFunctionToInjectInCell = () => {
  alert('your cell just invoked a function injected from parent!');
};
```

Here's how you'd modify your column definition to utilize the cell renderer and force in the external function as a prop

```javascript
{
  headerName: 'Number right',
  field: 'number',
  cellClass: 'dataTable__number',
  cellRendererFramework: ExampleReactCellRenderer,
  cellRendererParams: {
    onCellClick: miscFunctionToInjectInCell,
  },
},
```

Warning: passing in values that regularly change inside the `cellRendererParams` can cause the entire table to rerender on every change, potentially mess up scaling, etc.

See `DataTable.stories.js` for the full code, or view the `Data Table With React Cell Renderer` example to see the code in action.
