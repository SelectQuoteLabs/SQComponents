# ScriptedText
When the agent user needs to be prompted to read a script aloud to the customer on the phone.

## Design Notes
- The text in the tooltip is always the same, so that's been hard coded into this component.
- The icon is always the same, so that is not customizable.

## Technical Notes
- This component utilizes another shared component --> Tooltip
- `text` prop is required, but the component will still render without it.