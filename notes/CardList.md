# Card List

-- Card that renders an array of child components in a list format. Includes a header and collapsible functionality.

## Design Notes

-- The card list will take the width set by the child component or use a static width passed as a prop. The height is fixed to 33.25 rem. By default the card will be expanded. If the desired behavior is to have it start minimized pass the prop `initiallyExpanded={false}`

## Technical Notes

Sample:

```
<CardList
  width={100px}
  listItems={{header: Agent PV, items: [{Title: Agent PV}, {}, {}]}
/>

```
