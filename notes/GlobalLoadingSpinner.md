# GlobalLoadingSpinner & Friends

The global loading spinner is to be used when the entire system should be blocked until an operation is complete.

Once `GlobalLoadingProvider` and `GlobalLoadingSpinner` are added high in the component tree, use `setGlobalLoadingMessage('Custom message')` to programmaticaly open the GlobalLoadingSpinner with your custom message, then after your operation is done, use `setGlobalLoadingMessage('')` to close the GlobalLoadingSpinner.

It is intended to be returned in JSX in one single place, high up in the component tree. Though this new Context/Hooks/single-component pattern does not break the multiple-instance legacy pattern, going forward we should prefer to follow the single-component pattern.

To see multiple-instance example, go to "Global Loading Spinner Legacy Pattern" story.

## Demo

[Loom demo here](https://www.loom.com/share/b3082fb06c62402dae1c481f6860a936)

## Usage

### `<GlobalLoadingProvider>`

```javascript
// src/index.js or wherever you put your Providers
import {GlobalLoadingProvider} from 'scplus-shared-components';

return <GlobalLoadingProvider>etc...</GlobalLoadingProvider>;
```

### `<GlobalLoadingSpinner>`, `useGlobalLoadingState()`

```javascript
// src/App.js, likely where you put the single `Snackbar` component
import {
  GlobalLoadingSpinner,
  useGlobalLoadingState,
} from 'scplus-shared-components';

function App() {
  const {isOpen, message} = useGlobalLoadingState();

  return (
    <>
      <Header />
      <Main />
      <GlobalLoadingSpinner isOpen={isOpen} message={message} />
      <Snackbar />
    </>
  );
}
```

### `useGlobalLoadingDispatch()` --> `setGlobalLoadingMessage(message: String)`

```javascript
// inside a handleSubmit for a batch update
export function PostForm() {
  const [updatePost] = useUpdatePost()
  const {setGlobalLoadingMessage} = useGlobalLoadingDispatch()

  const handleSubmit = async (values) => {
    // blocking message appears when this is invoked
    setGlobalLoadingMessage('Saving changes')

    await updatePost(values)

    // blocking message disappears when promise resolves/rejects, and this is invoked
    setGlobalLoadingMessage('')
  }

  // OR use multiline messages 👌
  const handleSubmit = async (values) => {
    setGlobalLoadingMessage('Test\nLoading\nMessage')

    await updatePost(values)

    setGlobalLoadingMessage('')
  }


  return (
    // SQForm, etc
  )
}
```

```javascript
// inside a redux thunk
export const createPost = async dispatch => newPost => {
  const {setGlobalBlockingMessage} = useGlobalLoadingDispatch()

  try {
    setGlobalBlockingMessage('Creating new post')
    const savedNewPost = await service.createPost(newPost)
    dispatch({type: 'CREATE_POST_SUCCESS', savedNewPost})
  } catch error {
    console.log(error)
  } finally {
    setGlobalBlockingMessage('')
  }
}
```
