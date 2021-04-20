import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {
  GlobalLoadingProvider,
  SQAdminLayout,
  SystemHeader,
  SnackbarProvider,
  Snackbar,
  useSnackbar,
} from '../src';
import markdown from '../notes/Snackbar.md';

export default {
  title: 'Snackbar',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export function snackbar() {
  // please see Notes section for more complete code examples
  return (
    <GlobalLoadingProvider>
      <SnackbarProvider>
        <FakeApp />
      </SnackbarProvider>
    </GlobalLoadingProvider>
  );
}

function Header() {
  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Senior > Admin"
    />
  );
}

function FakeApp() {
  const [snackbarState, {closeSnackbar}] = useSnackbar();

  return (
    <div style={{width: 900}}>
      <SQAdminLayout HeaderComponent={Header}>
        <div>Fake App</div>
      </SQAdminLayout>
      <Snackbar snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
    </div>
  );
}
