import React from 'react';
import SQAdminSideNav from './SQAdminSideNav';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
  ExpandingCardList,
} from '../../src';
import FakeAccountsTable from './FakeAccountsTable';
import FakeAccountInfo from './FakeAccountInfo';

export default function FakeManageAccounts() {
  return (
    <SQAdminPageLayout>
      <SQAdminSideNav />
      <SQAdminMainContent>
        <ExpandingCardList>
          <FakeAccountsTable title="Manage Accounts" />
          <FakeAccountInfo title="Account Info" />
        </ExpandingCardList>
      </SQAdminMainContent>
    </SQAdminPageLayout>
  );
}
