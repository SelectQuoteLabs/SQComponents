import React from 'react';
import * as Yup from 'yup';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import markdown from '../notes/SQForm.md';

import {
  SQForm,
  SQFormTextField,
  SQFormButton,
  SQFormAutocomplete,
} from '../src';

export default {
  title: 'SQForm',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const MOCK_AUTOCOMPLETE_OPTIONS = Array.from(new Array(10000))
  .map(() => {
    const randomValue = random(10 + Math.ceil(Math.random() * 20));
    return {label: randomValue, value: randomValue};
  })
  .sort((a, b) => a.label.toUpperCase().localeCompare(b.label.toUpperCase()));

const MOCK_FORM_ENTITY = {
  firstName: '',
  lastName: '',
  city: '',
  age: '',
  state: '',
  tenThousandOptions: '',
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
        <SQFormTextField name="firstName" label="First name" size={3} />
        <SQFormTextField name="lastName" label="Last name" size={3} />
        <SQFormTextField name="city" label="City" size={3} />
        <SQFormTextField name="age" label="Age" size={1} />
        <SQFormTextField name="state" label="State" size={2} />
        <SQFormAutocomplete
          name="tenThousandOptions"
          label="Ten Thousand Options"
          size={6}
        >
          {MOCK_AUTOCOMPLETE_OPTIONS}
        </SQFormAutocomplete>
        <SQFormTextField name="test" label="test" size={6} />
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
    tenThousandOptions: Yup.string().required('Required'),
  };

  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={MOCK_FORM_ENTITY}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <SQFormTextField
          name="firstName"
          label="First name"
          size={6}
          isRequired={true}
        />
        <SQFormTextField
          name="lastName"
          label="Last name"
          size={6}
          isRequired={true}
        />
        <SQFormTextField name="city" label="City" size={3} />
        <SQFormAutocomplete
          name="tenThousandOptions"
          label="Ten Thousand Options"
          size={6}
          isRequired={true}
        >
          {MOCK_AUTOCOMPLETE_OPTIONS}
        </SQFormAutocomplete>
        <SQFormTextField name="age" label="Age" size={2} isRequired={true} />
        <SQFormTextField name="state" label="State" size={2} />
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
        <SQFormTextField
          name="firstName"
          label="First name"
          size={3}
          onBlur={action('Blur event!')}
        />
        <SQFormTextField
          name="lastName"
          label="Last name"
          size={3}
          onBlur={action('Blur event!')}
        />
        <SQFormTextField
          name="city"
          label="City"
          size={2}
          onBlur={action('Blur event!')}
        />
        <SQFormTextField
          name="age"
          label="Age"
          size={2}
          onBlur={action('Blur event!')}
        />
        <SQFormTextField
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
        <SQFormTextField
          name="firstName"
          label="First name"
          size={3}
          onChange={action('Change event!')}
        />
        <SQFormTextField
          name="lastName"
          label="Last name"
          size={3}
          onChange={action('Change event!')}
        />
        <SQFormTextField
          name="city"
          label="City"
          size={2}
          onChange={action('Change event!')}
        />
        <SQFormTextField
          name="age"
          label="Age"
          size={2}
          onChange={action('Change event!')}
        />
        <SQFormTextField
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

function random(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
