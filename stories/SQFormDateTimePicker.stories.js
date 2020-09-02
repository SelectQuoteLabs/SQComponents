import React from 'react';
import moment from 'moment';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import {LocalizationProvider} from '@material-ui/pickers';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {SQForm, SQFormDateTimePicker} from '../src';
import * as Yup from 'yup';

export default {
  title: 'SQFormDateTimePicker',
  decorators: [withKnobs, withInfo],
};

const MOCK_INITIAL_STATE = {
  datetime: '09/22/2020 02:20 PM',
};

const handleSubmit = (values, actions) => {
  window.alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
  actions.resetForm();
};

const schema = {
  datetime: Yup.date()
    .required()
    .min(new Date())
    .max(new Date('2100-10-10'))
    .typeError('Invalid date'),
};

export const basicDateTimePicker = () => {
  return (
    <LocalizationProvider
      dateLibInstance={moment}
      dateAdapter={MomentAdapter}
      locale={'en'}
    >
      <SQForm
        initialValues={MOCK_INITIAL_STATE}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SQFormDateTimePicker name="datetime" label="Date/Time" />
      </SQForm>
    </LocalizationProvider>
  );
};
