import React from 'react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/1-RoundedButton.md';
import {AccessAlarm, ThreeDRotation} from '@material-ui/icons';

import RoundedButton from '../src/components/RoundedButton';

export default {
  title: 'RoundedButton',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const primaryButton = () => (
  <RoundedButton
    title="Primary Button Base"
    onClick={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    isPrimary={boolean('primary', true)}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const secondaryButton = () => (
  <RoundedButton
    title="Rounded Button Base"
    onClick={action('button clicked')}
    isDisabled={boolean('isDisabled', false)}
    isPrimary={boolean('primary', false)}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const buttonWithStartIcon = () => (
  <RoundedButton
    title="Primary Button Base"
    onClick={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    isPrimary={boolean('primary', true)}
    startIcon={<AccessAlarm />}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const buttonWithEndIcon = () => (
  <RoundedButton
    title="Primary Button Base"
    onClick={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    isPrimary={boolean('primary', true)}
    endIcon={<ThreeDRotation />}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);
