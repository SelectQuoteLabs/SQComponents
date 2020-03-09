import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/CardList.md';

// import SelectChip from '../src/components/SelectChip/SelectChip';
import CardList from '../src/components/CardList/CardList';

export default {
  title: 'CardList',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

// const data = [
//   {
//     header: 'Acct ID : 3761140',
//     body: 'Name : Ashley Payne',
//     footer: 'PV Rule : Quoted-LowInterest-Attempt2',
//   },
//   {
//     header: 'Acct ID : 446426',
//     body: 'Name : Flor Monterroso',
//     footer: 'PV Rule : TA Follow Up 2',
//   },
// ];

export const CardListExample = () => (
  <CardList
    width="25rem"
    updateDate={action(`date updated`)}
    initiallyExpanded={boolean('initiallyExpanded', true)}
    headerContent="Agent PV"
  />
);
