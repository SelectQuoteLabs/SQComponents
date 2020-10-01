import React from 'react';
import * as Yup from 'yup';
import {mixed, number, object, string} from 'yup';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/SQDialogStepper.md';

import {
  SQFormTextField,
  SQFormCheckbox,
  SQDialogStep,
  SQDialogStepper,
} from '../src';

export default {
  title: 'SQDialogStepper',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const handleSubmit = (values, actions) => {
  window.alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
  actions.resetForm();
};

export const SQDialogStepperWithValidation = () => {
  return (
    <SQDialogStepper
      title="SQ Stepper Form"
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      onClose={action('Close button clicked')}
      contentHeight="25rem"
      isDisabled={boolean(
        'isDisabled',
        false,
        'Toggle disabled state of Save Button'
      )}
      // contentHeight='30rem'
      fullWidth
      muiGridProps={{
        justify: 'space-between',
        alignItems: 'center',
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        newAccount: false,
        accountID: 0,
        description: '',
        age: 0,
      }}
      setValues={() => {
        console.log('values set');
      }}
      onSubmit={handleSubmit}
    >
      <SQDialogStep
        label="Personal Data"
        validationSchema={object({
          firstName: string().required('Required'),
          lastName: string().required('Required name.'),
        })}
      >
        <SQFormTextField fullWidth name="firstName" label="First Name" />
        <SQFormTextField fullWidth name="lastName" label="Last Name" />
        <SQFormTextField fullWidth name="middleI" label="Middle Initial" />
        <SQFormTextField fullWidth name="nickname" label="Nick-name" />
        <SQFormTextField fullWidth name="alias" label="Alias" />
        <SQFormCheckbox name="newAccount" type="checkbox" label="New Account" />
      </SQDialogStep>
      <SQDialogStep
        label="Account Info"
        validationSchema={object({
          accountID: mixed().when('newAccount', {
            is: true,
            then: number()
              .required()
              .min(100, 'Since this is a new account we need the number'),
          }),
        })}
      >
        <SQFormTextField
          fullWidth
          name="accountID"
          type="number"
          label="Account ID"
        />
        <SQFormTextField name="age" label="Age" size={2} />
      </SQDialogStep>
      <SQDialogStep
        label="More Info"
        validationSchema={object({
          description: Yup.string().required('Required'),
        })}
      >
        <SQFormTextField fullWidth name="description" label="Description" />
      </SQDialogStep>
    </SQDialogStepper>
  );
};
