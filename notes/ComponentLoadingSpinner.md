# Component Loading Spinner

The component loading spinner is to be used when a component requires loading individually and should be displayed as such.

## Usage

```jsx
import {ComponentLoadingSpinner} from 'scplus-shared-components';
```

```jsx
// Without a message under the spinner
const componentLoadingSpinner = () => {
  return <ComponentLoadingSpinner />;
};

// With a message under the spinner
const componentLoadingSpinner = () => {
  return <ComponentLoadingSpinner message="Test loading message" />;
};
```

## Technical Details

### Props

| Name    | Type     | Description                                                                                         | Required | Default |
| ------- | -------- | --------------------------------------------------------------------------------------------------- | -------- | ------- |
| message | `string` | The message to be displayed below the loading spinner. An ellipsis `...` is automatically appended. | No       | `''`    |
