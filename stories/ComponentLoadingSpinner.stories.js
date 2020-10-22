import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/ComponentLoadingSpinner.md';
import {ComponentLoadingSpinner} from '../src';

export default {
  title: 'ComponentLoadingSpinner',
  decorators: [withKnobs({escapeHTML: false}), withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const componentLoadingSpinner = () => {
  return <ComponentLoadingSpinner />;
};

export const componentLoadingSpinnerWithMessage = () => {
  return <ComponentLoadingSpinner message={text('Message', 'Loading')} />;
};
