# Login Screen

A standardized login screen.

## Design Notes

See examples for details on how to override styles/colors

## Usage

```jsx
import {LoginScreen} from 'scplus-shared-components';
```

```jsx
const someComponent = () => {
  <LoginScreen
    paperColor="var(--color-srtsGreen)"
    backgroundColor="rgba(90, 126, 68, 0.44)"
    title="Sign into my app"
  >
    {/* children (google oath button, magic string fields, email/pass) */}
  </LoginScreen>;
};
```
