import React from 'react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/GlobalLoadingSpinner.md';
import {
  GlobalLoadingProvider,
  GlobalLoadingSpinner,
  SnackbarProvider,
  SQAdminLayout,
  SystemHeader,
  useGlobalLoadingState,
} from '../src';

export default {
  title: 'GlobalLoadingSpinner',
  decorators: [withKnobs({escapeHTML: false}), withInfo],
  parameters: {
    notes: {markdown},
  },
};

export function globalLoadingSpinner() {
  // please see Notes section for more complete code examples
  return (
    <>
      <h3>
        Search for a movie, select one, then click "Submit" to see
        `GlobalLoadingSpinner` in action.
      </h3>
      <SnackbarProvider>
        <GlobalLoadingProvider>
          <FakeApp />
        </GlobalLoadingProvider>
      </SnackbarProvider>
    </>
  );
}

export const globalLoadingSpinnerLegacyPattern = () => {
  return (
    <>
      <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
      <GlobalLoadingSpinner
        isOpen={boolean('isOpen', false)}
        message={text('Message', `Loading`)}
      />
    </>
  );
};

function Header() {
  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Senior > Admin"
    />
  );
}

function FakeApp() {
  const {isOpen, message} = useGlobalLoadingState();

  return (
    <div style={{width: 900}}>
      <SQAdminLayout HeaderComponent={Header}>
        <div>Fake Data</div>
      </SQAdminLayout>
      <GlobalLoadingSpinner isOpen={isOpen} message={message} />
    </div>
  );
}
