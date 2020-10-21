# System Header

This component is designed to be used as the header for all applications to display the SelectQuote logo, solution title, and product name with the division's color and the desired menu interactions.

## Usage

```jsx
// Awesome node module imports

const systemHeaderButtons = () => {
  return (
    <>
      <IconButton>
        <NotificationNoneIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
    </>
  )
}

const someComponent = () => {
  return (
    // Awesome React
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      headerComponents={systemHeaderButtons()}
      productTitle="Senior > Agent"
      solutionTitle="SC +"
    >
  )
}
```

## Design Notes

This component can be displayed with or without header components. If you decide to use header components you're responsible for formatting those buttons including but not limited to color, spacing, and size.

## Technical Details

### Props

| Name             | Type     | Description                                                                                         | Required | Default     |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------- | -------- | ----------- |
| backgroundColor  | `string` | The color the background should be. Any valid css backgroundColor property value is valid.          | Yes      | N/A         |
| headerComponents | `node`   | The component that will display on the right hand side of the header.                               | No       | `undefined` |
| productTitle     | `string` | The product title to display after the solution title and pipe. Text will be displayed capitalized. | Yes      | N/A         |
| solutionTitle    | `string` | The solution title to display in the system header. Text with be displayed bold.                    | No       | `SC +`      |
