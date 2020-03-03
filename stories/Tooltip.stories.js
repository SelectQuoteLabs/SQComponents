import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/Tooltip.md';

import Tooltip from '../src/components/Tooltip';

export default {
  title: 'Tooltip',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const tooltip = () => (
  <>
    <h1>Tooltip</h1>
    <Tooltip />
  </>
);

tooltip.story = {
  name: 'Tooltip',
};
