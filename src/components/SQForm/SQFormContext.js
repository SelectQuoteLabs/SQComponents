import React from 'react';

const FormItemContext = React.createContext();

function SQFormThemeProvider({children, formItemCSSClass}) {
  const cssClasses = React.useMemo(
    () => `sqForm__item ${formItemCSSClass || null}`,
    [formItemCSSClass]
  );

  return (
    <FormItemContext.Provider value={cssClasses}>
      {children}
    </FormItemContext.Provider>
  );
}

function useSQFormThemeContext() {
  const context = React.useContext(FormItemContext);

  if (context === undefined) {
    throw new Error(
      'useSQFormThemeContext must be used within a SQFormThemeProvider'
    );
  }

  return context;
}

export {SQFormThemeProvider, useSQFormThemeContext};
