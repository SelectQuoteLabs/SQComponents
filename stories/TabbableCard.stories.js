import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/TabbableCard.md';

import {TabbableCard} from '../src';

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
    body: <h2>Imaginary Details content</h2>,
  },
  {
    id: 2,
    label: 'Permissions',
    body: <h2>Imaginary Permissions content</h2>,
  },
  {
    id: 3,
    label: 'Skill Group',
    body: <h2>Imaginary Skill Group content</h2>,
  },
  {
    id: 4,
    label: 'Gal States',
    body: <h2>Imaginary Gal States content</h2>,
  },
];

export const Default = () => (
  <TabbableCard tabs={tabs} title="User Info" cardStyles={{width: '800px'}} />
);
