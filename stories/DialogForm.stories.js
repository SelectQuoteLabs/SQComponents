import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/Dialog.md';

import DialogForm from '../src/components/DialogForm';

export default {
  title: 'DialogForm',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const dialogWithSaveButton = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <DialogForm
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      maxWidth="sm"
      onClose={action('Close button clicked')}
      onSave={action('Save button clicked')}
      title="Dialog Form"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </DialogForm>
  </>
);
