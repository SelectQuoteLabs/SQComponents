# SQAdminLayout & friends

A group of `SQAdmin-` layout components to assemble the basic layout of an Admin View UI.

## Notes

### `SQAdminLayout`

The "app container" that renders the app header `SystemHeader` and children in a flex column container, with the container wrapping `children` getting the `flex-grow: 1` style to fill up the rest of the window.

### `SQAdminPageLayout`

The outermost element to be used in any admin view page. This container expects its first child to be the custom component you've built to consume `SideNav` (& friends), then subsequent children after that.

### `SQAdminMainContent`

In the story provided, that second and only other child is `SQAdminMainContent`, the layout component for your `ExpandingCardList` (& friends). You could, optionally, render a third child to the right of `SQAdminMainContent` like the five9 phonebar, for example, but there is no specific SSC layout component for that.

## Example

### App.js

```javascript
import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {SystemHeader, SQAdminLayout} from 'scplus-shared-components';
import AuthenticatedRoute from './AuthenticatedRoute';
import Login from './Login'; // consumes `LoginScreen` from scplus-shared-components

// create a custom component to consume SystemHeader with your App's title and color
// normally I'd put this in its own file
function Header() {
  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Senior > Admin"
    />
  );
}

export function App() {
  return (
    <Router>
      <Switch>
        {/*
          We don't show the app's Header until we've logged in
          so we keep it outside of SQAdminLayout
        */}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

      <SQAdminLayout HeaderComponent={Header}>
        <Switch>
          <AuthenticatedRoute path="/accounts">
            <FakeManageAccounts />
          </AuthenticatedRoute>
          {/* this home route always goes on bottom of the switch list of routes */}
          <AuthenticatedRoute path="/">
            <ManageUsers />
          </AuthenticatedRoute>
        </Switch>
      </SQAdminLayout>
    </Router>
  );
}
```

### FakeManageAccounts.js

```javascript
import React from 'react';
import SQAdminSideNav from './SQAdminSideNav';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
  ExpandingCardList,
} from 'scplus-shared-components';
import FakeAccountsTable from './FakeAccountsTable';
import FakeAccountInfo from './FakeAccountInfo';

export default function FakeManageAccounts() {
  const [selectedAccount, setSelectedAccount] = React.useState(null);

  return (
    <SQAdminPageLayout>
      {/* your app's custom component consuming SideNav & friends */}
      <SQAdminSideNav />
      <SQAdminMainContent>
        <ExpandingCardList>
          {/* this uses ExpandingCard */}
          <FakeAccountsTable
            name="fake-accounts-table"
            title="Manage Accounts"
            selectAccount={setSelectedAccount}
          />
          {/* this uses ExpandingCardWithTabs */}
          <FakeAccountInfo name="fake-accounts-info" title="Account Info" />
        </ExpandingCardList>
      </SQAdminMainContent>
    </SQAdminPageLayout>
  );
}
```

### FakeAccountsTable.js

```javascript
import React from 'react';
import {ExpandingCard, DataTable} from 'scplus-shared-components';

// `columns` should normally be a `React.useMemo` value defined inside this custom component
export default function FakeAccountsTable({name, selectAccount}) {
  const {data} = useFakeAccounts(); // your custom react-query hook to fetch data

  // https://www.ag-grid.com/javascript-grid-events/#properties-and-hierarchy
  const onSelectRow = React.useCallback(
    event => {
      selectAccount(event.data);
    },
    [selectAccount]
  );

  const columns = React.useMemo(() => {
    return [
      {
        headerName: 'Name',
        field: 'account_name', // or whatever the column name may be
        onCellClicked: onSelectRow,
        cellClass: 'dataTable__hyperlink',
      },
      {headerName: 'Description', field: 'account_description'},
    ];
  }, [onSelectRow]);

  return (
    <ExpandingCard title="Card One" name={name}>
      {/* see `DataTable` stories for more info */}
      <DataTable columns={columns} rowData={data} />
    </ExpandingCard>
  );
}
```

### FakeAccountInfo.js

```javascript
import React from 'react';
import {ExpandingCardWithTabs, DataTable} from 'scplus-shared-components';
import FakeAccountDetails from './FakeAccountDetails'; // queries for specific `selectedAccount` data

export default function FakeAccountInfo({name, selectedAccount}) {
  const accountInfoTabs = React.useMemo(() => {
    return [
      {
        label: 'Details',
        value: 'account-details',
        body: <FakeAccountDetails selectedAccount={selectedAccount} />, // consumes `SQForm` & friends
      },
      // etc.
    ];
  }, [selectedAccount]);

  return (
    <ExpandingCardWithTabs
      title="Account Information"
      name={name}
      tabs={accountInfoTabs}
    />
  );
}
```
