import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/TabbableCard.md';

import {TabbableCard} from '../src';

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus ipsum elementum ante ornare commodo. Duis pellentesque malesuada purus, at consequat felis bibendum non. Cras sodales massa sit amet porta ultricies. Pellentesque id accumsan massa. Suspendisse rhoncus sit amet nulla in pulvinar. Nulla facilisi. Nam semper risus non justo pharetra, vel facilisis odio fringilla. Etiam facilisis urna non rutrum ultrices. Vestibulum a porta ante. Nullam eget egestas sem, id vehicula felis.
Vivamus sed aliquet eros. Etiam quis luctus ligula, ut auctor tellus. Vestibulum libero mauris, efficitur interdum sem sed, commodo hendrerit dolor. Praesent scelerisque sit amet mi at faucibus. In bibendum, metus non imperdiet tempus, arcu sem ullamcorper est, eu tempus quam magna quis nisl. In a ultrices metus. Sed blandit eu lacus posuere vestibulum. Maecenas sagittis mattis aliquam. Nullam nec massa vestibulum, dignissim libero non, facilisis lectus. Donec facilisis lobortis nunc, at hendrerit neque mattis non.
Sed lacinia sagittis tellus, et dapibus turpis consequat id. Suspendisse auctor, sapien ut dignissim finibus, tortor velit iaculis diam, at hendrerit ipsum nibh nec erat. Maecenas eget magna eu turpis dapibus cursus nec eget nulla. Proin venenatis massa massa, sit amet ultricies neque fermentum at. Donec nisi ligula, vulputate in neque at, varius consectetur dolor. Nunc a elit venenatis, bibendum metus nec, molestie ex. Morbi ut porttitor est. Curabitur cursus nibh mauris. Vestibulum dignissim porttitor elit nec eleifend. Nulla mollis sit amet risus id aliquam. Vivamus a finibus ligula. Aenean pretium nulla ac pulvinar blandit.
Donec fringilla neque a hendrerit mollis. Proin dictum metus ut pulvinar faucibus. Ut at sem in nulla viverra laoreet vel nec risus. Nulla nulla leo, feugiat non erat nec, lacinia rutrum augue. Nullam pharetra non nulla a mollis. Pellentesque vitae diam turpis. Nullam sit amet condimentum eros. Nullam tincidunt feugiat congue. Sed a sapien ac diam finibus molestie commodo nec quam. Curabitur faucibus blandit urna, a placerat erat sodales eget.
Fusce et sollicitudin nulla. Nullam nisi diam, eleifend et velit vel, viverra ultricies sem. Aliquam auctor rhoncus metus nec mollis. Maecenas massa turpis, ullamcorper nec facilisis pharetra, auctor ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, erat non faucibus blandit, orci felis ultrices sapien, ac consectetur diam libero at metus. Phasellus pretium hendrerit mi, ac scelerisque quam porta nec. Duis hendrerit purus vel elit cursus accumsan. Praesent dictum neque vitae pharetra posuere.`;

export default {
  title: 'TabbableCard',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const tabs = [
  {
    id: 1,
    label: 'Details',
    body: <h2 style={{margin: 0}}>{TEXT}</h2>,
  },
  {
    id: 2,
    label: 'Permissions',
    body: <h2 style={{margin: 0}}>Imaginary Permissions content</h2>,
  },
  {
    id: 3,
    label: 'Skill Group',
    body: <h2 style={{margin: 0}}>Imaginary Skill Group content</h2>,
  },
  {
    id: 4,
    label: 'Gal States',
    body: <h2 style={{margin: 0}}>Imaginary Gal States content</h2>,
  },
];

export const Default = () => (
  <div style={{height: '500px'}}>
    <TabbableCard tabs={tabs} title="User Info" cardStyles={{width: '800px'}} />
  </div>
);

export const AdminView = () => (
  <div
    style={{
      height: '700px',
      width: '1200px',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <TabbableCard tabs={tabs} title="User Info" cardStyles={{width: '45%'}} />
    <TabbableCard tabs={tabs} title="User Info" cardStyles={{width: '45%'}} />
  </div>
);
