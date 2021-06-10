import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {
  ExpandingCard,
  ExpandingCardWithTabs,
  ExpandingCardList,
  DataTable,
  SideNav,
  SideNavTop,
  SideNavMiddle,
  SideNavBottom,
  Avatar,
  IconButton,
  IconButtonMenu,
} from '../src';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import BuildIcon from '@material-ui/icons/Build';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {accountHistoryLarge} from './utils/accountHistoryLarge';
import markdown from '../notes/SideNav.md';

export default {
  title: 'SideNav',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export function sideNavWithTopMiddleAndBottom() {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
      }}
    >
      <SideNav>
        <SideNavTop>
          <IconButton
            isIconTeal={true}
            height="42px"
            width="42px"
            IconComponent={AddCircleIcon}
            onClick={() => {}}
          />
        </SideNavTop>
        <SideNavMiddle>
          <IconButton IconComponent={() => <Avatar>1</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>2</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>3</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>4</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>5</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>6</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>7</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>8</Avatar>} />
        </SideNavMiddle>
        <SideNavBottom>
          <IconButton
            height="42px"
            width="42px"
            IconComponent={() => (
              <Avatar isInverted>
                <SettingsIcon />
              </Avatar>
            )}
          />
          <IconButton
            height="42px"
            width="42px"
            IconComponent={() => (
              <Avatar isInverted>
                <BuildIcon />
              </Avatar>
            )}
          />
        </SideNavBottom>
      </SideNav>
      <div
        style={{
          width: '800px', // this is somewhat arbitrary/artificial but I want the storybook version to be a little larger to look realistic
          height: '100%',
        }}
      >
        <ExpandingCardList>
          <ExpandingCard title="Card One" name="one">
            Body
          </ExpandingCard>
          <ExpandingCardWithTabs
            title="Account Information"
            name="account-information"
            tabs={accountTabs}
          />
        </ExpandingCardList>
      </div>
    </div>
  );
}

export function sideNavWithMiddleAndBottom() {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
      }}
    >
      <SideNav>
        <SideNavMiddle>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: 'auto',
              gap: '8px',
            }}
          >
            <IconButton IconComponent={() => <Avatar>1</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>2</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>3</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>4</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>5</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>6</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>7</Avatar>} />
            <IconButton IconComponent={() => <Avatar isInverted>8</Avatar>} />
          </div>
        </SideNavMiddle>
        <SideNavBottom>
          <IconButton
            IconComponent={() => (
              <Avatar isInverted>
                <SettingsIcon />
              </Avatar>
            )}
          />
          <IconButton
            IconComponent={() => (
              <Avatar isInverted>
                <BuildIcon />
              </Avatar>
            )}
          />
        </SideNavBottom>
      </SideNav>
      <div
        style={{
          width: '800px', // this is somewhat arbitrary/artificial but I want the storybook version to be a little larger to look realistic
          height: '100%',
        }}
      >
        <ExpandingCardList>
          <ExpandingCard title="Card One" name="one">
            Body
          </ExpandingCard>
          <ExpandingCardWithTabs
            title="Account Information"
            name="account-information"
            tabs={accountTabs}
          />
        </ExpandingCardList>
      </div>
    </div>
  );
}

const menuItems = [
  {
    id: 1,
    label: 'Some Label1',
    onClick: () => {},
  }, {
    id: 2,
    label: 'Some Label2',
    onClick: () => {}
  }
]

export function sideNavWithTopAndMiddle() {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
      }}
    >
      <SideNav>
        <SideNavTop>
          <IconButton
            height="42px"
            width="42px"
            IconComponent={() => (
              <Avatar isInverted>
                <EditIcon />
              </Avatar>
            )}
          />
          <IconButton
            isIconTeal={true}
            height="42px"
            width="42px"
            IconComponent={AddCircleIcon}
            onClick={() => {}}
          />
        </SideNavTop>
        <SideNavMiddle>
          <IconButton IconComponent={() => <Avatar>1</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>2</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>3</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>4</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>5</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>6</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>7</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>8</Avatar>} />
          <IconButtonMenu
            tooltipTitle="Some Tooltip"
            menuItems={menuItems}
            applyPopoverSpacing={false}
            placement="right"
            IconComponent={() => <Avatar isInverted>9</Avatar>}
          />
        </SideNavMiddle>
      </SideNav>
      <div
        style={{
          width: '800px', // this is somewhat arbitrary/artificial but I want the storybook version to be a little larger to look realistic
          height: '100%',
        }}
      >
        <ExpandingCardList>
          <ExpandingCard title="Card One" name="one">
            Body
          </ExpandingCard>
          <ExpandingCardWithTabs
            title="Account Information"
            name="account-information"
            tabs={accountTabs}
          />
        </ExpandingCardList>
      </div>
    </div>
  );
}

export function sideNavWithMiddleOnly() {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
      }}
    >
      <SideNav>
        <SideNavMiddle>
          <IconButton IconComponent={() => <Avatar>1</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>2</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>3</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>4</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>5</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>6</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>7</Avatar>} />
          <IconButton IconComponent={() => <Avatar isInverted>8</Avatar>} />
        </SideNavMiddle>
      </SideNav>
      <div
        style={{
          width: '800px', // this is somewhat arbitrary/artificial but I want the storybook version to be a little larger to look realistic
          height: '100%',
        }}
      >
        <ExpandingCardList>
          <ExpandingCard title="Card One" name="one">
            Body
          </ExpandingCard>
          <ExpandingCardWithTabs
            title="Account Information"
            name="account-information"
            tabs={accountTabs}
          />
        </ExpandingCardList>
      </div>
    </div>
  );
}

// everything below is copypasta from ExpandingCardList.stories.js
const onCellClicked = params => {
  const gridApi = params.api;
  const selectedRows = gridApi.getSelectedRows();
  if (selectedRows.length) {
    gridApi.deselectAll();
    //do something custom
    alert(`Opening the account: \n ${JSON.stringify(selectedRows[0])}`);
  }
};

const filterByAction = [
  {
    displayKey: 'filterBy',
    displayName: 'Filter by… (All)',
    test: function(filterValue, cellValue) {
      return cellValue != null;
    },
    hideFilterInput: true,
  },
  {
    displayKey: 'valid',
    displayName: 'Valid',
    test: function(filterValue, cellValue) {
      return cellValue != null && cellValue === 'valid';
    },
    hideFilterInput: true,
  },
];

const columns = [
  {
    headerName: 'Status',
    field: 'status',
    onCellClicked: onCellClicked,
    cellClass: 'dataTable__hyperlink',
    filterParams: {
      filterOptions: filterByAction,
      defaultOption: 'filterBy',
      suppressAndOrCondition: true,
    },
  },
  {headerName: 'Comment', field: 'comment', width: 400},
  {headerName: 'User', field: 'user'},
  {headerName: 'Date', field: 'date'},
  {headerName: 'PV Rule', field: 'pvRule'},
  {
    headerName: 'Number right',
    field: 'number',
    cellClass: 'dataTable__number',
  },
];

const accountTabs = [
  {
    label: 'Account History',
    value: 'account-history',
    body: <DataTable columns={columns} rowData={accountHistoryLarge} />,
  },
  {
    label: 'Agent PV',
    value: 'agent-pv-list',
    body: <DataTable columns={columns} rowData={[]} />,
  },
];
