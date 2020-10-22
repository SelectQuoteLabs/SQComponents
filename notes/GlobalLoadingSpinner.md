# Global Loading Spinner

The global loading spinner is to be used when the entire system should be blocked until an operation is complete.

## Usage

```jsx
import {GlobalLoadingSpinner} from 'scplus-shared-components';
```

```jsx
// Without a message under the spinner
const globalLoadingSpinner = () => {
  return <GlobalLoadingSpinner isOpen />;
};

// With a message under the spinner
const globalLoadingSpinner = () => {
  return <GlobalLoadingSpinner isOpen message="Test loading message" />;
};

// With a multiline message under the spinner
const globalLoadingSpinner = () => {
  return <GlobalLoadingSpinner isOpen message="Test:Loading:Message" />;
};
```

## Technical Details

### Props

| Name    | Type     | Description                                                                                                                                                                             | Required | Default |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| isOpen  | `bool`   | Whether the dialog is open                                                                                                                                                              | No       | `false` |
| message | `string` | The message to be displayed below the loading spinner. An ellipsis `...` is automatically appended to single line messages. Multiline messages should have their lines delimited by `:` | No       | `''`    |
