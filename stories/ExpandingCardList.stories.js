import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {ExpandingCard, ExpandingCardWithTabs, ExpandingCardList} from '../src';

export default {
  title: 'ExpandingCardList',
  decorators: [withInfo],
};

export const expandingCards = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One" name="one">
          Body
        </ExpandingCard>
        <ExpandingCard title="Card Two" name="two">
          Body
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
