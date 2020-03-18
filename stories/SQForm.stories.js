import React from 'react';
import * as Yup from 'yup';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import markdown from '../notes/SQForm.md';

import SQForm from '../src/components/SQForm';
import SQTextField from '../src/components/SQForm/SQTextField';
import SQFormButton from '../src/components/SQForm/SQFormButton';

export default {
  title: 'SQForm',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const MOCK_FORM_ENTITY = {
  firstName: '',
  lastName: '',
  city: '',
  age: '',
  state: '',
};

const handleSubmit = (values, actions) => {
  window.alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
};

export const basicForm = () => {
  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={MOCK_FORM_ENTITY}
        onSubmit={handleSubmit}
        muiGridProps={{spacing: 4}}
      >
        <SQTextField name="firstName" label="First name" size={3} />
        <SQTextField name="lastName" label="Last name" size={3} />
        <SQTextField name="city" label="City" size={3} />
        <SQTextField name="age" label="Age" size={1} />
        <SQTextField name="state" label="State" size={2} />
        <Grid item sm={12}>
          <Grid container justify="flex-end">
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
};

export const formWithValidation = () => {
  const validationSchema = {
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    city: Yup.string(),
    age: Yup.string()
      .min(1, 'Invalid age')
      .max(3, 'Invalid age')
      .required('Required'),
    state: Yup.string()
      .min(1, 'Invalid State abbreviation')
      .max(2, 'Invalid State abbreviation'),
  };

  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={MOCK_FORM_ENTITY}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <SQTextField
          name="firstName"
          label="First name"
          size={6}
          isRequired={true}
        />
        <SQTextField
          name="lastName"
          label="Last name"
          size={6}
          isRequired={true}
        />
        <SQTextField name="city" label="City" size={8} />
        <SQTextField name="age" label="Age" size={2} isRequired={true} />
        <SQTextField name="state" label="State" size={2} />
        <Grid item sm={12}>
          <Grid container justify="flex-end">
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
};

export const basicFormWithCustomOnBlur = () => {
  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={MOCK_FORM_ENTITY}
        onSubmit={handleSubmit}
        muiGridProps={{spacing: 4}}
      >
        <SQTextField
          name="firstName"
          label="First name"
          size={3}
          onBlur={action('Blur event!')}
        />
        <SQTextField
          name="lastName"
          label="Last name"
          size={3}
          onBlur={action('Blur event!')}
        />
        <SQTextField
          name="city"
          label="City"
          size={2}
          onBlur={action('Blur event!')}
        />
        <SQTextField
          name="age"
          label="Age"
          size={2}
          onBlur={action('Blur event!')}
        />
        <SQTextField
          name="state"
          label="State"
          size={2}
          onBlur={action('Blur event!')}
        />
        <Grid item sm={12}>
          <Grid container justify="flex-end">
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
};

export const basicFormWithCustomOnChange = () => {
  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={MOCK_FORM_ENTITY}
        onSubmit={handleSubmit}
        muiGridProps={{spacing: 4}}
      >
        <SQTextField
          name="firstName"
          label="First name"
          size={3}
          onChange={action('Change event!')}
        />
        <SQTextField
          name="lastName"
          label="Last name"
          size={3}
          onChange={action('Change event!')}
        />
        <SQTextField
          name="city"
          label="City"
          size={2}
          onChange={action('Change event!')}
        />
        <SQTextField
          name="age"
          label="Age"
          size={2}
          onChange={action('Change event!')}
        />
        <SQTextField
          name="state"
          label="State"
          size={2}
          onChange={action('Change event!')}
        />
        <Grid item sm={12}>
          <Grid container justify="flex-end">
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
};
