import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {ExpandingCard, ExpandingCardList} from '../src';

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
          initiallyExpanded={false}
        >
          Body
        </ExpandingCard>
      </ExpandingCardList>
    </div>
  );
};
