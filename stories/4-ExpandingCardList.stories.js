import React from 'react';
import {makeStyles} from '@material-ui/core';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {
  ExpandingCard,
  ExpandingCardWithTabs,
  ExpandingCardList,
  DataTable,
} from '../src';
import {accountHistoryLarge} from './utils/accountHistoryLarge';

export default {
  title: 'ExpandingCardList',
  decorators: [withInfo, withKnobs],
};

export const expandingCards = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One" name="one">
          Body
        </ExpandingCard>
        <ExpandingCard title="Card Two" name="two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum consectetur nisl, ut porttitor felis porta eget. Donec quam
            tortor, sagittis a risus ut, aliquam euismod ligula. Aenean ipsum
            neque, bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam
            fermentum nibh quis ante vestibulum condimentum. In viverra, libero
            at interdum commodo, mauris tellus consequat arcu, id ultrices nisi
            tortor vel sem. Nam accumsan lorem nunc, eu semper metus blandit id.
            Nunc cursus tortor tempus eros mollis ultrices. Fusce sed nulla
            massa. Phasellus non eros vel velit convallis euismod. Nulla iaculis
            rutrum sem.
          </p>

          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin diam sapien, commodo non tortor eu,
            cursus iaculis lorem. In hac habitasse platea dictumst. Curabitur
            nibh risus, ornare nec orci a, suscipit finibus arcu. Integer vitae
            enim consequat, posuere tellus eu, varius dolor. Fusce dictum
            porttitor interdum. Nam gravida orci turpis, at pulvinar velit
            volutpat vel. Sed porttitor, magna sed pulvinar lobortis, mauris
            lorem ullamcorper mauris, ac rhoncus erat tellus sit amet mi. Nam
            ornare tempor magna nec suscipit. Integer ac congue mauris.
          </p>
        </ExpandingCard>
        <ExpandingCard
          title="Card Three"
          name="three"
          isInitiallyExpanded={false}
        >
          Body
        </ExpandingCard>
      </ExpandingCardList>
    </div>
  );
};

export const expandingCardsWithSubheader = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One" name="one" subheader="Testing">
          Body
        </ExpandingCard>
        <ExpandingCard title="Card Two" name="two">
          Body
        </ExpandingCard>
      </ExpandingCardList>
    </div>
  );
};

const tabs = [
  {
    label: 'First Tab',
    value: 'first-tab',
    body: <div>First Tab Content</div>,
  },
  {
    label: 'Second Tab',
    value: 'second-tab',
    body: <div>Second Tab Content</div>,
  },
  {
    label: 'Third Tab',
    value: 'third-tab',
    body: <div>Third Tab Content</div>,
  },
];

export const expandingCardsWithTabs = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One" name="one">
          Body
        </ExpandingCard>
        <ExpandingCardWithTabs title="Card Two" name="two" tabs={tabs} />
      </ExpandingCardList>
    </div>
  );
};

export const expandingCardsWithDataTable = () => {
  /* Hooks not allowed here but leaving as an example of how to control
    the expanded state of the card
  const [isCardTwoExpanded, setIsCardTwoExpanded] = React.useState(false); **/

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
    {
      headerName: 'Comment',
      field: 'comment',
      width: 400,
      cellClass: 'dataTable__hyperlink',
      /* example of how to control the expanded state of the card
      onCellClicked: () => setIsCardTwoExpanded(!isCardTwoExpanded), **/
    },
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

  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One" name="one">
          <DataTable columns={columns} rowData={accountHistoryLarge} />
        </ExpandingCard>
        <ExpandingCard
          title="Card Two - open/close with the knob"
          name="two"
          isCardExpanded={boolean(
            'isCardTwoExpanded',
            false,
            'Toggle open Card two from outside card 2'
          )}
          expandCard={() => {}} // local state is needed to implement this
        >
          When fully implemented the open/close state can be triggered from from
          the card or triggered from an outside source like another card within
          the ExpandingCardList
        </ExpandingCard>
        <ExpandingCardWithTabs
          title="Account Information"
          name="account-information"
          tabs={accountTabs}
        />
      </ExpandingCardList>
    </div>
  );
};

export const expandingCardListWithSingleCard = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="One is the loneliest number" name="one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum consectetur nisl, ut porttitor felis porta eget. Donec quam
            tortor, sagittis a risus ut, aliquam euismod ligula. Aenean ipsum
            neque, bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam
            fermentum nibh quis ante vestibulum condimentum. In viverra, libero
            at interdum commodo, mauris tellus consequat arcu, id ultrices nisi
            tortor vel sem. Nam accumsan lorem nunc, eu semper metus blandit id.
            Nunc cursus tortor tempus eros mollis ultrices. Fusce sed nulla
            massa. Phasellus non eros vel velit convallis euismod. Nulla iaculis
            rutrum sem.
          </p>

          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin diam sapien, commodo non tortor eu,
            cursus iaculis lorem. In hac habitasse platea dictumst. Curabitur
            nibh risus, ornare nec orci a, suscipit finibus arcu. Integer vitae
            enim consequat, posuere tellus eu, varius dolor. Fusce dictum
            porttitor interdum. Nam gravida orci turpis, at pulvinar velit
            volutpat vel. Sed porttitor, magna sed pulvinar lobortis, mauris
            lorem ullamcorper mauris, ac rhoncus erat tellus sit amet mi. Nam
            ornare tempor magna nec suscipit. Integer ac congue mauris.
          </p>
        </ExpandingCard>
      </ExpandingCardList>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    card: {
      backgroundColor: 'dodgerblue',
      color: 'white',
    },
    body: {
      backgroundColor: 'white',
      color: 'navy',
      fontSize: '14px',
      lineHeight: '20px',
      padding: '0 16px',
    },
  };
});

export const ExpandingCardListWithCustomStyles = () => {
  const classes = useStyles();
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard
          title="I'm pretty"
          name="one"
          className={classes.card}
          bodyClassName={classes.body}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum consectetur nisl, ut porttitor felis porta eget. Donec quam
            tortor, sagittis a risus ut, aliquam euismod ligula. Aenean ipsum
            neque, bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam
            fermentum nibh quis ante vestibulum condimentum. In viverra, libero
            at interdum commodo, mauris tellus consequat arcu, id ultrices nisi
            tortor vel sem. Nam accumsan lorem nunc, eu semper metus blandit id.
            Nunc cursus tortor tempus eros mollis ultrices. Fusce sed nulla
            massa. Phasellus non eros vel velit convallis euismod. Nulla iaculis
            rutrum sem.
          </p>
        </ExpandingCard>
      </ExpandingCardList>
    </div>
  );
};
