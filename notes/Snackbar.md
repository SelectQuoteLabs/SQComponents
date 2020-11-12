# Snackbar & friends

A custom component, a Context provider, and a hook to handle temporary app notifications. Overall pattern inspired by [this article by Kent C Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

There are three primary consumables:

1. `<Snackbar />`
2. `<SnackbarProvider>`
3. `useSnackbar`

## `Snackbar`

Put this component higher up in the component tree, rendered once. It is intended to be used in conjunction with `useSnackbar`, like this:

```javascript
function Main(props) {
  const [snackbarState, {closeSnackbar}] = useSnackbar();

  return (
    <>
      <OtherStuff />
      <Snackbar snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
    </>
  );
}
```

The third prop, `position`, is optional. Its default value is an object `{vertical: 'top', horizontal: 'right'}` and matches the [`anchorOrigin` prop in `@material-ui/core`](https://material-ui.com/api/snackbar/#props)

## `SnackbarProvider`

Must be higher in the component tree than `Snackbar`.

## `useSnackbar`, `useSnackbarState`, `useSnackbarDispatch`

```javascript
const [snackbarState, {snackbar, closeSnackbar}] = useSnackbar();
```

```javascript
const snackbarState = useSnackbarState();
```

```javascript
const {snackbar, closeSnackbar} = useSnackbarDispatch();
```

## `function snackbar(message: String!): void`

When using the `snackbar` to trigger a new message, invoke either `success` or `error` with a single string parameter:

```
try {
  const data = await fetchWrapper(url)
  snackbar.success('Successful fetch!')
  return data
} catch (error) {
  snackbar.error('There was an error')
}
```
