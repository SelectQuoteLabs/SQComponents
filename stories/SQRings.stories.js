import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/SQRings.md';

import {SQRings} from '../src';

export default {
  title: 'SQRings',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const SQRingsDefault = () => {
  return <SQRings height={text('Height', '283')} />;
};
