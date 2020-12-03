import React from 'react';

const GlobalLoadingStateContext = React.createContext();
const GlobalLoadingDispatchContext = React.createContext();

function GlobalLoadingProvider({children}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const setGlobalLoadingMessage = React.useCallback(
    (message = '') => {
      if (!message) {
        setIsOpen(false);
        setMessage('');
        return;
      }

      setMessage(message);
      setIsOpen(true);
    },
    [setIsOpen, setMessage]
  );

  return (
    <GlobalLoadingStateContext.Provider value={{isOpen, message}}>
      <GlobalLoadingDispatchContext.Provider value={{setGlobalLoadingMessage}}>
        {children}
      </GlobalLoadingDispatchContext.Provider>
    </GlobalLoadingStateContext.Provider>
  );
}

function useGlobalLoadingState() {
  const context = React.useContext(GlobalLoadingStateContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalLoadingState must be used within a GlobalLoadingProvider'
    );
  }
  return context;
}

function useGlobalLoadingDispatch() {
  const context = React.useContext(GlobalLoadingDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalLoadingDispatch must be used within a GlobalLoadingProvider'
    );
  }
  return context;
}

function useGlobalLoading() {
  return [useGlobalLoadingState(), useGlobalLoadingDispatch()];
}

export {
  GlobalLoadingProvider,
  useGlobalLoadingState,
  useGlobalLoadingDispatch,
  useGlobalLoading,
};
