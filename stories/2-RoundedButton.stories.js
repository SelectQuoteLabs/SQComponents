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

export const base = () => (
  <RoundedButton
    label={text('label', 'SAVE')}
    title="Rounded Button Base"
    action={action('button clicked')}
    isDisabled={boolean('isDisabled', false)}
    primary={boolean('primary', false)}
  />
);

export const loginButton = () => (
  <RoundedButton
    label={text('label', 'SIGN IN')}
    title="Sign In"
    action={action('login button clicked')}
    isDisabled={boolean('isDisabled', false)}
    primary={boolean('primary', false)}
    className={text('className', 'login__button')}
  />
);

export const primaryButton = () => (
  <RoundedButton
    label={text('label', 'SAVE')}
    title="Primary Button Base"
    action={action('primary btn clicked')}
    isDisabled={boolean('isDisabled', false)}
    primary={boolean('primary', true)}
  />
);
