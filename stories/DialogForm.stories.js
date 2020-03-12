import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/Dialog.md';

import {DialogForm} from '../src';
import FlexForm from '../mock_components/FlexForm/FlexForm';
import FlexFormInput from '../mock_components/FlexForm/FlexFormInput';

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
      isDisabled={boolean(
        'isDisabled',
        false,
        'Toggle disabled state of Save Button'
      )}
      maxWidth="sm"
      onClose={action('Close button clicked')}
      onSave={action('Save button clicked')}
      title="Dialog Form"
    >
      <FlexForm isTight>
        <FlexFormInput label="Test 1" field="test" />
        <FlexFormInput label="Test 2" field="test" />
        <FlexFormInput label="Test 3" field="test" />
        <FlexFormInput label="Test 4" field="test" />
        <FlexFormInput label="Test 5" field="test" />
        <FlexFormInput label="Test 6" field="test" />
        <FlexFormInput label="Test 7" field="test" />
        <FlexFormInput label="Test 8" field="test" />
        <FlexFormInput label="Test 9" field="test" />
        <FlexFormInput label="Test 10" field="test" />
      </FlexForm>
    </DialogForm>
  </>
);
