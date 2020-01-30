# Rounded Button

-- Base Button Component

## Design Notes

-- TBD

## Technical Notes

This button uses the newer material-ui core library. Some apps (e.g., senior) currently use
an older version so there may be some discrepencies when replacing with this shared one.
In the newer version of material-ui the `FlatButton` component has been removed and
replaced with `Button` instead. The migration documents for this suggest we change to this.

When consuming this component be sure you are using the correct props. If you are replacing
an old component in your app with this one, you definitely want to make sure the `isDisabled`
prop is correctly being named. We have updated this component to follow our code standards
and the `disabled` prop has been renamed to `isDisabled`.

You can pass in either a `label` prop or put any React node inside the component tags as children.
However -- the `label` prop is still _required_ and therefore you must pass something in that prop
to satisfy the button's propTypes.
