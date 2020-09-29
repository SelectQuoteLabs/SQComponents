import React from 'react';
import CheckMarkIcon from 'material-ui/svg-icons/action/check-circle';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import {IconButton} from '../src';

export default {
  title: 'IconButton',
  decorators: [withKnobs],
};

export const iconButton = () => (
  <IconButton
    IconComponent={CheckMarkIcon}
    title="Icon Button"
    onClick={action('Icon button clicked')}
    isDisabled={boolean('isDisabled', false)}
    isIconTeal={boolean('isIconTeal', false)}
  />
);

export const iconButtonWithCustomSizing = () => (
  <IconButton
    IconComponent={CheckMarkIcon}
    title="Icon Button Custom Sizing"
    onClick={action('Icon button clicked')}
    isDisabled={boolean('isDisabled', false)}
    isIconTeal={boolean('isIconTeal', false)}
    width="1.5rem"
    height="1.5rem"
  />
);
