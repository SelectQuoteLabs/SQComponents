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
