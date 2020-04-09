# Card List

-- Card that renders a list of Select Chip components. Each Select Chip can accept any of the three `header`, `secondaryRows`, and `color` values in the list item. You can also pass a custom component to be rendered in the Select Chip instead of the 3 values outlined above

## Design Notes

-- By default the card will be expanded. If the desired behavior is to have it start minimized pass the prop `isInitiallyExpanded={false}`. The `isExpandable` prop is set to true to have the card content expanded by default. This is overridable by setting `isExpandable={false}`.

## Technical Notes

The onListItemClick callback will return the whole listItem you passed to the component. This needs to be passed in each tab. You can then use the listItem.header or listItem objects directly.

Sample with custom width and height:

```
<CardList
  width={{width: '45rem'}} //optional
  height={{height: '55rem'}} //optional
  onListItemClick={action(`Opening the acount`)}
  isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
  isExpandable={boolean('isExpandable', true)}
  tabs={[{
  label: 'Agent PV',
  value: 'agentPV',
  onListItemClick: handlePVClick
  listItems: {
    header: 'Acct ID : 6666666',
     secondaryRows: ['Name : Pete Monterroso',
    'PV Rule : TA Follow Up 2']
  },
    label: 'Last Cases Worked',
    value: 'lastCasesWorked',
    listItems: {
      header: 'Acct ID : 123123',
       secondaryRows: ['Name : Pete Pilot',
      'PV Rule : QA Follow Up 2'],
      color: 'Yellow'
  }
  }]}
/>
```

Sample with custom tabs component:

```
tabs=[
  <ListItemText>
    'PV Rule : Quoted - LowInterest - Attempt2'
  </ListItemText>,
  <ListItemText>
    'Account History Quoted - LowInterest - Attempt3'
  </ListItemText>
  ]

export const CardListExampleWithoutStyle = () => (
  <CardList
    onListItemClick={action(`Opening the acount`)}
    isInitiallyExpanded={boolean('isInitiallyExpanded', true)}
    isExpandable={boolean('isExpandable', false)}
    tabs={tabOptions}
  />
```
