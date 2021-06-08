# TabbleCard

A card that can switch between 'tabs'

## Design Notes

- This component is design to render the body for a given tab which is selected via a popover menu

## Technical Notes

- The tabs prop must be an array of object that follow this schema:
  `{ id: string || number, label: string, body: node }`

- The `isSelfBounding` prop will allow the card to use as much space as it can within its parent node. Note: This prop will respect any siblings the card may have.
