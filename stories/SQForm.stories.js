import React from 'react';
import * as Yup from 'yup';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
// import {action} from '@storybook/addon-actions';
// import markdown from '../notes/SQForm.md';

import SQForm from '../src/components/SQForm';
import SQTextField from '../src/components/SQForm/SQTextField';
import SQFormButton from '../src/components/SQForm/SQFormButton';

export default {
  title: 'SQForm',
  decorators: [withKnobs, withInfo],
  parameters: {
    // notes: {markdown},
  },
};

const MOCK_FORM_ENTITY = {
  firstName: '',
  lastName: '',
  city: '',
  age: '',
  state: '',
};

export const basicForm = () => {
  const handleSubmit = (values, actions) => {
    console.log({values});
    console.log({actions});
  };
  return (
    <SQForm
      formItemCSSClass="sqForm__item--tight"
      initialValues={MOCK_FORM_ENTITY}
      onSubmit={handleSubmit}
    >
      <SQTextField name="firstName" placeholder="First name" />
      <SQTextField name="lastName" placeholder="Last name" />
      <SQTextField name="city" placeholder="City" />
      <SQTextField name="age" placeholder="Age" />
      <SQTextField name="state" placeholder="State" />
      <div
        style={{display: 'flex', justifyContent: 'flex-end', flex: '1 1 100%'}}
      >
        <SQFormButton>Submit</SQFormButton>
      </div>
    </SQForm>
  );
};

export const formWithValidation = () => {
  const validationSchema = {
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    city: Yup.string(),
    age: Yup.string()
      .min(1, 'Invalid age')
      .max(3, 'Invalid age')
      .required('Age is required'),
    state: Yup.string()
      .min(1, 'Invalid State abbreviation')
      .max(2, 'Invalid State abbreviation'),
  };

  const handleSubmit = (values, actions) => {
    console.log({values});
    console.log({actions});
  };
  return (
    <SQForm
      formItemCSSClass="sqForm__item--tight"
      initialValues={MOCK_FORM_ENTITY}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <SQTextField name="firstName" placeholder="First name" />
      <SQTextField name="lastName" placeholder="Last name" />
      <SQTextField name="city" placeholder="City" />
      <SQTextField name="age" placeholder="Age" />
      <SQTextField name="state" placeholder="State" />
      <div
        style={{display: 'flex', justifyContent: 'flex-end', flex: '1 1 100%'}}
      >
        <SQFormButton>Submit</SQFormButton>
      </div>
    </SQForm>
  );
};
