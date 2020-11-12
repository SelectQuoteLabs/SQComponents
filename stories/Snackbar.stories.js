import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {
  SQAdminLayout,
  SystemHeader,
  SnackbarProvider,
  Snackbar,
  useSnackbar,
} from '../src';
import markdown from '../notes/Snackbar.md';
import MovieSearchCard from './components/MovieSearchCard';

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
    <SnackbarProvider>
      <FakeApp />
    </SnackbarProvider>
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
        <MovieSearchCard />
      </SQAdminLayout>
      <Snackbar snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
    </div>
  );
}
