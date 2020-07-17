import React from 'react';
import markdown from '../notes/ReadOnlyField.md';
import {withInfo} from '@storybook/addon-info';
import {number, text} from '@storybook/addon-knobs';

import {ReadOnlyField} from '../src';

export default {
  title: 'ReadOnlyField',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const readOnlyFieldWithValue = () => {
  return (
    <ReadOnlyField
      label="Campaign"
      value={text('Campaign Value', 'Mapdpd success')}
    />
  );
};

export const readOnlyFieldWithNoValue = () => {
  return <ReadOnlyField label="Campaign empty string" value={''} />;
};

export const readOnlyFieldWithNullValue = () => {
  return <ReadOnlyField label="Campaign null" value={null} />;
};

export const readOnlyFieldWithNumberValue = () => {
  return (
    <ReadOnlyField
      label="Campaign Number size 2"
      value={number('Campaign Number', 5000)}
      size={2}
    />
  );
};
