import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import * as Yup from 'yup';
import markdown from '../notes/Dialog.md';

import {SQDialogForm, SQFormDatePicker} from '../src';

export default {
  title: 'SQDialogForm',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

const MOCK_INITIAL_STATE = {
  startDate: '09/22/2020',
  endDate: '09/30/2020',
};

const schema = {
  startDate: Yup.date()
    .required()
    .typeError('Invalid date'),

  endDate: Yup.date()
    .required()
    .typeError('Invalid date'),
};

const handleSubmit = (values, actions) => {
  window.alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
  actions.resetForm();
};

export const sqDialogForm = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <SQDialogForm
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      isDisabled={boolean(
        'isDisabled',
        false,
        'Toggle disabled state of Save Button'
      )}
      maxWidth="sm"
      onClose={action('Close button clicked')}
      onSave={handleSubmit}
      title="SQ Dialog Form"
      initialValues={MOCK_INITIAL_STATE}
      muiGridProps={{
        spacing: 2,
        alignItems: 'center',
      }}
      validationSchema={schema}
    >
      <SQFormDatePicker name="startDate" label="Start Date" />
      <SQFormDatePicker name="endDate" label="End Date" />
    </SQDialogForm>
  </>
);
