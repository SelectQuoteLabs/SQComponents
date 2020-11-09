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
          {/* this uses ExpandingCard */}
          <FakeAccountsTable
            name="fake-accounts-table"
            title="Manage Accounts"
          />
          {/* this uses ExpandingCardWithTabs */}
          <FakeAccountInfo name="fake-accounts-info" title="Account Info" />
        </ExpandingCardList>
      </SQAdminMainContent>
    </SQAdminPageLayout>
  );
}
