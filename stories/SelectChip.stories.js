import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/SelectChip.md';

import SelectChip from '../src/components/SelectChip';

export default {
  title: 'SelectChip',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const selectChip = () => (
  <SelectChip
    tabIndex={1}
    onClick={action('SelectChip clicked!')}
    optionIsSelected={boolean(
      'optionIsSelected',
      false,
      'Selected State of SelectChip'
    )}
  >
    lorem ipsum
  </SelectChip>
);

export const selectChipWithMoarContent = () => (
  <SelectChip
    tabIndex={1}
    onClick={action('SelectChip clicked!')}
    optionIsSelected={boolean(
      'optionIsSelected',
      false,
      'Selected State of SelectChip'
    )}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. In egestas erat
    imperdiet sed euismod. Adipiscing at in tellus integer.
  </SelectChip>
);
