import React from 'react';

const SnackbarStateContext = React.createContext();
const SnackbarDispatchContext = React.createContext();

const initialState = {
  isOpen: false,
  message: '',
  severity: '',
};

function SnackbarProvider({children}) {
  const [state, setState] = React.useState(initialState);

  const closeSnackbar = React.useCallback(() => {
    setState({
      ...state,
      isOpen: false,
    });
  }, [setState, state]);

  const snackbar = React.useMemo(
    () => ({
      success: message =>
        setState({
          isOpen: true,
          message,
          severity: 'success',
        }),
      error: message =>
        setState({
          isOpen: true,
          message,
          severity: 'error',
        }),
    }),
    [setState]
  );

  return (
    <SnackbarStateContext.Provider value={state}>
      <SnackbarDispatchContext.Provider value={{snackbar, closeSnackbar}}>
        {children}
      </SnackbarDispatchContext.Provider>
    </SnackbarStateContext.Provider>
  );
}

function useSnackbarState() {
  const context = React.useContext(SnackbarStateContext);
  if (context === undefined) {
    throw new Error('useSnackbarState must be used within a SnackbarProvider');
  }
  return context;
}

function useSnackbarDispatch() {
  const context = React.useContext(SnackbarDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useSnackbarDispatch must be used within a SnackbarProvider'
    );
  }
  return context;
}

function useSnackbar() {
  // [snackbarState, {snackbar, closeSnackbar}]
  return [useSnackbarState(), useSnackbarDispatch()];
}

export {SnackbarProvider, useSnackbarState, useSnackbarDispatch, useSnackbar};
