import React from 'react';
// import {withKnobs, boolean} from '@storybook/addon-knobs';
// import {withInfo} from '@storybook/addon-info';
// import markdown from '../notes/1-Dialog.md';

import DialogForm from '../src/components/DialogForm';

export default {
  title: 'DialogForm',
  // decorators: [withKnobs, withInfo],
  // parameters: {
  //   notes: {markdown},
  // },
};

export const dialogWithSaveButton = () => (
  <DialogForm
  // isDisabled={boolean('isDisabled', false)}
  >
    {'T'}
  </DialogForm>
);
