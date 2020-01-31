import React from 'react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/1-RoundedButton.md';

import RoundedButton from '../src/RoundedButton';

export default {
  title: 'RoundedButton',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const primaryButton = () => (
  <RoundedButton
    label={text('label', 'SAVE')}
    title="Primary Button Base"
    action={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    primary={boolean('primary', true)}
  />
);

export const secondaryButton = () => (
  <RoundedButton
    label={text('label', 'SAVE')}
    title="Rounded Button Base"
    action={action('button clicked')}
    isDisabled={boolean('isDisabled', false)}
    primary={boolean('primary', false)}
  />
);
