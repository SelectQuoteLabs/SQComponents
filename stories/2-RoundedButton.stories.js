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
    color={text('color', 'primary')}
    variant={text('variant', 'contained')}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const secondaryButton = () => (
  <RoundedButton
    title="Secondary Button Base"
    onClick={action('button clicked')}
    isDisabled={boolean('isDisabled', false)}
    color={text('color', 'secondary')}
    variant={text('variant', 'outlined')}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const disabledButton = () => (
  <RoundedButton
    title="Disabled Button Base"
    onClick={action('button clicked')}
    isDisabled={boolean('isDisabled', true)}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const successButton = () => (
  <RoundedButton
    title="Success Button Base"
    onClick={action('button clicked')}
    isDisabled={boolean('isDisabled', false)}
    color={text('color', 'success')}
    variant={text('variant', 'contained')}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);

export const buttonWithStartIcon = () => (
  <RoundedButton
    title="Primary Button Base"
    onClick={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    color={text('color', 'success')}
    variant={text('variant', 'contained')}
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
    color={text('color', 'success')}
    variant={text('variant', 'contained')}
    endIcon={<ThreeDRotation />}
  >
    {text('children', 'SAVE')}
  </RoundedButton>
);
