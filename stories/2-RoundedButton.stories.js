import React from 'react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/1-RoundedButton.md';
import {AccessAlarm, ThreeDRotation} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import {RoundedButton} from '../src';

const buttonStyles = makeStyles(() => {
  return {
    button: {
      backgroundColor: 'yellowgreen',
    },
  };
});

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
    {text('children', 'save')}
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
    {text('children', 'save')}
  </RoundedButton>
);

export const disabledButton = () => (
  <RoundedButton
    title="Disabled Button Base"
    onClick={action('button clicked')}
    isDisabled={boolean('isDisabled', true)}
  >
    {text('children', 'save')}
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
    {text('children', 'save')}
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
    {text('children', 'save')}
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
    {text('children', 'save')}
  </RoundedButton>
);

export const deprecatedDisableButton = () => (
  <RoundedButton
    title="Rounded Button Base"
    onClick={action('button clicked')}
    disabled={boolean('disable', false)}
    primary={boolean('primary', false)}
  >
    {text('label', 'Check the console to see the deprecation warning.')}
  </RoundedButton>
);

export const ButtonWithClassNameProp = () => {
  const styles = buttonStyles();

  return (
    <RoundedButton
      title="Rounded Button Base"
      onClick={action('button clicked')}
      disabled={boolean('disable', false)}
      primary={boolean('primary', false)}
      className={styles.button}
    >
      {text('label', 'This has a custom background color')}
    </RoundedButton>
  );
};
