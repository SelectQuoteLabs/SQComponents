# Accordion

The accordion shared component has a similar props API and functionality to the `ExpandingCard` component.
While the ExpandingCard is meant to be used as the main parent card in a Master/Detail view, the Accordion component is meant to be used within the content body of a Master/Detail view or any other view.

See the [Sketch Designs](https://www.sketch.com/s/b1684560-808a-4f20-960d-fd3969080240/a/nRlG10d#Inspector) for an example use case.

## Design Notes

- The title is hardcoded to always use the `overline` typography `variant`
- There is no Subheader or additional actions in the Accordion Panel(s)
- The Header of the Accordion Panel(s) is smaller than the `ExpandingCard` to create a UI hierarchy when inside an `ExpandingCard`
- The entire header should be clickable to toggle the open state of the Accordion Panel
- To visually show Accordion Panels are grouped together the gap between them is `8px`
- Unless the `initiallyOpen`prop is set to `true`, the Accordion Panel is initially closed
- Unsure whether a `disabled` state will ever be required, excluding `disabled` state initially

## Technical Notes

To render an `Accordion`, pass a single prop `accordionPanels` that is an `array` of `object(s)`.

If you want to generate an accordion with three accordion panels, pass the `accordionPanels` prop an `array` with three config objects.

The shape of the `object` has a direct correlation with the `props` of the `AccordionPanel` component.

**accordionPanel PropType Shape**

```javascript
{
  body: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isInitiallyExpanded: PropTypes.bool,
  expandPanel: PropTypes.func,
  isPanelExpanded: PropTypes.bool,
}
```
