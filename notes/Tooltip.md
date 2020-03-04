# Tooltip
Pro tip - use a tooltip.

## Design Notes
- The default MUI version will close the tooltip after the cursor is no longer hovered over the child element. We are overriding that to easily make the child element a button or more complex and specifically styled text (agent instructions, for example).
- Default font-size is 1rem (16px)

## Technical Notes
- The title prop must either be a string or a DOM element.
- If you set the title prop to an empty string, the tooltip itself will not render. Do not set it to null or undefined as that will render the arrow and nothing else 👎.

