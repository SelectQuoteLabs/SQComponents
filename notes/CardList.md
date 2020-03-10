# Card List

-- Card that renders an array of child components in a list format. Includes a header and collapsible functionality.

## Design Notes

-- By default the card will be expanded. If the desired behavior is to have it start minimized pass the prop `isInitiallyExpanded={false}`. Set `isExpandable` to false to remove the expand option and have the card always open

## Technical Notes

Sample:

```
<CardList
  width={{width: '45rem'}} //optional
  height={{height: '55rem'}} //optional
  onListItemClick={action(`Opening the acount`)}
  isInitiallyExpanded={boolean('isInitiallyExpanded', false)}
  isExpandable={boolean('isExpandable', true)}
  tabOptions={{
  label: 'Agent PV',
  value: 'agentPV',
  listItems: {
    header: 'Acct ID : 6666666',
    body: 'Name : Pete Monterroso',
    footer: 'PV Rule : TA Follow Up 2'
  }
  }}
/>

```
