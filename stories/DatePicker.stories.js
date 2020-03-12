import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import markdown from '../notes/DatePicker.md';

import {DatePicker} from '../src';

const dateRange = {
  start: '',
  end: '',
};

export default {
  title: 'DatePicker',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const DatePickerExample = () => (
  <DatePicker
    label="Start Date"
    field="start"
    entity={dateRange}
    updateDate={action(`date updated`)}
    disabled={boolean('disabled', false)}
    showTime={boolean('showTime', false)}
  />
);
