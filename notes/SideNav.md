# SideNav & friends

A group of layout components to assemble a nav bar that lives on the left-hand side of a SelectQuote app.

## Notes

`SideNav` takes three kinds of child components: `SideNavTop`, `SideNavMiddle`, `SideNavBottom`, into which you can render whatever children you want:

```jsx
<SideNav>
  <SideNavTop>an action button (or several?)</SideNavTop>
  <SideNavMiddle>some nav buttons!</SideNavMiddle>
  <SideNavBottom>a search button? settings? 🤷‍♂️</SideNavBottom>
</SideNav>
```

### SideNav

- Parent `SideNav` component is MUI `Paper`, and it has these styles:

```javascript
const usePaperStyles = makeStyles({
  root: {
    height: '100%',
    width: 60,
    marginRight: 18,
    padding: 8,
  },
});
```

- `SideNav` also creates a MUI `<Grid container>`, in which the below child components are each a `<Grid item>`.

### Top, Middle, Bottom

There are three children of our `SideNav` component:

- `SideNavTop`
  - optional
  - renders a divider at bottom
- `SideNavMiddle`
  - Required
  - has `overflow: auto` to scroll if needed
  - **If using SideNav for one group of buttons, use `SideNavMiddle` as the lone child to `SideNav`**
- `SideNavBottom`
  - optional
  - renders a divider at top

Each one of them puts its children into a grid, so your buttons are all evenly spaced, in one column:

```css
/* instead of using MUI Grid, which actually uses Flex, for this case we're using... true grid :) */
.trueGrid {
  display: grid;
  gridtemplatecolumns: 1fr;
  gridtemplaterows: auto;
  gap: 8px;
}
```

**Note** -- this also means if you want to adjust the spacing from the divider, apply that margin value to grid item closest to the divider end. Essentially, keep in mind each direct child is a grid item. For example:

✅ Good:

```jsx
<SideNavTop>
  <IconButton
    isIconTeal={true}
    height="42px"
    width="42px"
    IconComponent={AddCircleIcon}
    onClick={() => {}}
  />
  <div style={{marginBottom: 12}}>
    <IconButton
      height="42px"
      width="42px"
      IconComponent={() => (
        <Avatar isInverted>
          <EditIcon />
        </Avatar>
      )}
    />
  </div>
</SideNavTop>
```

🚨 Not Good:

```jsx
<SideNavTop>
  <div style={{marginBottom: 12}}>
    <IconButton
      isIconTeal={true}
      height="42px"
      width="42px"
      IconComponent={AddCircleIcon}
      onClick={() => {}}
    />
    <IconButton
      height="42px"
      width="42px"
      IconComponent={() => (
        <Avatar isInverted>
          <EditIcon />
        </Avatar>
      )}
    />
  </div>
</SideNavTop>
```
