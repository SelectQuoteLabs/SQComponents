# usePrevious

## Examples

```
import {usePrevious} from 'scplus-shared-components;

function Component({accountID}) {
  const prevAccountID = usePrevious(accountID)

  React.useEffect(() => {
    if (prevAccountID !== accountID) {
      dispatch(actionCreator(accountID))
    }
  }, [dispatch, accountID, prevAccountID])
...
}
```
