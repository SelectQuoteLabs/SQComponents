/* eslint react-hooks/rules-of-hooks: 0 */
import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import {ExpandingCard, ExpandingCardList} from '../src';

export default {
  title: 'ExpandingCardList',
  decorators: [withInfo, withKnobs],
};

export const expandingCards = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCardList>
        <ExpandingCard title="Card One">Body</ExpandingCard>
        <ExpandingCard title="Card Two">
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
        <ExpandingCard title="Card Three" isInitiallyExpanded={false}>
          Body
        </ExpandingCard>
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
