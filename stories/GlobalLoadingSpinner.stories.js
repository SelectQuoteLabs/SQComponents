import React from 'react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/GlobalLoadingSpinner.md';
import {GlobalLoadingSpinner} from '../src';

export default {
  title: 'GlobalLoadingSpinner',
  decorators: [withKnobs({escapeHTML: false}), withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const globalLoadingSpinner = () => {
  return (
    <>
      <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
      <GlobalLoadingSpinner isOpen={boolean('isOpen', false)} />
    </>
  );
};

export const globalLoadingSpinnerWithMessage = () => {
  return (
    <>
      <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
      <GlobalLoadingSpinner
        isOpen={boolean('isOpen', false)}
        message={text('Message', 'Accessing Some Resource')}
      />
    </>
  );
};

export const globalLoadingSpinnerMultilineMessage = () => {
  return (
    <>
      <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
      <GlobalLoadingSpinner
        isOpen={boolean('isOpen', false)}
        message={text('Message', `This\nMessage\nis Multiple\nLines`)}
      />
    </>
  );
};
