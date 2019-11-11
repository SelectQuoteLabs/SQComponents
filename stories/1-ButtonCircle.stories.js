import React from 'react';
import {action} from '@storybook/addon-actions';

import ButtonCircle from '../src/ButtonCircle';

export default {
  title: 'ButtonCircle',
};

export const isEnabled = () => (
  <ButtonCircle isEnabled={true} onClick={action('clicked')}>
    {'T'}
  </ButtonCircle>
);

export const isDisabled = () => (
  <ButtonCircle isEnabled={false} onClick={action('clicked')}>
    {'T'}
  </ButtonCircle>
);

export const isFocued = () => (
  <ButtonCircle isFocused={true} onClick={action('clicked')}>
    {'T'}
  </ButtonCircle>
);

export const isInverted = () => (
  <ButtonCircle isInverted={true} onClick={action('clicked')}>
    {'T'}
  </ButtonCircle>
);

export const isContentCentered = () => (
  <ButtonCircle isContentCenter={true} onClick={action('clicked')}>
    {'T'}
  </ButtonCircle>
);
