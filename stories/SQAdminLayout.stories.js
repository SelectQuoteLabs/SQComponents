import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {SQAdminLayout, SystemHeader} from '../src';
import FakeManageAccounts from './components/FakeManageAccounts';
import markdown from '../notes/SQAdminLayout.md';

export default {
  title: 'SQ Admin View',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

function Header() {
  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Senior > Admin"
    />
  );
}

export function sqAdminView() {
  return (
    // create an artificial window because storybook
    <div style={{width: 900}}>
      <SQAdminLayout HeaderComponent={Header}>
        <FakeManageAccounts />
      </SQAdminLayout>
    </div>
  );
}
